---
name: setup
version: 2.0.0
released: 2026-08-25
description: >
  Runs a short interview to capture a teacher's school, curriculum, year
  levels, teaching context, and pedagogy preference, then saves it as a
  reusable [name]-edu-profile.md reference file any later skill or session
  can be given instead of re-asking. Trigger when a teacher wants to set up,
  save, or update their teaching profile, or asks why they keep re-entering
  the same details every session.
keywords:
  content-type: Administrative Guidance
  thematic-category: School Management
  use-case-theme: School Management
  use-case:
    - Personalised Learning
    - Teacher Training & Personal Development
  topics: Teacher Professional Practice
  keyword:
    - Teaching Profile
    - Session Memory
    - Curriculum Preference
    - Pedagogy Framework
references:
  - "Australian Institute for Teaching and School Leadership (AITSL)"
---

# Teaching Profile Setup

You are capturing a teacher's recurring context — school, curriculum, year
levels, teaching context, pedagogy preference — once, so it doesn't need
re-asking every session. This skill produces one artefact: a
`[name]-edu-profile.md` reference file.

It does not plan lessons, fetch curriculum content, sequence other skills, or
hand off to one. Every skill in this catalog already asks directly for
whatever context it needs and works standalone whether or not a profile
exists — this skill only saves the teacher from repeating themselves across
sessions.

---

## Gotchas

- **Don't hardcode a connector URL into the saved profile.** An earlier
  version of this skill shipped a fixed MCP URL per curriculum, and it drifted
  out of sync with the real connector addresses in `connectors.json` — silently
  pointing curriculum lookups at the wrong place. Reference a connector by its
  slug (stable) and let the host environment resolve the address (which
  changes); never copy the address itself into a document.
- **This skill doesn't run itself.** Nothing else in this catalog checks
  whether it has run, waits for it, or hands control to it — it fires only
  when a teacher asks for it by name or by clear intent ("save my profile",
  "why do I keep re-entering this"). If a profile file is already pasted or
  attached in the conversation, other skills read it directly; they don't
  invoke this skill to do it for them.

---

## What this skill needs

Nothing beyond what the teacher tells you directly. If a profile is already
active this session — supplied as a reference file or stated earlier in the
conversation — skip the interview and go straight to Step 3, offering to
update rather than rebuild it.

---

## Step 1: Run the interview

Ask conversationally, at most two at a time — not as a rigid form:

1. **School name** — "What's the name of your school?"
2. **Curriculum** — "Which curriculum do you teach? (e.g. Australian
   Curriculum v9, UK National Curriculum, Common Core, IB, or another)"
3. **Year levels** — "Which year levels or grades do you teach?"
4. **Teaching context** — "How would you describe your teaching context in a
   sentence or two? (e.g. generalist primary, secondary STEM, middle school
   humanities, special education / inclusive ed)"
5. **Pedagogy preference** — "Do you have a preferred teaching framework
   you'd like skills to apply? (e.g. UDL, Understanding by Design, Visible
   Learning, Explicit Teaching / Rosenshine, HITS, Inquiry-Based — or no
   preference)"

Done when all five are answered or explicitly skipped as not applicable.

---

## Step 2: Confirm

> "Here's your profile — let me know if anything needs adjusting:
> - **School:** [school name]
> - **Curriculum:** [curriculum]
> - **Year levels:** [year levels]
> - **Teaching context:** [context]
> - **Pedagogy:** [framework, or 'no specific framework']"

Only proceed to Step 3 once the teacher confirms.

---

## Step 3: Save as a reusable profile

> "Would you like me to save this as a profile file? Paste it in or attach it
> at the start of any future session — with this tool or any other — and
> skills will use it instead of asking again."

If yes, produce a plain reference file named `[teacher-name]-edu-profile.md`:

```markdown
---
name: [firstname-or-schoolname]-edu-profile
description: >
  Teaching profile for [teacher name / school name] — school, curriculum,
  year levels, teaching context, and pedagogy preference. Supply this at the
  start of a session so skills use it directly instead of asking.
---

# Teaching Profile — [Name]

**School:** [school name]
**Curriculum:** [full curriculum name]
**Year levels:** [year levels]
**Teaching context:** [teaching context]
**Pedagogy framework:** [framework name, or "none"]

## Curriculum terms

Content: [term] · Standards: [term] · Goals: [term]
Grade bands: [labels] · Year format: [e.g. "Year N" / "Grade N"]
```

Fill the "Curriculum terms" fields from the reference table below when the
stated curriculum is one this catalog ships a connector for. For any other
curriculum, ask the teacher what they call each field rather than guessing —
never invent curriculum terminology.

**Curriculum reference:**

| Curriculum | Connector slug | Content term | Standards term | Goals term | Grade bands | Year format |
|---|---|---|---|---|---|---|
| Australian Curriculum v9 | `australian-curriculum-v9` | Content descriptions | Achievement standards | Learning intentions | A–E | Year [N] |
| UK National Curriculum | `uk-national-curriculum` | Programme of study | Attainment targets | Learning objectives | Emerging / Expected / Exceeding | Year [N] |
| Common Core | `common-core-state-standards` | Standards | Performance standards | Learning goals | Below / Approaching / Meeting / Exceeding | Grade [N] |

If this session already has one of these connectors available, note in the
profile that curriculum lookups are connected — don't paste its URL into the
file (see Gotchas).

---

## Step 4: Done

> "Profile saved. Supply it at the start of future sessions and skills will
> pick up your context automatically — no need to run this again unless
> something changes."

There's no forward handoff to a specific next skill — the profile file is
this skill's whole output, and any skill in the catalog can be given it
directly.

---

## Evidence base
- AITSL, Australian Professional Standards for Teachers, Standard 1 (current)
  — knowing the teaching context (students, year level, curriculum) is a
  stated professional foundation every other standard builds on, which is
  why this skill exists purely to keep that context accurate and stable
  across sessions rather than re-elicited, and risking drift, each time.
  <https://www.aitsl.edu.au/standards>
