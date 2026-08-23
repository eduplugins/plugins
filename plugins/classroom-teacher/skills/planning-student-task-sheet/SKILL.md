---
name: student-task-sheet
version: 1.1.0
released: 2026-08-16
description: >
  Translates a teacher's lesson plan or assessment task into a clear,
  student-facing document students can work from independently — instructions,
  scaffolds, success criteria in student language, and a specific extension
  prompt. Trigger when a teacher asks to create a student task sheet,
  student-facing instructions, or a task handout. Works standalone; if a
  lesson plan, unit, or assessment task is already in context it's used as
  the source, otherwise the teacher supplies or describes one.
keywords:
  content-type: Teaching Resource
  thematic-category: Education Objectives And Materials
  use-case-theme: Student Learning And Performance
  use-case:
    - Resource Generation
    - Personalised Learning
    - Curriculum & Lesson Planning
  topics: Scaffolded Instruction
  keyword:
    - Sentence Starters
    - Worked Example
    - Success Criteria
    - Extension Task
    - Vocabulary Support
references:
  - "Australian Education Research Organisation (AERO)"
  - "NSW Department of Education (explicit teaching technique guide)"
  - "Australian Institute for Teaching and School Leadership (AITSL)"
  - "Barak Rosenshine, American Educator (American Federation of Teachers)"
---

# Student Task Sheet Creator

You are translating a teacher's plan into a document students will actually
use. The shift in audience is everything — from curriculum language to student
language, from teacher-facing structure to student-navigable steps.

A good task sheet is clear enough that a student can get started without
asking the teacher to explain it, and honest enough about the success criteria
that students know what good looks like before they begin.

---

## Gotchas

- **Success criteria should be checkable mid-task, not just readable once at
  the top.** Phrase them so a student can literally check themselves against
  each one while working, not only read them before starting.
- **Scaffolding isn't binary.** If this task follows earlier ones in the same
  unit, ask whether scaffolds should be lighter than last time rather than
  defaulting to the same level of support every time.
- **A worked first step often serves procedural or analytical tasks (maths,
  text analysis) better than a sentence starter.** Sentence starters suit
  writing and language tasks; branch to a modelled step for procedural ones
  instead of defaulting to language scaffolds across the board.

---

## Startup & Context Check
Before asking the teacher any questions, silently perform this context check:
1. **Check Memory / Profile:** Look for saved session memory or loaded profile skills (`*-edu-profile`) containing school name, curriculum, year levels, or pedagogy framework.
2. **Check for Orchestrator:** If the `edu-plugin-orchestrator` is active and profile context is missing, invoke its Step 0 Personalisation Interview so details are saved globally.
3. **Standalone Fallback:** If operating standalone (no memory, no orchestrator), prompt the teacher directly for their curriculum, year level, and topic.

---

## What this skill needs

- Curriculum and year level. If already known from earlier in this
  conversation, don't ask again.
- Working mode — ask if not already established:
  > "Would you prefer we build this together step by step, or would you like
  > me to ask a few questions and produce a full draft?"

---

## Step 1: Get the source document

If a lesson plan or assessment task was produced this session: it's already
in context — proceed.

If standalone, ask:
> "Paste in the lesson plan or assessment task you'd like me to turn into
> a student task sheet. Or just describe the task and I'll build from that."

If year level isn't already known:
> "What year level is this for? That shapes the reading level and how much
> scaffolding to include."

---

## Step 2: Check for a template

If the teacher has already supplied a task-sheet template or format profile
— in this conversation or as a reference file — use it instead of the
default structure below.

---

## Step 3: Ask one planning question

Before generating, ask:

> "A couple of quick things — does this task need sentence starters or a
> worked example for students who need support? If this follows earlier
> tasks in the same unit, should the scaffolding be lighter than last time?
> And are there students who'll need an extension challenge once they're
> done?"

Use the answers to shape the Scaffolds and Extension sections. If the source
document already makes differentiation clear, skip this question and apply
what's there.

---

## Step 4: Generate the task sheet

**Language principles:**
- Active voice, direct address ("You will…" / "Your task is to…")
- Vocabulary at or just below the year level — not dumbed down, but clear
- No curriculum codes, learning area jargon, or teacher-facing terminology
- Instructions in logical sequence — numbered, not bulleted
- One instruction per step

---

**STUDENT TASK SHEET**

**Task:** [Title]
**Subject:**
**Year Level:**
**Date / Due:**

---

**What we are learning**
[Learning intention in student language — "We are learning to…" or
"By the end of this task, you will be able to…"]

---

**What you need to do**

Step 1: [First action — specific and concrete]
Step 2: [Next action]
Step 3: [Continue until the task is fully described]

*(Use as many steps as needed — clarity over brevity)*

---

**You will need**
- [Materials, texts, websites, tools needed for the task]

---

**What good looks like** *(Success criteria)*

By the end of this task, you should be able to say:
- "I can [criterion 1 in student language]"
- "I can [criterion 2]"
- "I can [criterion 3]"

*(Match the lesson's success criteria — rewritten for a student reader.
Phrase each as a checklist item a student can tick off against their own
work mid-task, not just read once before starting.)*

---

**Scaffolds** *(include if relevant)*

Default to whichever fits the task's demand — don't apply both by default:

*Sentence starters* — for writing, analysis, or other language-demand tasks:
- "This text is arguing that… because…"
- "One way [person/character/event] shows [quality] is…"
- "I chose [option] because…"

*Worked first step* — for procedural or analytical tasks (e.g. maths,
data, text analysis): model the first step in full so students see the
method before continuing alone.

*(Only include what's relevant to this specific task — don't be generic.
Omit the whole section if the teacher confirmed no scaffolds are needed.)*

---

**Vocabulary to know**

| Word / term | What it means |
|---|---|
| [Key term] | [Plain English definition] |
| [Key term] | [Plain English definition] |

*(Include only terms students need for this task and may not know)*

---

**Finished early?**
[Specific extension activity — not "read your book." Deepen the same
learning goal the task is already targeting, rather than introducing
unrelated content.]

E.g. "If you've finished, try [specific extension prompt that goes deeper
into the same concept]"

*(Omit this section if the teacher confirmed no extension is needed)*

---

**How this will be assessed**
[Brief, honest statement — e.g. "Your teacher will read your written response
and use the checklist above to give you feedback" or "This is practice — your
teacher will give you verbal feedback during the lesson."]

---

## Step 5: Check-in and handoff

> "Here's the student task sheet. Would you like me to adjust the reading
> level, add more scaffolding, or simplify any of the steps?"

After any adjustments, offer the natural next step:

> "If you'd like a slide deck to go with this lesson, I can build one from
> the same plan."

---

## Output format

Once finalised, deliver the complete document in a dedicated standalone container (e.g., an Artifact, Canvas, or single Markdown code block) rather than inline chat text. This is a document the teacher will save, adapt, or paste into school systems.

- If the teacher requests a specific file format (e.g. .docx, .pdf), generate that file if your environment supports it; otherwise, deliver clean Markdown ready to copy.
- Only answer inline without a document container if the teacher is asking a quick conversational question or iterating on a small excerpt (provide a targeted diff, not a full re-generation).
- Keep chat text outside the container brief (1–2 sentences confirming completion). Do not duplicate the document contents in the chat message.

---

## Evidence base
- AERO (2024), *Scaffold practice guide* — worked examples, process
  worksheets, and annotated work samples, with scaffolds fading as students
  gain proficiency.
  <https://www.edresearch.edu.au/sites/default/files/2024-11/AERO-practice-guide-scaffold-practice-aa.pdf>
- NSW Department of Education (2025), *Sharing learning intentions and
  success criteria* — success criteria should be referred back to and
  checked against throughout the task, not just read once at the start.
  <https://education.nsw.gov.au/content/dam/main-education/documents/teaching-and-learning/curriculum/explicit-teaching/explicit-teaching-technique-guide-lisc-sharing.pdf>
- AITSL, Standard 3 — professional basis for shaping learning resources to
  the student audience and for challenging, goal-aligned extension work.
  <https://www.aitsl.edu.au/standards>
- Rosenshine (2012), *Principles of Instruction* — worked examples before
  independent practice, and keeping working memory load manageable through
  single-instruction steps.
  <https://www.aft.org/ae/spring2012/rosenshine>