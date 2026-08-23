# Output Handling Guidelines for EduPlugins Skills

## 1. Executive Summary & Core Principles

When AI skills generate outputs for teachers, the user experience (UX) hinges on how easily the teacher can take that deliverable and use it immediately in their daily workflow (e.g., paste into Google Docs, Microsoft Word, email, Learning Management Systems, or school reporting software like Sentral, Compass, or SIMS).

### The Core UX Principle
> **A completed deliverable is a document or copyable asset, not a chat answer.**
> Genuine in-chat discussion (clarifying questions, diagnostic feedback, pedagogical advice) remains inline as conversational text. Completed deliverables (lesson plans, rubrics, comment banks, task sheets) must be formatted as clean, retrievable, isolated documents or copyable blocks.

### The Problem with Inline Chat Dumps
1. **Conversational clutter:** Formatted tables and content get sandwiched between AI conversational filler (*"Sure! Here is your plan..."* and *"Hope this helps! Let me know if..."*).
2. **Copy/paste friction:** Selecting large tables and formatted headings from a chat stream on mobile or busy classroom laptops often breaks formatting.
3. **Iteration sprawl:** If a teacher asks to adjust one activity or objective, the model often regenerates the entire 1,500-word document back into the chat stream.

---

## 2. Architectural Decision: Self-Contained Skills vs. Orchestrator

### Why Output Formatting Is Baked Directly into Each Skill
To support **single-skill standalone downloads** (where a teacher downloads just `lesson-planner.md` or `report-comment.md` to use in their personal ChatGPT, Claude Project, or local LLM), every skill must be self-contained and functionally complete without requiring an external orchestrator.

This decentralized design offers distinct advantages:

1. **Zero-Dependency Standalone Downloads:** A teacher can use any individual skill on any AI host without needing the full plugin repository or an orchestrator system prompt.
2. **Eliminates Orchestrator Rule Bloat:** Centralizing output rules in the orchestrator (`skills/core/edu-plugin-orchestrator/SKILL.md`) would require the orchestrator prompt to house detailed instructions for all 4 output archetypes, increasing prompt size and risking **instruction dilution** (where the orchestrator confuses which formatting rule applies to which skill).
3. **Negligible Token Overhead:** Adding an `## Output format` section to a skill adds only **~40–60 tokens** (around 35–50 words). In modern LLM context windows (128k–200k+ tokens), this overhead is mathematically negligible while guaranteeing 100% consistent UX.
4. **Seamless Orchestrator Compatibility:** When running inside the full EduPlugins ecosystem, the master orchestrator (`edu-plugin-orchestrator`) focuses on routing, curriculum alignment, and context handoff, while the downstream skills naturally handle their own output presentation.

---

## 3. The Ecosystem-Aware Handshake (Memory & Orchestrator Check)

To ensure smooth operation whether a skill is run standalone or as part of the full EduPlugins ecosystem, every skill follows the **Ecosystem-Aware Startup Handshake**:

```markdown
## Startup & Context Check
Before asking the teacher any questions, silently perform this context check:
1. **Check Memory / Profile:** Look for saved session memory or loaded profile skills (`*-edu-profile`) containing school name, curriculum, year levels, or pedagogy framework.
2. **Check for Orchestrator:** If the `edu-plugin-orchestrator` is active and profile context is missing, invoke its Step 0 Personalisation Interview so details are saved globally.
3. **Standalone Fallback:** If operating standalone (no memory, no orchestrator), prompt the teacher directly for their curriculum, year level, and topic.
```

This ensures:
- **In Plugin Mode:** The teacher configures their profile once; all skills automatically inherit it.
- **In Standalone Mode:** The skill gracefully falls back to direct questioning without hallucinating or breaking.

---

## 4. Platform-Agnostic UI Triggers

Every skill is designed to run in environments supporting UI panels (Claude Artifacts, ChatGPT Canvas) AND environments that only support raw chat text (Open-source LLMs, local LM Studio). 

Instead of writing platform-specific instructions (e.g. *"Use Anthropic's `<antArtifact>` tags"*), the guidelines use **platform-agnostic behavioral triggers**. 

For example, instructing the model to *"deliver the document in a dedicated standalone container"* naturally triggers an Artifact in Claude or a Canvas in ChatGPT, while safely defaulting to a single markdown code block in plain-text interfaces.

---

## 5. The Four Output Archetypes

All EduPlugins skills map to one of four output UX archetypes. Use the specific instructions below when creating or updating skills.

### Archetype 1: The Standalone Document
Used for major monolithic deliverables (Lesson Plans, Unit Outlines, Parent Explainer Letters, Rubrics). 

**The Goal:** The teacher gets a single, clean document they can download, print, or paste.
**The Fix:** Force the document into a container/artifact and ban conversational repetition.

```markdown
## Output format

Once finalised, deliver the complete document in a dedicated standalone container (e.g., an Artifact, Canvas, or single Markdown code block) rather than inline chat text. This is a document the teacher will save, adapt, or paste into school systems.

- If the teacher requests a specific file format (e.g. .docx, .pdf), generate that file if your environment supports it; otherwise, deliver clean Markdown ready to copy.
- Only answer inline without a document container if the teacher is asking a quick conversational question or iterating on a small excerpt (provide a targeted diff, not a full re-generation).
- Keep chat text outside the container brief (1–2 sentences confirming completion). Do not duplicate the document contents in the chat message.
```

---

### Archetype 2: Batch / Discrete Items
Used for multiple distinct items a teacher must copy one by one (Report Comments, Feedback Phrase Banks, Exit Tickets, Differentiation Menus).

**The Goal:** The teacher can hit "Copy" on an individual student's comment without copying the entire class set.
**The Fix:** Force each item into its own discrete code block.

```markdown
## Output format

Deliver each discrete item (e.g., student comment, feedback phrase, adjustment card) in its own standalone Markdown code block so the teacher can copy them individually with one click.

- Do not wrap the entire set of items in a single giant code block.
- Do not output a monolithic document unless specifically requested.
- Keep conversational text outside the code blocks brief (1–2 sentences confirming completion).
```

---

### Archetype 3: Consultative / Review
Used for diagnostic or feedback skills (Differentiation Reviewer, Voice Profile setup). 

**The Goal:** The primary value is the conversational feedback, but any rewritten assets must be easily copyable.
**The Fix:** Keep the diagnostic text inline, but isolate any rewritten tasks in code blocks.

```markdown
## Output format

Deliver consultative feedback, pedagogical advice, and diagnostic reviews as inline conversational chat text — this is a discussion, not a final document.

- When suggesting a specific rewritten task, an alternative activity, or a modified text excerpt, place ONLY that rewritten asset inside a standalone Markdown code block.
- This ensures the teacher can easily copy the new asset while reading the diagnostic notes, rationales, and next steps in standard conversational chat text.
```

---

### Archetype 4: Structured Data / Configuration
Used for developer tools or schema-driven outputs (e.g., metadata tagger).

```markdown
## Output format

Deliver the output as a single, clean fenced code block (e.g. ```json or ```yaml) containing only the valid structured data.

- Do not include conversational preambles or markdown outside the code block unless explaining validation errors or ambiguity.
```


---

## 6. Current Mapping for All 20 Skills

| Skill Path | Archetype | Rationale |
| :--- | :---: | :--- |
| **`planning/lesson-planner`** | **1** | Full lesson plan needs to be exported/printed or pasted into curriculum software. |
| **`planning/unit-of-work`** | **1** | Multi-week unit plan is a significant deliverable. |
| **`planning/unit-outline`** | **1** | High-level sequence table and overview. |
| **`planning/casual-relief-plan`** | **1** | Complete day pack with duty-of-care info; relief teacher needs a clean copy/printout. |
| **`planning/student-task-sheet`** | **1** | Student-facing assignment sheet ready to print or distribute on LMS. |
| **`planning/slide-deck`** | **1** | Slide-by-slide plan or markdown slide format (e.g. Marp/Slidev). |
| **`inquiry/pbl-unit`** | **1** | Comprehensive Project-Based Learning unit package. |
| **`inquiry/ibl-unit`** | **1** | Inquiry-Based Learning unit plan with multi-phase inquiry arc. |
| **`assessment/rubric-builder`** | **1** | Criteria grid / rubric table. Essential to isolate so markdown table formatting is preserved on copy. |
| **`assessment/outline`** | **1** | Formal assessment task notification and instructions. |
| **`assessment/schedule`** | **1** | Term/year assessment timeline table. |
| **`communication/parent-curriculum-explainer`** | **1** | Formal letter, newsletter article, or handout for parents explaining curriculum. |
| **`communication/report-comment`** | **2** | Teachers paste comments one by one into school reporting software (e.g. Sentral, Compass, SIMS). Individual code blocks per student are superior to one giant document. |
| **`assessment/feedback-comment-bank`** | **2** | Categorized bank of comments by grade band / criteria; teachers copy individual comments during marking. |
| **`assessment/exit-ticket`** | **2** | Usually generates 2–4 format choices (written, multiple choice, partner talk). Presenting each variant in a quick-copy block is ideal. |
| **`communication/parent-comms`** | **1 or 2** | If generating a single email/letter, use Archetype 1. If generating a tiered set of comms (e.g. 3 templates for different situations), use separate copyable blocks. |
| **`differentiation/suggester`** | **2** | Menu of adjustments (Input/Task/Output). Presenting suggested adjustments in distinct copyable cards/blocks. |
| **`differentiation/reviewer`** | **3** | Evaluates existing lesson/unit. Feedback belongs in chat; revised exemplar tasks belong in copy blocks. |
| **`communication/voice-style-capture`** | **3 / 1** | Interactive interview process (Archetype 3); final deliverable is a `voice-profile.md` standalone document (Archetype 1). |
| **`developer/tag`** | **4** | JSON / YAML list of tags. |
