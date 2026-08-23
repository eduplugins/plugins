---
name: parent-curriculum-explainer
version: 1.1.0
released: 2026-08-16
description: >
  Translates curriculum content descriptions and achievement standards into
  plain English for families — what students are learning, why it matters,
  what it looks like in class, and how families can help at home. Always
  grounds the explainer in real curriculum content, never paraphrased from
  memory. Trigger when a teacher asks for a parent curriculum explainer,
  curriculum night handout, newsletter blurb, or unit overview letter for
  families.
keywords:
  content-type: Learning Objectives
  thematic-category: Education Objectives And Materials
  use-case-theme: Student Learning And Performance
  use-case:
    - Family & Community Engagement
    - Resource Generation
  topics: Family And Community Engagement
  keyword:
    - Curriculum Night Handout
    - Achievement Standard Translation
    - Unit Overview Letter
    - Plain-English Explainer
references:
  - "ACARA"
  - "AITSL"
  - "Alma Harris & Janet Goodall"
  - "Education Endowment Foundation"
---

# Parent Curriculum Explainer

You are translating curriculum content into something a family can understand
and engage with. No jargon, no codes, no acronyms. The goal is to make parents
feel informed and able to support their child — not overwhelmed by education
system terminology.

---

## Gotchas
- Home-support suggestions land better when tied to the child's *current,
  specific* learning task, not generic advice like "read together" —
  engagement research finds learning-focused suggestions outperform general
  school-involvement advice.
- For CALD or lower-literacy families, include at least one suggestion that
  doesn't depend on English fluency or text — a conversation prompt in the
  home language, or a hands-on or observational activity — alongside any
  language-based ones.

---
## Startup & Context Check
Before asking the teacher any questions, silently perform this context check:
1. **Check Memory / Profile:** Look for saved session memory or loaded profile skills (`*-edu-profile`) containing school name, curriculum, year levels, or pedagogy framework.
2. **Check for Orchestrator:** If the `edu-plugin-orchestrator` is active and profile context is missing, invoke its Step 0 Personalisation Interview so details are saved globally.
3. **Standalone Fallback:** If operating standalone (no memory, no orchestrator), prompt the teacher directly for their curriculum, year level, and topic.

---



## What this skill needs

- Curriculum, year level, subject, teaching context, and (if already
  established) a unit topic. If already known from earlier in this
  conversation, don't ask again.
- Working mode — ask if not already established:
  > "Would you prefer we build this together step by step, or would you like
  > me to ask a few questions and produce a full draft?"

---

## Step 1: Understand the task

If subject, year level, and topic are not already known, ask:
> "What subject, year level, and topic or unit are you writing a parent
> explainer for?"

Then ask:
> "What format is this for — newsletter, curriculum night handout, or letter
> home? And anything I should know about your families — for example, many
> Culturally and Linguistically Diverse families, or a wide range of literacy
> levels at home?"

Store the format choice and family context. Apply both throughout generation.

---

## Step 2: Establish curriculum content

Establish the content descriptions and achievement standards for the subject
and year level. The explainer is grounded in the real curriculum —
translated, not quoted. Never use training data for curriculum standards —
use whatever curriculum lookup capability is available in this session, or
ask the teacher to paste the relevant content if none is.

Read the content carefully and identify:
- The 3–5 most important things students are learning this unit
- What the achievement standard says in plain terms
- Any content with a clear real-world connection families can relate to

Do not quote content descriptions verbatim — they are not written for a
family audience. Translate them. If unsure how much detail or tone is
appropriate, ACARA's own parent-information guidance is a useful benchmark
for how the curriculum authority itself expects this content to be pitched
for families.

---

## Step 3: Generate the explainer

Match format and tone to purpose. If Culturally and Linguistically Diverse
families or lower home literacy levels are noted: use shorter sentences,
simpler vocabulary, and concrete examples. Avoid idioms. Home-support
suggestions should tie to what students are doing in this unit right now,
not generic study advice — specific, task-linked suggestions are more
likely to be acted on.

---

**[Format: Newsletter]**
150–250 words. Warm and brief. Continuous prose.

**What are we learning in [Subject] this term?**

In [Subject] this term, [Year X] students are exploring [topic]. Through this
unit, they're learning to [plain-English description of 2–3 key skills or
concepts].

This matters because [why this learning is important at this stage — connect
to real life or future learning, not just "it's in the curriculum"].

In the classroom, you might see your child [what the learning looks like in
practice — e.g. "reading a range of texts and identifying how the author is
trying to influence the reader" rather than "analysing persuasive techniques"].

**How can you help at home?**
[1–2 specific, doable suggestions — e.g. "Ask your child to explain what
they're reading about this week and what they think about it" or "Talk about
[topic] when it comes up in the news or everyday life."]

Any questions? [Contact line — placeholder]

---

**[Format: Curriculum night handout]**
300–400 words. Slightly more detail. Dot points welcome.

**[Subject] — What your child is learning in [Year level] this [Term/Year]**

**Overview**
[2–3 sentences: the unit, the big idea, why it matters now]

**What students are working on**
By the end of this term, your child will be learning to:
- [Plain English version of learning goal 1]
- [Plain English version of learning goal 2]
- [Plain English version of learning goal 3]

These goals come from the [curriculum name] for [Year level], which focuses
on [plain summary of the year level emphasis — not a quote from the standard].

**What this looks like at school**
[2–3 sentences describing real classroom activities in accessible language]

**How you can support at home**
You don't need to be an expert in [subject] to help. Here are some easy ways
to connect the learning to everyday life:
- [Specific suggestion 1 — conversational, real, doable]
- [Specific suggestion 2]
- [Specific suggestion 3]

**A question to ask your child:**
"[One good dinner-table conversation starter tied to the unit]"

**Want to know more?**
[Placeholder for teacher contact or curriculum night details]

---

**[Format: Letter home / unit overview]**
400–500 words. Full paragraphs. Professional but accessible.

[Expand the curriculum night structure into flowing prose. Include a brief
opening that addresses families directly, a fuller explanation of the unit
and its real-world relevance, and a warm close with contact details.]

---

## Step 4: Tone check

This isn't just style: teachers are required to report to families clearly,
accurately and respectfully, which means translating curriculum language
into a form families can actually use — treat the acronym-and-jargon ban
below as non-negotiable, not optional polish.

Before delivering, verify:
- No acronyms — not AC, HASS, ELA, KLA, CALD, VCAA, or any others
- No content description codes
- No phrases like "formative assessment," "achievement standards,"
  "elaborations," or "content descriptions"
- Plain, warm language — like a knowledgeable colleague talking to a parent,
  not an official document
- If Culturally and Linguistically Diverse families were noted: re-read for
  idioms, complex sentence structures, or assumed cultural knowledge and
  simplify where needed

---

## Step 5: Check-in and handoff

> "Here's the parent explainer. Would you like me to adjust the length,
> simplify the language further, or add a specific conversation starter
> for families to use at home?"

After any adjustments, offer the natural next step:

> "If you'd like to follow this up with a direct message or letter home —
> for example, to introduce yourself or a new topic — I can help draft
> that too."

---

## Output format

Once finalised, deliver the complete document in a dedicated standalone container (e.g., an Artifact, Canvas, or single Markdown code block) rather than inline chat text. This is a document the teacher will save, adapt, or paste into school systems.

- If the teacher requests a specific file format (e.g. .docx, .pdf), generate that file if your environment supports it; otherwise, deliver clean Markdown ready to copy.
- Only answer inline without a document container if the teacher is asking a quick conversational question or iterating on a small excerpt (provide a targeted diff, not a full re-generation).
- Keep chat text outside the container brief (1–2 sentences confirming completion). Do not duplicate the document contents in the chat message.

---


## Evidence base
- ACARA, *Parent/carer information* (V9 Australian Curriculum) — backs translating achievement standards for families as the curriculum authority's own stated purpose
  <https://www.australiancurriculum.edu.au/help/parent-information>
- AITSL, Australian Professional Standards for Teachers 5.5 — backs the jargon/acronym ban as a clarity obligation, not just style
  <https://www.aitsl.edu.au/standards>
- Harris & Goodall (2007), *Do parents know they matter? Engaging all parents in learning* — backs steering home-support suggestions toward the child's specific current learning, not generic school involvement
  <https://dera.ioe.ac.uk/6639/1/DCSF-RW004.pdf>
- Education Endowment Foundation (2018), *Working with Parents to Support Children's Learning* — backs specific, low-burden home-support suggestions over generic encouragement
  <https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/supporting-parents>