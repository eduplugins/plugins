---
name: slide-deck
version: 1.1.0
released: 2026-08-16
description: >
  Builds a structured lesson presentation from a lesson plan or unit content
  — a slide-by-slide outline with speaker notes covering what to show and
  what to say. Trigger when a teacher asks to create a slide deck, lesson
  presentation, or lesson slides. Works standalone; if a lesson plan is
  already in context it's used as the source, otherwise curriculum content
  is gathered to ground learning intentions and success criteria. Does not
  produce a file — outputs slide structure and content for the teacher to
  build in PowerPoint, Google Slides, Canva, or Keynote.
keywords:
  content-type: Teaching Resource
  thematic-category: Education Objectives And Materials
  use-case-theme: Student Learning And Performance
  use-case:
    - Resource Generation
    - Curriculum & Lesson Planning
    - Personalised Learning
  topics: Cognitive Load
  keyword:
    - Speaker Notes
    - Slide Style
    - Coherence Principle
    - Chunking
    - Working Memory
references:
  - "Australian Education Research Organisation (AERO)"
  - "Centre for Education Statistics and Evaluation (CESE), NSW Department of Education"
  - "Richard E. Mayer and Logan Fiorella, in The Cambridge Handbook of Multimedia Learning (Cambridge University Press)"
---

# Slide Deck Creator

You are building the content and structure for a lesson presentation.
The output is a slide-by-slide plan — every slide has a title, content,
and speaker notes — which the teacher builds in their preferred presentation
tool.

Good lesson slides are not documents put on a screen. They are prompts,
visuals, and anchors that support the teacher's voice — not replace it,
because extraneous on-screen text competes with the teacher's spoken
explanation for the same limited working memory (cognitive load theory;
Mayer's coherence principle). The default is minimal: headings, key terms,
steps, and sentence starters. Large text blocks only appear when students
genuinely need to read from the slide.

---

## Gotchas

- **It isn't text itself that hurts learning — it's extraneous material
  mixed with essential content.** Even a Text-heavy deck should isolate a
  passage or excerpt on its own slide rather than blending it with other
  instructional content on the same slide.
- **Chunking is why "one idea per slide" is ruthless, not stylistic.**
  Working memory holds only a handful of chunks at a time — one slide
  carrying two ideas is asking students to hold both in the same limited
  channel as the teacher's voice.

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
- Either a lesson plan already in context, or the subject/topic to fetch
  curriculum content for.
- Working mode (build together step by step, or produce a full draft) —
  ask if not already established:
  > "Would you prefer we build this together step by step, or would you like
  > me to ask a few questions and produce a full draft?"

---

## Step 1: Get the source

If a lesson plan was produced this session: use it as the source document.
Learning intentions, success criteria, teaching sequence, and resources are
already known. Skip to Step 3.

If standalone:
> "What is this presentation for — a full lesson, part of a lesson, or
> something else? And what subject, year level, and topic?"

---

## Step 2: Ground in curriculum content (standalone only)

If no lesson plan is in context, establish the relevant curriculum content
before generating, to ground the learning intentions and success criteria.
Never invent standards from training data — use whatever curriculum lookup
capability is available in this session, or ask the teacher to paste the
relevant content descriptions and achievement standards if none is.

Surface the relevant content descriptions and achievement standards as the
basis for the learning intentions. Confirm with the teacher before proceeding:

> "Based on [subject] [year level], here are the relevant curriculum standards
> I'd anchor this lesson to — [list]. Does this match what you're teaching,
> or would you like to adjust the focus?"

---

## Step 3: Check for a template

If the teacher has already supplied a template structure, section order, or
fixed elements (school logo placeholder, colour scheme notes, font
conventions) — in this conversation or as a reference file — apply it
silently. Otherwise use the best-practice structure below.

---

## Step 4: Planning questions

Ask these as a single conversational exchange — not a form:

> "A few quick questions before I build this out:
>
> How many slides are you aiming for? A rough guide is one slide per
> 3–5 minutes of lesson time.
>
> Is this teacher-led, or will students navigate it independently — for
> example, a rotational or self-paced task?
>
> What slide style works best for you?
> - **Minimal** — headings, key terms, short prompts. Your voice carries
>   the content.
> - **Guided** — dot points, numbered steps, sentence starters. Slides
>   support student work.
> - **Text-heavy** — longer passages, excerpts, or quotes where students
>   need to read from the slide. Even here, isolate the passage on its own
>   slide rather than mixing it with other instructional content.
>
> Are there particular resources, images, or video links to include?
>
> Should speaker notes be detailed — for example, for a relief teacher
> or a new lesson — or minimal prompts for your own use?"

Store the slide style choice and apply it consistently throughout generation.
A student-navigable deck almost always calls for Guided or Text-heavy.
A teacher-led deck almost always works best as Minimal.

Also ask:
> "Are there students who'll need differentiation support — for example,
> a vocabulary slide, sentence starters embedded in the activity slide,
> or a tiered version of the task instructions?"

---

## Step 5: Generate the slide deck

Apply the chosen slide style throughout. The style governs every content
slide — not just the activity slides.

**Minimal style:** headings and 2–4 key terms or short prompts per slide.
No sentences. Teacher voice fills the gaps.

**Guided style:** numbered steps, dot points, sentence starters. Enough
detail that a student can follow without the teacher explaining each slide.

**Text-heavy style:** full sentences, passages, or excerpts where needed, each
isolated on its own slide. Reserve for slides students genuinely need to
read from — not as a default, and never mixed with other content on the
same slide.

---

**SLIDE DECK OUTLINE**

**Lesson:** [Topic]
**Subject / Year Level:**
**Slide style:** [Minimal / Guided / Text-heavy]
**Number of slides:** [X]

---

**Slide 1 — Title**

*Content:*
- Lesson title
- Subject / Year Level
- Date (placeholder)
- [Optional: a compelling image or question to set the tone]

*Speaker notes:*
"Welcome students, settle the room. [Brief note on how to open the lesson —
e.g. 'Ask students to look at the image and think: what do you notice?']"

---

**Slide 2 — Learning Intentions and Success Criteria**

*Content:*
We are learning to: [Learning intention/s in student language]

By the end of the lesson, I can:
- [Success criterion 1]
- [Success criterion 2]
- [Success criterion 3]

*Speaker notes:*
"Read through with students. [e.g. 'Ask: what do you think we'll be doing
today based on this? Take 1–2 responses.'] Don't spend long here — return
to it at the close."

---

**Slide 3 — Prior Knowledge Activation / Hook**

*Content:*
[A question, image, short video prompt, or recall task — one clear prompt,
not a paragraph]

e.g. "What do you already know about [topic]?"
or a single image with: "What do you notice? What do you wonder?"

*Speaker notes:*
"[How to run this — e.g. 'Think-pair-share: 1 minute quiet thinking,
1 minute with a partner, 2–3 pairs share with the class.']"

---

**Slide 4 — [Key concept or teaching point 1]**

*Content:*
[Clear heading]

*Minimal:* 2–4 key terms or a single question. Nothing else.
*Guided:* 3–5 dot points or a worked example broken into steps.
*Text-heavy:* A short passage, quote, or excerpt students read from the slide.

*Speaker notes:*
"[What to say when this slide is up — the explanation, examples, or
discussion the slide prompts but doesn't replace.]"

---

*(Continue with one slide per key teaching point, worked example,
activity instruction, or discussion prompt. Apply the chosen style
consistently — don't drift toward text-heavy on a minimal deck.)*

---

**Slide [N-2] — Student Activity**

*Content:*
**Your task:**

*Minimal:* Task title + time only. Teacher explains verbally.
*Guided:* Numbered steps students can follow from the slide.
*Text-heavy:* Full instructions plus any reading material needed.

Time: [X] minutes

*[If differentiation is needed: include a separate dot point or
callout — e.g. "Need a start? Try: [sentence starter or scaffold]"]*

*Speaker notes:*
"Set the timer visibly. Circulate — focus on [what to look for / who
to check in with]. At [X] minutes, bring the class back together."

---

**Slide [N-1] — Consolidation / Discussion**

*Content:*
[A single question that draws the lesson together]

e.g. "What does this tell us about [big idea]?"
or "What surprised you? What confirmed what you thought?"

*Speaker notes:*
"[How to run the discussion — e.g. 'Cold call 3–4 students. Then return
to the learning intention and success criteria on Slide 2.']"

---

**Slide [N] — Exit Ticket / Close**

*Content:*
**Before you go:**
[Exit ticket question/s — or direction to task if separate]

We were learning to: [Restate learning intention]

*Speaker notes:*
"Give students [X] minutes to respond. [Note on how to use the responses
next lesson.]"

---

## Step 6: Check-in and handoff

> "Here's the slide deck outline — [X] slides for a [duration] lesson on
> [topic]. Would you like me to adjust the slide count, shift the style,
> or add more detail to the speaker notes?"

After any adjustments, offer the natural next step if not already done
this session:

> "If you'd like a student task sheet to go alongside this lesson, I can
> build one from the same plan."

---

## Output format

Once finalised, deliver the complete document in a dedicated standalone container (e.g., an Artifact, Canvas, or single Markdown code block) rather than inline chat text. This is a document the teacher will save, adapt, or paste into school systems.

- If the teacher requests a specific file format (e.g. .docx, .pdf), generate that file if your environment supports it; otherwise, deliver clean Markdown ready to copy.
- Only answer inline without a document container if the teacher is asking a quick conversational question or iterating on a small excerpt (provide a targeted diff, not a full re-generation).
- Keep chat text outside the container brief (1–2 sentences confirming completion). Do not duplicate the document contents in the chat message.

---

## Principles

- One idea per slide — ruthlessly. Chunking supports working memory: one
  idea per slide, not one slide per fact.
- Default to minimal — add text only when students need to read it
- Speaker notes are what the teacher says, not what the slide says
- Explicit teaching slides have a worked example or model, not just information
- Every slide has a purpose — no filler slides

---

## Evidence base
- AERO (2023–25), *Managing cognitive load optimises learning* — backs
  chunking content and reserving worked examples/models for structured
  teaching rather than dense on-screen text.
  <https://www.edresearch.edu.au/summaries-explainers/explainers/managing-cognitive-load-optimises-learning>
- CESE, NSW DoE (2017), *Cognitive load theory* — the ~4-chunk working
  memory limit behind "one idea per slide" and the Minimal-style default.
  <https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/literature-reviews/cognitive-load-theory>
- Mayer & Fiorella (2014), coherence principle, *Cambridge Handbook of
  Multimedia Learning* — excluding extraneous material from a slide aids
  learning (23/23 experimental tests); the basis for keeping text-heavy
  slides isolated rather than mixed with other content.
  <https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/CD5B7AE1279A9AB81F8EEBB53DBEC86E>