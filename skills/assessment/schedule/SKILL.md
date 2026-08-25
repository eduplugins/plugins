---
name: schedule
version: 1.1.0
released: 2026-08-16
description: >
  Creates a term or year assessment schedule — a chronological overview of
  every assessment task, when it occurs, what mode it uses, and which
  curriculum standards it addresses — then flags imbalances like clustered
  summative tasks, mode monotony, or standards with no assessment coverage.
  Grounds itself in real achievement standards and suggests standard
  mappings per task for the teacher to confirm, adjust, or swap before
  finalising. Trigger when a teacher is planning a term or year's assessment
  program, or wants to share an assessment overview with students and
  families.
keywords:
  content-type: Assessment
  thematic-category: Education Objectives And Materials
  use-case-theme: Student Learning And Performance
  use-case:
    - Curriculum & Lesson Planning
    - Assessment And Feedback
    - Student Progress Tracking
  topics: Assessment Planning
  keyword:
    - Assessment Schedule
    - Term Planning
    - Standards Mapping
    - Balance Check
    - Reporting Alignment
references:
  - "NSW Department of Education (CESE)"
  - "NSW Education Standards Authority (NESA)"
  - "Australian Curriculum, Assessment and Reporting Authority (ACARA)"
  - "Australian Institute for Teaching and School Leadership (AITSL)"
---

# Assessment Schedule

You are helping a teacher plan their assessment program across a term or year.
The schedule should show a balanced, well-paced program — not too front-loaded,
not too back-loaded, with a healthy mix of formative and summative tasks and
varied modes.

---

## Gotchas

- No source backs a specific ideal ratio of formative to summative tasks, or
  an exact spacing between summative tasks. Present the balance-check rules
  in Step 4 as practical scheduling heuristics (avoid clustering, avoid mode
  monotony), not as precise, research-derived numbers.
- Assessment purpose isn't just formative vs summative — NESA also names
  assessment *as* learning (students monitoring their own progress). A
  well-rounded schedule can include tasks tagged for that too, not just the
  two standard types.

---

## What this skill needs

- Curriculum, year level, teaching context, and (if relevant) a pedagogy
  framework, working mode, or unit topics already established this session.
  If already known, don't ask again. Otherwise ask:
  > "Which curriculum are you working with, what subject and year level are
  > we scheduling for, and are we planning for a term or a full year?"
- Working mode — ask if not already established:
  > "Would you prefer we build this together step by step, or would you like
  > me to ask a few questions and produce a full draft?"

---

## Establish curriculum content
Establish the achievement standards for this subject and year level, using
whatever curriculum lookup capability is available in this session. Never
use training data for curriculum standards — if no lookup capability is
available, ask the teacher to paste the relevant standards.

Once established, analyse the achievement standards and identify which
portions are most likely to map to each assessment task in the schedule.
Surface these as suggested mappings for the teacher to confirm, adjust, or
swap — do not present walls of standard text. Reference standards by code or
short label in the schedule table, and include full standard text in an
appendix at the end.

---

## Step 1: Planning questions

Ask these before generating. Combine where natural — one clear question beats
two thin ones.

1. How many units are planned for this term/year, and what are the topics?
2. Are there any fixed dates or school events that constrain timing?
   (e.g. reporting deadlines, excursions, school events)
3. Does your school have any expectations around formative vs summative balance,
   or mandated task types (e.g. must include an oral task)?
4. What modes suit this class — written, oral, multimodal, practical, digital?

---

## Step 2: Suggest standard mappings

Before generating the schedule, present suggested standard mappings for the
teacher to review:

> "Based on the achievement standards for [subject, year level], here's how
> I'd suggest mapping tasks to standards. Let me know if you'd like to adjust
> any of these before I build the schedule."

| Suggested task | Type | Suggested standard/s | Rationale |
|---|---|---|---|
| [Task name] | Formative / Summative / As-learning | [Code or short label] | [One sentence — why this standard fits this task type] |

Invite the teacher to confirm, swap standards, rename tasks, or add tasks
before proceeding.

---

## Step 3: Generate the assessment schedule

---

**ASSESSMENT SCHEDULE**

**Subject:**
**Year Level:**
**Period:** Term X / Full Year [Year]
**Teacher:**

**Assessment overview:**
Brief statement of the assessment philosophy for this subject/year level.
E.g. "Assessment is balanced across formative and summative tasks, using
a range of modes to allow all learners to demonstrate understanding."

**Schedule:**

| # | Task name | Type | Mode | Timing | Duration | Standards addressed | Notes |
|---|---|---|---|---|---|---|---|
| 1 | | Formative | Written | Week 2 | 30 min | [code / label] | |
| 2 | | Summative | Oral | Week 5 | 10 min per student | [code / label] | |
| 3 | | Summative | Multimodal | Week 8 | | [code / label] | |

Tag a task "As-learning" in the Type column where it has a built-in
self-assessment or reflection component, alongside or instead of
Formative/Summative.

**Balance check:**
- Formative tasks: X
- Summative tasks: X
- Modes used: [list]
- Standards coverage: [note any gaps — a gap here means part of the
  achievement standard risks going unassessed by reporting time, not just an
  administrative oversight]

**Reporting alignment:**
Note which tasks feed into end-of-term or end-of-year reporting,
and which standards each reporting task addresses.

---

**Appendix — Achievement standards reference**

[Full achievement standard text for this subject and year level, as
established above. Organised by strand or strand component where
applicable.]

---

## Step 4: Balance review

After generating, flag any imbalances using these practical scheduling
heuristics (not research-derived cutoffs):
- More than 2 summative tasks in consecutive weeks → suggest redistributing
- All tasks in the same mode → suggest adding variety
- Standards with no assessment task → flag the gap

> "Here's the assessment schedule. I've noted [any imbalance] — would you
> like to adjust the timing or add a task to cover [gap]? It's also worth
> sharing this with your faculty or year-level team, particularly if others
> teach the same year level — comparing schedules is where moderation gaps
> tend to surface early."

---

## Evidence base
- NSW DoE/CESE, *What Works Best 2025 — Assessment* (2025) — backs balancing
  formative and summative tasks across the whole program, and planning and
  moderating assessment collaboratively rather than task-by-task.
  <https://education.nsw.gov.au/content/dam/main-education/about-us/educational-data/cese/What_Works_Best_2025_Assessment_practical_guide.pdf>
- NESA, *Purpose of assessment* (current) — backs the for/as/of learning
  distinction reflected in the Type tagging above.
  <https://curriculum.nsw.edu.au/assessment-and-reporting/assessment-in-stage-6/purpose-of-assessment>
- ACARA, *Planning, teaching, assessing and reporting* (current) — backs
  treating standards coverage across the full schedule, not just per task,
  as the unit of planning.
  <https://www.australiancurriculum.edu.au/help/f-10-curriculum-overview/planning--teaching--assessing-and-reporting>
- AITSL, Australian Professional Standards for Teachers, Standard 5.1
  (current) — backs the mode-variety check (a schedule using only one
  assessment type doesn't reflect the range of strategies expected).
  <https://www.aitsl.edu.au/standards>
---

## Step 5: Offer next step

> "With the schedule in place, a natural next step is building a rubric for
> one of these tasks — or if you haven't designed the individual tasks in
> detail yet, I can help write up a full task outline for any of them first."
