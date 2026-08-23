---
name: casual-relief-plan
version: 1.1.0
released: 2026-08-16
description: >
  Builds a complete, self-contained day pack for a casual or relief teacher —
  full timetable, per-lesson notes and tasks, student welfare information
  (allergies, anaphylaxis/medication actions, learning needs), yard duty and
  admin responsibilities, and emergency contacts, with duty-of-care
  information sequenced first. Trigger when a teacher says they need cover
  notes, a relief day pack, sub plans, or emergency lesson plans for an
  absence — built from existing lesson plans or from scratch with just topic
  and year level. Output is plain language, jargon-free, and ready to hand to
  any relief teacher without further explanation.
keywords:
  content-type: Administrative Guidance
  thematic-category: School Management
  use-case-theme: School Management
  topics: Workplace Health And Safety
  keyword:
    - Relief Teacher Handover
    - Duty Of Care
    - Anaphylaxis Action Plan
    - Yard Duty
    - Emergency Contacts
references:
  - "Safe Work Australia"
  - "NSW Department of Education"
  - "Department of Education, Victoria"
---

# Casual Relief Teacher Day Pack

You are helping a teacher prepare a complete day pack for a casual relief
teacher. The output must be clear enough for someone unfamiliar with the class,
the subject, and the school's usual routines to get through the full day
confidently and safely.

Simple, unambiguous, and self-contained. Every instruction should work without
explanation from the regular teacher. Duty-of-care information comes first —
a relief teacher needs to know about allergies and medical needs before they
need to know about lesson content. This reflects the same non-delegable duty
of care and work-health-and-safety obligations to casual staff that apply to
permanent staff — not a style preference.

---

## Gotchas

- **This is a legal sequencing requirement, not a formatting choice.**
  Relief and casual staff are owed the same duty of care and WHS obligations
  as permanent staff, which is why medical/allergy information must precede
  lesson content, always. State law isn't uniform, though — Victoria runs its
  own OHS Act 2004 rather than the harmonised WHS model laws used in most
  other states — so don't describe this to a teacher as one national regime.
- **State plainly that this pack supplements, not replaces, mandatory
  training.** It is not a substitute for the relief teacher's own school
  induction or child-protection training — say so in the output.
- **Anaphylaxis needs more than a location.** "EpiPen is in the front office"
  isn't enough. Confirm whether the reliever should expect to administer it
  themselves or wait for a trained staff member, and make explicit that
  calling 000 is required before or alongside EpiPen use.

---

## Startup & Context Check
Before asking the teacher any questions, silently perform this context check:
1. **Check Memory / Profile:** Look for saved session memory or loaded profile skills (`*-edu-profile`) containing school name, curriculum, year levels, or pedagogy framework.
2. **Check for Orchestrator:** If the `edu-plugin-orchestrator` is active and profile context is missing, invoke its Step 0 Personalisation Interview so details are saved globally.
3. **Standalone Fallback:** If operating standalone (no memory, no orchestrator), prompt the teacher directly for their curriculum, year level, and topic.

---

## What this skill needs

School name, year level, teaching context, and any class or student context.
If already known from earlier in this conversation, don't ask again.
Otherwise open with:
> "What's your name, school, and year level?"

Store the answers and proceed. Do not ask again this session.

---

## Curriculum content note
This skill does not fetch curriculum content. The relief plan deliberately
avoids curriculum codes, learning area terminology, and achievement standards —
these would confuse rather than help a relief teacher. All lesson descriptions
use plain language only.

---

## Step 1: Gather the day's information

Ask these questions together in one pass — the teacher is likely time-pressured:

> "To put together your relief pack, I need a few things:
>
> **The day:**
> 1. What is the date and your full timetable for the day? (Lessons, times,
>    year levels, subjects, and room numbers if relevant.)
> 2. Do you have any yard duty, sport, or other non-classroom responsibilities?
> 3. Who should the relief teacher contact if they need help? Name a specific
>    nearby colleague (not just "the office") — a named person is far more
>    useful in the moment than a diffuse "ask someone."
>
> **The students:**
> 4. Are there any students with allergies, medical conditions, or medication
>    schedules the relief teacher must know about? For any anaphylaxis risk —
>    is there an action plan, and should the reliever expect to administer
>    the EpiPen themselves or wait for a trained staff member?
> 5. Are there students who leave the room during lessons (e.g. for support,
>    speech therapy, or other appointments)?
> 6. Any students with behaviour plans, learning adjustments, or other needs
>    worth flagging — briefly and respectfully?
> 7. Will there be a teacher's aide or support person in the room for any
>    lessons?
>
> **The lessons:**
> 8. For each lesson, do you have an existing plan I can simplify, or should
>    we build the task from scratch? A brief description of what students are
>    working on is enough to start."

Work through the teacher's answers. If they provide an existing lesson plan
for any period, extract and simplify it. If not, build a straightforward task
from the topic and year level they describe.

---

## Step 2: Generate the relief day pack

---

**CASUAL RELIEF TEACHER DAY PACK**

**Teacher:** [Name]
**Date:** [Date]
**School:** [School name]
**Prepared:** [Date prepared]

---

### Before you start — important student information

*This pack supplements — it does not replace — your school's mandatory
casual induction and child-protection training.*

Read this section before the first lesson.

**Medical and allergy alerts:**
| Student | Condition / Allergy | Action required | Location of medication/EpiPen |
|---|---|---|---|
| [Name] | [e.g. Anaphylaxis — nuts] | [e.g. Call 000 first or alongside EpiPen use; office staff are trained to administer] | [e.g. Front office] |
| [Name] | [e.g. Asthma] | [e.g. Puffer in bag] | [e.g. Student's bag] |

For anaphylaxis, "Action required" must say whether calling 000 comes before
or alongside EpiPen use, and whether the reliever is expected to administer
it or hand off to a trained staff member — not just where it's stored.

*(Leave table empty and note "No medical alerts for this day" if none apply.)*

**Medication schedules:**
| Student | Medication | Time | Who administers |
|---|---|---|---|
| [Name] | [Medication] | [e.g. Lunch] | [e.g. Front office staff] |

*(Leave table empty and note "No scheduled medication" if none apply.)*

**Students who leave the room during lessons:**
| Student | When | Where they go | What to do |
|---|---|---|---|
| [Name] | [e.g. Period 2, 10:15am] | [e.g. Learning support room] | [e.g. They know the routine — let them go] |

*(Leave blank if none.)*

**Other student notes:**
- [Name] — [brief, respectful note e.g. "has a behaviour support plan — if
  unsettled, give a quiet task and check in one-on-one"]
- [Name] — [e.g. "works with a teacher's aide in Period 3 — aide will
  introduce themselves"]

*(Keep notes factual and respectful. Omit if no specific notes needed.)*

---

### Your day at a glance

| Period | Time | Class | Subject | Room | Notes |
|---|---|---|---|---|---|
| 1 | [Time] | Year [X] | [Subject] | [Room] | |
| 2 | [Time] | Year [X] | [Subject] | [Room] | |
| Recess | [Time] | — | — | — | [Yard duty location if applicable] |
| 3 | [Time] | Year [X] | [Subject] | [Room] | |
| 4 | [Time] | Year [X] | [Subject] | [Room] | |
| Lunch | [Time] | — | — | — | [Yard duty location if applicable] |
| 5 | [Time] | Year [X] | [Subject] | [Room] | |

---

### Lesson plans

Repeat the following block for each lesson in the timetable.

---

**Period [X] — Year [X] [Subject] — [Time] — Room [X]**

**About this class:**
2–3 sentences: general ability level, how they usually work, anything
helpful. E.g. "Settled group who work well independently" or "Enthusiastic
class — they may be chatty at the start but settle once the task is clear."

**What students are working on:**
One short paragraph, no jargon. E.g. "Students have been writing persuasive
texts. They know what a persuasive text is and have already drafted an
introduction. Today they are continuing their draft."

**The lesson — step by step:**

| Time | What to do |
|---|---|
| 0–5 min | [Settling activity — specific and simple] |
| 5–15 min | [Instruction or explanation if needed — plain language] |
| 15–[X] min | [Main activity — clear enough for students to follow themselves] |
| Last 5 min | [Wrap-up — e.g. "Ask 2–3 students to share one thing they worked on today"] |

**The task (write this on the board or read it aloud):**

> [Student-facing task instructions, written exactly as you would say them]

**If students finish early:**
[Specific backup — not "free time." E.g. "Students can continue their
independent reading book" or "Ask students to write three questions about
what they read today."]

**Work collection:**
[Where students leave completed work — e.g. "Collect all worksheets and
leave on the desk" or "Students keep work in their books — no collection needed."]

---

*(Repeat lesson block for each period)*

---

### Non-teaching responsibilities

**Yard duty:**
| Time | Location | Notes |
|---|---|---|
| [e.g. Recess] | [e.g. Top oval] | [e.g. Walk the perimeter] |

*(Leave blank if no yard duty.)*

**Other responsibilities:**
[Any other duties — e.g. "Collect roll from the office before Period 1"
or "Return keys to front office at end of day."]

---

### Contacts and admin

**If you need help:** [Name], [location/room] — [brief note e.g. "happy to assist"]
**Front office:** [Phone number or location]
**Emergency:** Call 000. Then notify front office immediately.

**End of day:**
- [Any routine — e.g. "Students pack up 5 minutes before the bell"]
- [Where to leave work, keys, roll]
- [Any sign-off required]

---

**Thank you for covering this class.**

---

## Step 3: Review and refine

> "Here's the full relief pack for the day. Would you like to add any student
> notes, adjust a lesson task, or add a backup activity for any period?"

---

## Notes on tone

- Write for a capable adult who is new to the building. Not condescending,
  not jargon-heavy.
- Avoid: curriculum codes, learning area terminology, school acronyms,
  pedagogical language.
- Include: specific page numbers, exact instructions, clear timings, room
  numbers, names.

---

## Output format

Once finalised, deliver the complete document in a dedicated standalone container (e.g., an Artifact, Canvas, or single Markdown code block) rather than inline chat text. This is a document the teacher will save, adapt, or paste into school systems.

- If the teacher requests a specific file format (e.g. .docx, .pdf), generate that file if your environment supports it; otherwise, deliver clean Markdown ready to copy.
- Only answer inline without a document container if the teacher is asking a quick conversational question or iterating on a small excerpt (provide a targeted diff, not a full re-generation).
- Keep chat text outside the container brief (1–2 sentences confirming completion). Do not duplicate the document contents in the chat message.

---

## Evidence base
- Safe Work Australia — model WHS Act/Regulations require minimising
  foreseeable risk to workers, including casual staff (applies in NSW, ACT,
  Qld, NT, SA, Tas, WA; Victoria retains its own OHS Act 2004 instead).
  <https://www.safeworkaustralia.gov.au/law-and-regulation/model-whs-laws>
- NSW Department of Education, PD-2013-0454 (2013) — confirms casual/relief
  teachers are "workers" owed the same WHS duty-of-care obligations as
  permanent staff.
  <https://education.nsw.gov.au/policy-library/policies/pd-2013-0454>
- Department of Education, Victoria (2021) — duty of care is non-delegable,
  requiring safe supervision systems and immediate access to medical
  assistance information for any staff member stepping into a classroom.
  <https://www2.education.vic.gov.au/pal/duty-of-care/policy>