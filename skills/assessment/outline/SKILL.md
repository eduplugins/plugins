---
name: outline
version: 1.1.0
released: 2026-08-16
description: >
  Writes a formal assessment task outline — task description, conditions,
  mode, curriculum links, and a pointer to the rubric — clear enough for a
  student to follow and precise enough for a colleague to administer
  consistently. Always grounds the outline in real curriculum content and
  achievement descriptors before generating; never invents them. Trigger
  when a teacher needs to write up a formal assessment task, brief, or task
  sheet for any subject or year level. Works standalone.
keywords:
  content-type: Assessment
  thematic-category: Education Objectives And Materials
  use-case-theme: Student Learning And Performance
  use-case:
    - Curriculum & Lesson Planning
    - Assessment And Feedback
    - Personalised Learning
  topics: Assessment Design
  keyword:
    - Task Outline
    - Assessment Conditions
    - Task Brief
    - Curriculum Links
    - Achievement Descriptors
references:
  - "NSW Education Standards Authority (NESA)"
  - "Australian Curriculum, Assessment and Reporting Authority (ACARA)"
  - "Australian Institute for Teaching and School Leadership (AITSL)"
---

# Assessment Outline

You are helping a teacher write up a formal assessment task. The output should
be clear enough for a student to understand what they need to do, and precise
enough for a teacher or colleague to administer it consistently.

---

## Gotchas

- Assessment purpose isn't just formative vs summative — NESA also names
  assessment *as* learning (students monitoring and taking responsibility for
  their own progress). Surface that as a real third option, not a subset of
  formative, when asking about purpose.
- Accessibility is a first-order assessment principle, not an optional
  differentiation add-on — check it early rather than leaving it as the last
  planning question.
- A formal, summative outline like this is meant to sit inside a broader mix
  that also includes informal, formative checks (e.g. a quick exit-ticket
  style check) — don't let it stand in as a class's only assessment evidence.

---

## What this skill needs

- Curriculum, year level, teaching context, and (if relevant) a pedagogy
  framework, working mode, template, or differentiation context. If already
  known from earlier in this conversation, don't ask again.
- Working mode — ask if not already established:
  > "Would you prefer we build this together step by step, or would you like
  > me to ask a few questions and produce a full draft?"

---

## Establish curriculum content
Establish the real curriculum content for this subject and year level, using
whatever curriculum lookup capability is available in this session. Never
use training data for curriculum standards — if no lookup capability is
available, ask the teacher to paste the relevant standards.

For an assessment outline, establish **both**:
- The curriculum standards for the subject/year level — to ground the task
  description in what students have been learning
- The achievement descriptors for the subject/year level — to anchor the
  rubric descriptors a rubric will use next

Establishing both now means a rubric can be built immediately afterward
without re-establishing them.

---

## Planning questions

Ask these before generating. Skip any already established earlier in the
session.

1. What subject, year level, and unit or topic is this assessment for?
   *(Skip if already known from earlier in the conversation.)*
2. Is this assessment *for* learning (formative, lower stakes), *as* learning
   (students monitoring and reflecting on their own progress), or *of*
   learning (summative, for reporting)? Tasks can combine purposes — e.g. a
   summative task with a built-in self-assessment or reflection component.
3. What **mode** suits this task and class? This formal outline is one piece
   of a broader assessment mix — informal, formative checks (e.g. an exit
   ticket) can cover the rest.
   Options: written response / oral presentation / multimodal / practical
   demonstration / digital product / performance / portfolio / other
4. What are the **conditions**?
   - Time allowed (in class, take-home, or both?)
   - Word count / duration / scope
   - Resources permitted (open book? notes? internet?)
5. When is it due or administered, and does it carry a weighting in the
   broader assessment schedule?
6. Does this task need **accessibility adjustments** for any students —
   modified conditions, alternative modes, or additional scaffolds? Treat
   this as a required check, not an optional extra: assessment must be
   accessible to all students, not just those who happen to fit the default
   task design.

---

## Generate the assessment outline

Use the curriculum content fetched above. Surface the most relevant curriculum
standards and achievement descriptors as suggestions for the teacher to confirm
or adjust — don't ask the teacher to name them from memory.

### If a template is loaded: match its structure exactly.

### If no template is loaded, use this best-practice structure:

---

**ASSESSMENT TASK OUTLINE**

**Task title:**
**Subject:**
**Year Level:**
**Unit / Topic:**
**Task type:** Formative / Summative [note any built-in self-assessment or
reflection component]
**Mode:** [Written / Oral / Multimodal / Practical / Digital / Performance]

**Curriculum links:**

*[Curriculum standards label]:*
[Code + full description text for each relevant standard]

*[Achievement descriptors label]:*
[Relevant excerpt from achievement descriptor — quote exactly from the
content established above. This is what a rubric will use to write grade
descriptors.]

**Task overview:**
1–2 sentences in plain language. What is the task?
e.g. "Students will write a persuasive letter to a local council member
arguing for or against a proposed development in their community."

**Task description:**
Full explanation of what students are required to do.
- What is the stimulus or starting point (if any)?
- What must students produce?
- What is the purpose and audience?
- What process are they expected to follow?

Written clearly enough that a student can read this and understand what to
do without additional explanation.

**Conditions:**
- **Time:** [In class: X minutes / Take-home: due [date] / Both]
- **Length / scope:** [Word count / duration / number of slides / etc.]
- **Resources permitted:** [Open book / notes allowed / internet access /
  no resources / specific resources listed]
- **Collaboration:** [Individual / pair / group]

**Scaffolding and support:**
[Scaffolds provided to all students — e.g. planning template, vocabulary
list, sentence starters.]
Note: additional adjustments for specific students are recorded in class
records, not in the task outline.

**Submission / administration:**
[How and where students submit or perform the task.]

**Assessment:**
This task will be assessed using the rubric aligned to the [year level]
[achievement descriptors label]. [Attach rubric or note that it follows.]

**Feedback:**
Students will receive [written / verbal / annotated] feedback by [date].

---

## Validity check before delivering

Before presenting the outline, confirm the task description still matches
the exact curriculum standards established above — that there is clear
alignment between the standards, the task, and what the rubric will assess.
If the task has drifted from that content while drafting, revise the task
description rather than the curriculum links.

---

## Curriculum terminology

If specific terminology has already been established earlier in this
conversation (labels for curriculum standards or achievement descriptors),
replace the bracketed labels in the output template above with those terms.

Otherwise use neutral language:
- "curriculum standards" or "curriculum links"
- "achievement descriptors"

Mirror any terminology the teacher has already used in the conversation.
Do not default to the language of any one curriculum without a reason to.

---

## Working mode

### MODE: COLLABORATE
After fetching curriculum and asking planning questions:
1. Surface the proposed curriculum standards and achievement descriptors.
2. Check in: *"Here are the curriculum links I'm planning to use — do these
   match the focus of this task before I write the full outline?"*
3. Generate the full assessment outline.
4. Check in: *"Here's the outline — what would you like to adjust?"*

### MODE: DRAFT
Ask all planning questions upfront, then produce the complete outline in one
pass. Close with:
*"Here's your assessment outline — let me know what you'd like to change."*

---

## Output format

Once finalised, deliver the complete document in a dedicated standalone container (e.g., an Artifact, Canvas, or single Markdown code block) rather than inline chat text. This is a document the teacher will save, adapt, or paste into school systems.

- If the teacher requests a specific file format (e.g. .docx, .pdf), generate that file if your environment supports it; otherwise, deliver clean Markdown ready to copy.
- Only answer inline without a document container if the teacher is asking a quick conversational question or iterating on a small excerpt (provide a targeted diff, not a full re-generation).
- Keep chat text outside the container brief (1–2 sentences confirming completion). Do not duplicate the document contents in the chat message.

---

## Evidence base
- NESA, *Assessment principles* (current) — backs fetching and quoting live
  curriculum content rather than relying on recall, and the validity check
  above (alignment between syllabus, task, and criteria).
  <https://curriculum.nsw.edu.au/assessment-and-reporting/assessment-principles>
- NESA, *Purpose of assessment* (current) — backs distinguishing assessment
  for/as/of learning rather than a formative/summative binary.
  <https://curriculum.nsw.edu.au/assessment-and-reporting/assessment-in-stage-6/purpose-of-assessment>
- ACARA, *Planning, teaching, assessing and reporting* (current) — backs
  fetching both curriculum standards and achievement descriptors, since
  achievement standards anchor the whole assess-and-report cycle.
  <https://www.australiancurriculum.edu.au/help/f-10-curriculum-overview/planning--teaching--assessing-and-reporting>
- AITSL, Australian Professional Standards for Teachers, Standard 5.1
  (current) — backs the range of modes offered and the expectation that
  formal, summative tasks sit alongside informal, formative approaches.
  <https://www.aitsl.edu.au/standards>
---

## Offer to build the rubric next

After generating the outline:

> "Would you like me to build the rubric for this task now? I already have
> the [achievement descriptors label] established — I can move straight into
> writing the grade descriptors without starting over."

If yes, carry forward directly:
- The achievement descriptors already established (exact text)
- The task title, mode, and conditions
- Any differentiation context from this session

There's no need to re-establish curriculum content — it's already in context.
