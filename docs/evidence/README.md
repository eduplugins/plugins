# Skill Evidence Base

Each file in this folder pairs one skill in [`plugins/skills/`](../../skills/) with
trusted, independently verified evidence for the pedagogical or practical
approach it takes — plus concrete, evidence-grounded suggestions for
sharpening the skill further.

**Method:** every URL cited was fetched and checked, not recalled from
memory. Sources are Australian wherever a solid one exists (AITSL, ACARA,
NESA, NSW DoE/CESE "What Works Best", AERO, Safe Work Australia, ESA), with
well-established international research (Hattie, Rosenshine, Sweller, Mayer,
EEF, Wiggins & McTighe, Kirschner/Sweller/Clark, PBLWorks) used only where no
Australian equivalent exists, and always labelled as such. Where evidence is
genuinely mixed or contested (chiefly inquiry- and project-based learning),
the relevant file says so explicitly rather than picking a side.

**Note on dates:** a few sources describe themselves as current as of 2026 —
that reflects when this research was run, not a claim about this repo's own
history.

## Index

| Skill | Category | Strongest evidence source |
|---|---|---|
| [Exit Ticket](assessment-exit-ticket.md) | Assessment | NSW DoE CESE, *What Works Best 2025 — Effective feedback* |
| [Feedback Comment Bank](assessment-feedback-comment-bank.md) | Assessment | Hattie & Timperley (2007), *The Power of Feedback* |
| [Assessment Outline](assessment-outline.md) | Assessment | NESA, *Assessment principles* |
| [Rubric Builder](assessment-rubric-builder.md) | Assessment | Jonsson & Svingby (2007), rubric reliability/validity meta-analysis |
| [Assessment Schedule](assessment-schedule.md) | Assessment | NSW DoE CESE, *What Works Best 2025 — Assessment* |
| [Parent Comms Writer](communication-parent-comms.md) | Communication | AITSL Spotlight, *Strengthening parent engagement to improve student outcomes* (2024) |
| [Parent Curriculum Explainer](communication-parent-curriculum-explainer.md) | Communication | ACARA, *Parent/carer information* (V9 Australian Curriculum) |
| [Report Comment Writer](communication-report-comment.md) | Communication | NSW DoE, *Reporting advice — Writing report comments* |
| [Voice & Style Capture](communication-voice-style-capture.md) | Communication | Goodall & Montgomery (2014), parental engagement continuum |
| [Tag](developer-tag.md) | Developer | Education Services Australia, *Australian Education Vocabularies* |
| [Differentiation Reviewer](differentiation-reviewer.md) | Differentiation | AITSL, APST Standard 1.5 / *In the Classroom: Differentiation* |
| [Differentiation Suggester](differentiation-suggester.md) | Differentiation | AITSL, APST Standard 1.5 / *In the Classroom: Differentiation* |
| [IBL Unit Creator](inquiry-ibl-unit.md) | Inquiry | Hattie, Visible Learning MetaX — inquiry-based teaching; AERO's guided/explicit-first caution |
| [PBL Unit Creator](inquiry-pbl-unit.md) | Inquiry | Buck Institute/PBLWorks, *Gold Standard PBL*; Condliffe et al. (2017) MDRC review |
| [Casual Relief Teacher Day Pack](planning-casual-relief-plan.md) | Planning | Safe Work Australia, Model WHS Laws + state duty-of-care policy |
| [Lesson Planner](planning-lesson-planner.md) | Planning | NSW DoE CESE, *What Works Best*; Rosenshine's Principles of Instruction |
| [Slide Deck Creator](planning-slide-deck.md) | Planning | AERO, *Managing cognitive load optimises learning*; Mayer & Fiorella coherence principle |
| [Student Task Sheet Creator](planning-student-task-sheet.md) | Planning | AERO, *Practice guide — Scaffold practice*; NSW DoE, *Sharing learning intentions and success criteria* |
| [Unit of Work Creator](planning-unit-of-work.md) | Planning | ACARA, *Sequencing learning* (V9 Australian Curriculum) |
| [Unit Outline](planning-unit-outline.md) | Planning | ACARA, *Sequencing learning* (V9 Australian Curriculum) |

## Cross-cutting themes worth a maintainer's attention

A few points recur across multiple files and are worth acting on repo-wide
rather than skill-by-skill:

- **AERO and NSW DoE/CESE are the two workhorse Australian sources** across
  planning, assessment, and inquiry skills (explicit teaching, cognitive
  load, feedback, assessment balance). Both are actively maintained —
  several "What Works Best" and AERO URLs changed shape during this research
  (e.g. the 2020 update was superseded by a "2025 evidence guide" edition),
  so these links should be spot-checked periodically rather than assumed
  stable.
- **AITSL's Australian Professional Standards for Teachers (APST)** —
  especially Standards 1.5, 2, 3, and 5 — back most of the assessment,
  differentiation, and planning skills and could be cited by number directly
  in the relevant SKILL.md files, not just in this evidence folder.
- **Inquiry- and project-based learning are genuinely contested.** The
  `ibl-unit` and `pbl-unit` files lay out both the supportive evidence
  (Hattie's effect sizes, PBLWorks' Gold Standard model) and the cautionary
  evidence (Kirschner, Sweller & Clark 2006; Alfieri et al. 2011; AERO's
  explicit-teaching-first position) and recommend the skills say outright
  that guided/scaffolded inquiry is better-evidenced than fully open
  inquiry — currently both skills default to "guided" without explaining
  why, which is a quick, high-value fix.
- **Victoria sits outside the harmonised WHS regime** (it runs its own OHS
  Act 2004), which matters for `casual-relief-plan`'s duty-of-care framing
  if a state-specific version is ever built.
- **A few PDF sources** (What Works Best practical guides, AERO's scaffold
  practice guide, NSW DoE's LISC guide) couldn't be parsed by the fetch
  tooling as text and were instead verified by confirming the file loads
  (HTTP 200, correct content-type/metadata) and cross-checking claims
  against independent search-result snippets. This is noted individually in
  the affected files.

## Suggested next step

Each evidence file's "How this evidence should sharpen the skill" section
gives specific, line-level suggestions. None of those edits have been applied
to the actual `SKILL.md` files yet — this folder is the evidence and
recommendation layer; folding the highest-value suggestions into the skills
themselves is a separate follow-up.
