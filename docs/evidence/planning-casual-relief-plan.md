# Casual Relief Teacher Day Pack — Evidence Base

**Skill file:** `plugins/skills/planning/casual-relief-plan/SKILL.md`
**Category:** Planning

## What the skill does
Generates a complete, self-contained "day pack" for a casual or relief teacher: full timetable, per-lesson notes, student welfare information (allergies, medication, learning needs), yard duty/admin responsibilities, and emergency contacts. It deliberately puts duty-of-care information (medical alerts, medication, students who leave the room) ahead of lesson content, and strips out curriculum jargon so a stranger to the school can run the day safely.

## Evidence base

### Model Work Health and Safety Act / Model WHS Laws
- **Publisher/author:** Safe Work Australia
- **Year:** Laws developed from 2011; maintained on an ongoing basis (page current as of 2026)
- **URL:** https://www.safeworkaustralia.gov.au/law-and-regulation/model-whs-laws
- **Australian source:** Yes
- **What it says:** Safe Work Australia's model WHS Act and Regulations establish a nationally consistent framework requiring a "person conducting a business or undertaking" (which includes schools/education departments) to eliminate or minimise foreseeable risk to workers — including casual staff — and to other people affected by the work, such as students and visitors.
- **Relevance to this skill:** This is the underlying legal basis for why a relief teacher must be handed safety-critical information (allergies, medication, evacuation/emergency contacts) before anything else — it operationalises the PCBU's primary duty of care down to the level of a single relief-teacher handover document.
- **Verification note:** Content confirmed via repeated search-tool retrieval of the live page (consistent, specific detail — implementation dates by jurisdiction, PCBU/worker duty language). Direct WebFetch of this URL timed out on multiple attempts (site appears slow/JS-heavy), so verification here relies on the search tool's page synthesis rather than a raw fetch — flagged for the user's own spot-check if this citation is used in anything published externally.

### Work health and safety (WHS) policy (PD-2013-0454)
- **Publisher/author:** NSW Department of Education
- **Year:** Implemented 28 October 2013; current version last updated 2026 (reference PD-2013-0454-V02.0.1)
- **URL:** https://education.nsw.gov.au/policy-library/policies/pd-2013-0454
- **Australian source:** Yes
- **What it says:** The policy commits the department to a preventative, risk-assessment-based approach to work health and safety, and explicitly defines "worker" broadly enough to include casual and relief teachers, work experience students, and volunteers — all of whom are owed the same duty-of-care obligations as permanent staff.
- **Relevance to this skill:** Directly confirms that a relief teacher is a "worker" for WHS purposes and that the department (via the classroom teacher preparing the pack) has an obligation to give them the information needed to identify and manage foreseeable hazards — validating the skill's insistence that medical/allergy/medication information "comes first."
- **Verification note:** Fetched directly; content confirmed live.

### Duty of Care: Policy
- **Publisher/author:** Department of Education, Victoria (education.vic.gov.au, Policy and Advisory Library)
- **Year:** Last updated 15 February 2021 (policy content current)
- **URL:** https://www2.education.vic.gov.au/pal/duty-of-care/policy
- **Australian source:** Yes
- **What it says:** All school staff owe students a non-delegable duty of care to take reasonable steps to reduce the risk of reasonably foreseeable harm — including maintaining safe supervision systems, having medical assistance information available, and ensuring any staff member stepping into a classroom (including a reliever) can act on that information immediately.
- **Relevance to this skill:** Supports the skill's core design choice — that a relief teacher, who has no prior relationship with the class, needs pre-packaged risk information (allergies, medication, students who leave the room) precisely because the duty of care is non-delegable and doesn't lower just because the regular teacher is absent.
- **Verification note:** Fetched directly; content confirmed live.

## How this evidence should sharpen the skill
1. **Cite the legal basis explicitly, once, near the top.** The SKILL.md currently asserts "Duty-of-care information comes first" as a design rule without grounding it. A single sentence in the "Curriculum content note" or intro section — e.g. "This reflects each state's non-delegable duty of care and WHS obligations to casual staff" — would let a school leader see why the structure is non-negotiable, without turning the output itself jargon-heavy.
2. **Add an explicit anaphylaxis/emergency-action prompt.** Given Safe Work Australia's foreseeable-risk standard, Step 1's allergy question (Q4) could be strengthened to ask specifically whether any student has an anaphylaxis action plan requiring the reliever to be shown EpiPen location *and* trained/untrained status — the current table implies location only, not confirmation the reliever knows how to use it. Consider adding a line to the "Before you start" section prompting the teacher to note "call an ambulance (000) is required before/alongside EpiPen use" per most state anaphylaxis guidelines, rather than leaving the action column freeform.
3. **State-based non-delegable duty language could inform the "If you need help" contact fields.** Both NSW and Victorian policy stress that supervision responsibility can be *delegated in practice* but not *in law* — a nearby "buddy" colleague listed in Contacts and Admin is doing exactly what the policy expects (systems for delegated supervision). Consider a one-line note in Step 3 encouraging teachers to name a specific colleague, not just "front office," since VIC/NSW guidance frames diffuse responsibility as a known failure mode.
4. **Add a short caveat that this pack does not replace mandatory school induction/child-protection requirements.** NSW policy notes casual staff must complete child-protection awareness training and code-of-conduct obligations independently of any day pack. A one-line disclaimer ("This pack supplements, not replaces, your school's mandatory casual induction and child-protection training") would prevent the tool being mistaken for full compliance.

## Caveats / contested evidence
Victoria has not adopted the nationally harmonised model WHS laws (it retains its own OHS Act 2004), so the Safe Work Australia model-law citation is directly binding only in NSW, ACT, Qld, NT, SA, Tasmania, and WA — not Victoria, which instead relies on its own OHS framework and the separate Duty of Care policy cited above. The skill is written to be state-agnostic, which is appropriate, but if a jurisdiction-specific version were ever built, this split would need to be reflected rather than assuming one national WHS regime covers all of Australia.
