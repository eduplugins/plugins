# Voice Check — Evidence Base

**Skill file:** `plugins/skills/core/voice-check/SKILL.md`
**Category:** Core

## What the skill does
A generic final pass over any text this session drafts for a student, family member, or colleague to read — strips AI writing tells and generic phrasing, on top of whatever domain rules the drafting skill already applied (comment variation, tone, achievement-standard grounding), never in place of them. Applies a voice profile silently if one is active. Never touches grades, achievement levels, curriculum codes, dates, or facts.

## Evidence base

### Australian Professional Standards for Teachers — Focus Area 5.5 (Report on student achievement)
- **Publisher/author:** AITSL
- **Year:** Current standard
- **URL:** https://www.aitsl.edu.au/standards
- **Australian source:** Yes
- **What it says:** Requires teachers to "report clearly, accurately and respectfully to students and parents/carers about student achievement."
- **Relevance to this skill:** Provides a generic, document-agnostic standard for the rewrite pass — "clearly, accurately and respectfully" is a reasonable operational definition of what AI-sounding or generic phrasing fails to do, independent of which specific communication skill produced the draft.

### The Power of Feedback
- **Publisher/author:** John Hattie & Helen Timperley; published in *Review of Educational Research*, Vol. 77(1), pp. 81–112 (American Educational Research Association)
- **Year:** 2007
- **URL:** https://journals.sagepub.com/doi/abs/10.3102/003465430298487
- **Australian source:** No — international, but Hattie is based at the University of Melbourne
- **What it says:** Feedback and descriptive text are only effective when specific enough to convey real information; vague, general phrasing does not meet that bar.
- **Relevance to this skill:** Grounds the "vague claims with nothing under them" check — a trait or outcome asserted with no specific behind it is what this skill fixes, and Hattie & Timperley's model is the general case for why that's a real defect, not just a style preference. This applies regardless of document type (report comment, plan, letter), which is why it belongs to this generic skill rather than a domain-specific one.

## How this evidence should sharpen the skill
1. **Keep this evidence base generic on purpose.** Domain-specific evidence (e.g. comment-bank policy for report comments, the parental-engagement continuum for family letters) belongs in `communication/report-comment` and `communication/voice-style-capture`'s own evidence bases — duplicating it here would misattribute a domain-specific claim to a skill that runs on any document type.
2. **Watch for scope creep back into domain territory.** If a future revision adds a check that only makes sense for one document type (e.g. comment-bank sameness, which is specific to report comments and feedback banks), move that check to the relevant domain skill instead of growing this one — that's exactly the duplication this skill's evidence base is designed to avoid.

## Caveats / contested evidence
Neither source studies AI-drafted text or "AI writing tells" directly — both back the general principle that specific, direct communication outperforms vague or generic phrasing, which this skill treats as the reason AI-sounding text is worth fixing. Domain-specific evidence for particular document types (family engagement, report-comment policy) is intentionally left to the skills that own those domains rather than duplicated here.
