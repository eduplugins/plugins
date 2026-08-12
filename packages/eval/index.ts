// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Score = {
    name: string
    score: number
}

export type Scorer<Input, Output, Expected> = (args: {
    input: Input
    output: Output
    expected: Expected
}) => Score

export type RunResult<Input, Output, Expected> = {
    caseIndex: number
    input: Input
    output: Output
    expected: Expected
    scores: Score[]
    durationMs: number
}

export type ExperimentSummary<Input, Output, Expected> = {
    experimentId: string
    name: string
    model: string
    datasetKey: string
    results: RunResult<Input, Output, Expected>[]
    averages: Record<string, number>
    totalDurationMs: number
}

export type EvalCallbacks<Input, Output, Expected> = {
    /** Called once when the experiment starts. Return an experiment ID. */
    onExperimentStart?: (meta: {
        name: string
        model: string
        datasetKey: string
        trialCount: number
        comment?: string
        metadata?: Record<string, unknown>
    }) => string | Promise<string>

    /** Called after each test case completes (per trial). */
    onRunComplete?: (
        run: RunResult<Input, Output, Expected> & { experimentId: string }
    ) => void | Promise<void>

    /** Called once after all cases and trials finish. */
    onExperimentComplete?: (
        summary: ExperimentSummary<Input, Output, Expected>
    ) => void | Promise<void>

    /**
   * If defined, the runner will prompt the user after the experiment
   * completes, asking whether to persist results. If the user agrees
   * they must provide a comment describing the experiment context.
   */
    onPersist?: (
        summary: ExperimentSummary<Input, Output, Expected>,
        comment: string
    ) => void | Promise<void>
}

export type EvalConfig<Input, Output, Expected> = {
    name: string
    model: string
    datasetKey: string
    comment?: string
    metadata?: Record<string, unknown>

    /** Load test cases. */
    data: () => Promise<{ input: Input; expected: Expected }[]>

    /** Run the AI task for a single input. */
    task: (input: Input) => Output | Promise<Output>

    /** Scoring functions applied to each run. */
    scores: Record<string, Scorer<Input, Output, Expected>>

    /** Max parallel task calls (default: 1). */
    maxConcurrency?: number

    /** Repeat each case N times to measure variance (default: 1). */
    trialCount?: number

    /** Persistence / reporting hooks. */
    callbacks?: EvalCallbacks<Input, Output, Expected>
}

// ---------------------------------------------------------------------------
// CLI prompt helpers
// ---------------------------------------------------------------------------

function prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
        process.stdout.write(question)
        let data = ""
        const onData = (chunk: Buffer) => {
            data += chunk.toString()
            if (data.includes("\n")) {
        process.stdin.removeListener("data", onData)
        process.stdin.pause()
        resolve(data.trim())
            }
        }
        process.stdin.resume()
        process.stdin.on("data", onData)
    })
}

async function promptConfirm(question: string): Promise<boolean> {
    const answer = await prompt(`${question} (y/n): `)
    return answer.toLowerCase() === "y"
}

async function promptRequired(question: string): Promise<string> {
    let answer = ""
    while (!answer) {
        answer = await prompt(`${question}: `)
        if (!answer) {
            console.log("A comment is required.")
        }
    }
    return answer
}

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

async function runWithConcurrency<T>(
    items: (() => Promise<T>)[],
    concurrency: number
): Promise<T[]> {
    const results: T[] = new Array(items.length)
    let nextIndex = 0

    async function worker() {
        while (nextIndex < items.length) {
            const index = nextIndex++
            results[index] = await items[index]()
        }
    }

    await Promise.all(Array.from({ length: concurrency }, () => worker()))
    return results
}

export async function evaluate<Input, Output, Expected>(
    config: EvalConfig<Input, Output, Expected>
): Promise<ExperimentSummary<Input, Output, Expected>> {
    const {
        name,
        model,
        datasetKey,
        comment,
        metadata,
        data,
        task,
        scores,
        maxConcurrency = 1,
        trialCount = 1,
        callbacks,
    } = config

    // Generate experiment ID (or let the callback provide one)
    const experimentId =
        (await callbacks?.onExperimentStart?.({
            name,
            model,
            datasetKey,
            trialCount,
            comment,
            metadata,
        })) ?? crypto.randomUUID()

    const testCases = await data()
    const allResults: RunResult<Input, Output, Expected>[] = []

    // Build work items: each test case × each trial
    const workItems = testCases.flatMap((testCase, caseIndex) =>
        Array.from({ length: trialCount }, () => async () => {
            const start = performance.now()
            const output = await task(testCase.input)
            const durationMs = Math.round(performance.now() - start)

            const runScores = Object.values(scores).map((scorer) =>
                scorer({
                    input: testCase.input,
                    output,
                    expected: testCase.expected,
                })
            )

            const run: RunResult<Input, Output, Expected> = {
                caseIndex,
                input: testCase.input,
                output,
                expected: testCase.expected,
                scores: runScores,
                durationMs,
            }

            await callbacks?.onRunComplete?.({ ...run, experimentId })

            return run
        })
    )

    const results = await runWithConcurrency(workItems, maxConcurrency)
    allResults.push(...results)

    // Compute averages per scorer across all runs
    const scoreTotals: Record<string, { sum: number; count: number }> = {}
    for (const run of allResults) {
        for (const s of run.scores) {
            if (!scoreTotals[s.name]) {
                scoreTotals[s.name] = { sum: 0, count: 0 }
            }
            const entry = scoreTotals[s.name]
            entry.sum += s.score
            entry.count += 1
        }
    }

    const averages: Record<string, number> = {}
    for (const [scorerName, { sum, count }] of Object.entries(scoreTotals)) {
        averages[scorerName] = sum / count
    }

    const totalDurationMs = allResults.reduce((sum, r) => sum + r.durationMs, 0)

    const summary: ExperimentSummary<Input, Output, Expected> = {
        experimentId,
        name,
        model,
        datasetKey,
        results: allResults,
        averages,
        totalDurationMs,
    }

    await callbacks?.onExperimentComplete?.(summary)

    // Interactive persistence prompt
    if (callbacks?.onPersist) {
        const shouldPersist = await promptConfirm(
            "\nPersist this experiment to the remote database?"
        )
        if (shouldPersist) {
            const persistComment = await promptRequired("Comment")
            await callbacks.onPersist(summary, persistComment)
        }
    }

    return summary
}
