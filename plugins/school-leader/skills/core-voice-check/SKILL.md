---
name: voice-check
version: 1.0.0
released: 2026-08-24
description: >
  Generic final pass that strips AI writing tells and generic phrasing from
  any text this session drafts for a student, family member, or colleague to
  read — on top of whatever domain rules the drafting skill already applied,
  never in place of them. Applies a voice profile silently if one is active
  and never touches grades, achievement levels, curriculum codes, dates, or
  facts. Trigger whenever this session's skills hand over text someone will
  read, or on direct requests like "make this sound less like AI," "this
  reads like a template," or "check this for AI writing" on any pasted draft.
keywords:
  content-type: Pedagogical Guidance
  thematic-category: Education Objectives And Materials
  use-case-theme: Student Learning And Performance
  use-case:
    - Teacher Voice & Style Capture
    - Resource Generation
  topics: Teacher Professional Practice
  keyword:
    - Voice Profile
    - Tone Matching
    - AI Writing Detection
references:
  - "AITSL"
  - "John Hattie and Helen Timperley, Review of Educational Research (American Educational Research Association)"
---

# Voice Check

A generic last read, not a rewrite of the drafting skill's own rules. If the
text came from `communication/report-comment`, `communication/parent-comms`,
`assessment/feedback-comment-bank`, or similar, their domain rules (comment
variation, tone, achievement-standard grounding) already ran — this skill
only catches what's left: phrasing that reads as AI-written or generic,
regardless of what kind of document it's in.

Fix how it sounds. Never touch what it says.

---

## Process

1. **Get the draft.** Already in context if another skill just produced it;
   otherwise ask the teacher to paste it.
2. **Apply a voice profile if one is active** (see
   `communication/voice-style-capture`) — silently, no announcement.
3. **Scan** for the patterns below.
4. **Rewrite**, preserving every fact, name, grade, date, and curriculum
   reference exactly. If a fix would require inventing a detail, don't —
   flag the gap instead.
5. **Self-audit:** "Would the reader suspect this was AI-written?" Fix
   whatever still reads that way, then deliver.

---

## What never changes

Grades, scores, achievement levels, specific observations, dates, names,
curriculum codes or standard wording, and the forward-looking action the
teacher specified. Prose only.

---

## Patterns to detect and fix

**Puffery and buzzword filler.** "Engaging learning experience," "unlock
their potential," "empower students," "foster a love of learning," "21st-
century skills." Say the actual task, resource, or moment instead.

**AI vocabulary.** Delve, tapestry, holistic, robust, multifaceted, dynamic,
pivotal, underscore, showcase, leverage. Replace with the plain word.

**Fancy ways to say "is."** "Serves as," "stands as," "boasts," "features."
Just say "is" or "has."

**Institutional throat-clearing.** "We would like to take this opportunity
to inform you that…", "Please be advised that…". Open with the point.

**Chatbot residue.** "I hope this helps!", "Let me know if you have any
questions!", "Certainly!" — fine in chat, never in the delivered document.

**Filler and hedging.** "In order to" → "To." "It is important to note
that" → delete. "Could potentially possibly" → "may."

**Rule of three and false ranges.** Forcing lists into exactly three items,
or "from X to Y" where X and Y aren't a real scale. Use the natural number.

**Punctuation tells.** Em dash overuse — use a period or comma. Mid-sentence
colons doing a full stop's job. Bold-label bullets that just restate the
line. Title case headings. Decorative emojis. Curly quotes.

**Passive voice hiding the actor.** "Adjustments have been made" →
"I've adjusted…". Fine only when the actor genuinely doesn't matter.

**Vague claims with nothing under them.** A trait or outcome stated with no
specific behind it. Name the specific, or flag that none was given —
sharper adjectives aren't a fix.

---

## Evidence base
- AITSL, Australian Professional Standards for Teachers 5.5 — requires
  reporting "clearly, accurately and respectfully," the standard this
  skill's rewrite pass is checked against
  <https://www.aitsl.edu.au/standards>
- Hattie, J. & Timperley, H. (2007), *The Power of Feedback* — feedback and
  descriptive text are only effective when specific enough to convey real
  information; vague, generic phrasing doesn't meet that bar
  <https://journals.sagepub.com/doi/abs/10.3102/003465430298487>

## Output format

Deliver the corrected text in a standalone Markdown code block so the
teacher can copy it directly. Keep any note about a flagged gap as brief
chat text outside the block.

## Reference files
- A `[teacher-name]-voice-profile.md` reference file, if supplied — applied
  silently to the rewrite (see `communication/voice-style-capture`)
