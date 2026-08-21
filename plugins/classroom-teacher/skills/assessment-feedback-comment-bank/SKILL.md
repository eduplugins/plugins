---
name: feedback-comment-bank
version: 1.1.0
released: 2026-08-16
description: >
  Generates a reusable bank of written feedback phrases, organised by rubric
  criterion and grade band, grounded in the rubric or achievement standards
  and adapted to a teacher's voice profile if one is available.
  Trigger when a teacher needs to mark a class set faster and more
  consistently, wants ready-made report-comment language, or already has a
  rubric or assessment outline and needs feedback phrases to match it.
keywords:
  content-type: Assessment
  thematic-category: Education Objectives And Materials
  use-case-theme: Student Learning And Performance
  use-case:
    - Assessment And Feedback
    - Student-Teacher Comms & Feedback
    - Resource Generation
  topics: Marking And Feedback
  keyword:
    - Feedback Phrases
    - Comment Bank
    - Grade Band
    - Marking
    - Report Comments
references:
  - "John Hattie and Helen Timperley, Review of Educational Research (American Educational Research Association)"
  - "Joe Collin and Alex Quigley, Education Endowment Foundation (EEF)"
  - "NSW Department of Education (CESE)"
  - "Australian Institute for Teaching and School Leadership (AITSL)"
---

# Feedback Comment Bank

You are generating a bank of written feedback phrases a teacher can use when
marking a class set of assessments. The goal is to make feedback faster to
write, more consistent across the class, and more specific than generic
comments like "well done" or "needs improvement."

Good feedback phrases are: specific to the criterion, actionable (the student
knows what to do differently), varied enough to not sound identical across
25 scripts, and honest about both strength and growth. Specificity and
actionability aren't style preferences — feedback research finds vague,
copy-pasted comments are exactly the low-precision feedback that fails to
close the gap between current and desired performance (see Evidence base).

---

## What this skill needs

- Curriculum, subject, and year level for the task.
- A rubric or set of criteria with grade bands. If none is supplied, build
  from the relevant achievement standards for the stated curriculum, subject,
  and year level — ask the teacher to paste them in if they have them handy,
  or use whatever curriculum lookup capability is available in this session.
- Optional: a teacher voice profile (tone/style guidance), from
  `references/voice-style.md` if present, or supplied directly.

If any of these are already available in context — from earlier in this
conversation or supplied directly by the teacher or another tool — use them
directly rather than re-asking. Only ask for what's genuinely missing.

---

## Step 1: Confirm working mode and inputs

If working mode isn't already established, ask:
> "Would you prefer we build this together step by step, or would you like me
> to ask a few questions and produce a full draft?"

If curriculum and year level aren't already known, ask for them. Store the
answers and don't ask again this session.

---

## Step 2: Establish rubric, criteria, and grade bands

If rubric/criteria with grade bands are already available in context, extract
them directly — don't ask.

Otherwise:
> "Do you have a rubric or criteria to work from? If so, paste them in. If
> not, tell me the task and I'll build from the achievement standards — paste
> them in if you have them, or let me know if I should look them up."

If no rubric or achievement standards are available at all, ground the
comment bank in the task description and general good-practice criteria for
the subject and year level, and say so plainly in the output rather than
inventing standards.

Grade bands: use whatever bands the rubric or standards specify. If none are
given, default to A / B / C / D / E and confirm with the teacher if it
matters for their context.

---

## Step 3: Generate the comment bank

For each criterion, produce 3–5 phrases per grade band. Apply the teacher's
voice profile if available. If no voice profile is set, default phrases are
clear, warm, and professional — appropriate for a secondary or upper primary
audience.

Vary sentence structure and opening so teachers aren't copying the same phrase
across 30 scripts — a repeated phrase used verbatim tends to drift toward
generic praise or diagnosis, which is weaker feedback than a phrase specific
to what this student's work actually shows.

Keep every opener naming what the student *did* in the work ("You have
demonstrated...") rather than generic praise of the person ("Great job!",
"Well done!") — self-directed praise is the weakest form of feedback and
doesn't tell the student anything to repeat or fix.

---

**FEEDBACK COMMENT BANK**

**Task:** [Task name]
**Subject / Year Level:**

---

**Criterion: [Name]**

*[Band 1 — e.g. A / Excellent]:*
- "[Phrase showing specific, high-level achievement on this criterion]"
- "[Alternative phrasing — different opening, same standard of work]"
- "[Third option — may highlight a particular strength within this band]"

*[Band 2 — e.g. B / High]:*
- "[Phrase showing strong work with minor areas still to sharpen]"
- "[Alternative]"

*[Band 3 — e.g. C / Sound]:*
- "[Phrase showing the standard is met — accurate but not effusive]"
- "[Alternative — may name what elevates to Band 2 as a growth prompt]"

*[Band 4 — e.g. D / Developing]:*
- "[Phrase that names what's present AND what's missing — specific]"
- "[Alternative — frames as next step rather than deficit]"

*[Band 5 — e.g. E / Limited]:*
- "[Phrase that is honest without being discouraging — names the gap clearly]"
- "[Alternative — focuses on what the student can do to move forward]"

---

*(Repeat for each criterion)*

---

**General opening phrases (to vary beginnings):**

Strength openers:
- "You have demonstrated..."
- "A strength of your work is..."
- "This response clearly shows..."
- "You have effectively..."

Growth openers:
- "To strengthen this further..."
- "The next step is to..."
- "Consider how you might..."
- "Your work would benefit from..."

Closing / forward-looking phrases:
- "Keep building on this foundation."
- "This puts you in a strong position for [next task]."
- "Focus on [specific skill] in your next piece."

---

## Evidence base
- Hattie & Timperley, University of Melbourne / *Review of Educational
  Research* (2007) — backs requiring phrases to be specific and actionable
  rather than generic, and keeping openers task-focused rather than
  self-directed praise.
  <https://journals.sagepub.com/doi/abs/10.3102/003465430298487>
- Education Endowment Foundation, Collin & Quigley (2021) — backs feedback
  that names a concrete next step and is realistic for students to actually
  use, informing the "1–2 priority phrases" guidance below.
  <https://files.eric.ed.gov/fulltext/ED615988.pdf>
- NSW DoE/CESE, *What Works Best 2025 — Effective feedback* (2025) — backs
  grounding every phrase in the stated criterion, aligned to the task's
  learning intention. Effectiveness still varies by context and subject, so
  no phrase bank guarantees an outcome on its own.
  <https://education.nsw.gov.au/content/dam/main-education/about-us/educational-data/cese/What_Works_Best_2025_Effective_feedback_practical_guide.pdf>
- AITSL, Australian Professional Standards for Teachers, Standard 5.2
  (current) — timely, well-targeted feedback is a formal expectation of
  Australian teaching practice, which this skill supports at class-set scale.
  <https://www.aitsl.edu.au/standards>

## Quality check before delivering

Before presenting the comment bank, verify each phrase tells the student a
specific next action, not just a diagnosis — "your argument needs stronger
evidence" names a gap; "use two quoted examples from the text to support each
claim" tells the student what to do about it. Favour the second form.

Note for teachers using the bank: pick 1–2 priority phrases per student
rather than compiling every applicable comment onto one script — a dense list
of correct-but-unprioritised feedback is harder for a student to act on than
a short, targeted one.

---

## Step 4: Offer next steps

> "Here's the comment bank. Where would you like to go from here — would you
> like to use these to write individual student feedback, or move on to drafting
> report comments? I can also adjust the tone or add more phrases for a specific
> criterion if anything needs tweaking."

---

## Reference files
- `references/voice-style.md` — Teacher voice profile (if captured)
