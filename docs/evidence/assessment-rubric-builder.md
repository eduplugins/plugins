# Rubric Builder — Evidence Base

**Skill file:** `plugins/skills/assessment/rubric-builder/SKILL.md`
**Category:** Assessment

## What the skill does
Builds a criteria-based marking rubric whose descriptors are drawn directly from fetched achievement-standard language (never invented), with 3–5 criteria, clearly distinguishable grade bands, and a pre-delivery quality check that flags any descriptor the model had to infer rather than ground in the source text.

## Evidence base

### Jonsson, A. & Svingby, G. (2007) — The Use of Scoring Rubrics: Reliability, Validity and Educational Consequences
- **Publisher/author:** Anders Jonsson and Gunilla Svingby; published in *Educational Research Review*, Vol. 2, pp. 130–144 (Elsevier)
- **Year:** 2007
- **URL:** https://eric.ed.gov/?id=EJ796733
- **Australian source:** No — international (Sweden), but the standard meta-analytic reference for rubric reliability worldwide, cited over 1,200 times
- **What it says:** A review of 75 empirical studies finding that reliable scoring is "enhanced by the use of rubrics, especially if they are analytic, topic-specific, and complemented with exemplars and/or rater training" — but also that "rubrics do not facilitate valid judgment of performance assessments per se," i.e. reliability gains don't automatically guarantee validity.
- **Relevance to this skill:** This is the central piece of evidence for the skill's stated goal — "descriptors clear enough that two different markers would reach the same grade independently." The finding that rubrics need to be *analytic* (criterion-by-criterion, which is exactly the table structure the skill produces) and grounded in specific, well-defined language directly supports the skill's criteria-by-criteria, achievement-descriptor-anchored approach.

### Australian Professional Standards for Teachers — Standard 5.3
- **Publisher/author:** Australian Institute for Teaching and School Leadership (AITSL)
- **Year:** Current standards (live reference document)
- **URL:** https://www.aitsl.edu.au/standards
- **Australian source:** Yes
- **What it says:** Standard 5.3 requires teachers to "Demonstrate understanding of assessment moderation and its application to support consistent and comparable judgements of student learning."
- **Relevance to this skill:** Directly supports the skill's premise that a well-built rubric is a moderation tool as much as a marking tool — the whole point of grounding descriptors in shared achievement-standard language (rather than each teacher's individual judgement) is to make judgements "consistent and comparable" across markers, which is the professional standard Australian teachers are formally expected to meet.

### What Works Best 2025 practical guide — Assessment
- **Publisher/author:** NSW Department of Education, Centre for Education Statistics and Evaluation (CESE)
- **Year:** 2025 (December)
- **URL:** https://education.nsw.gov.au/content/dam/main-education/about-us/educational-data/cese/What_Works_Best_2025_Assessment_practical_guide.pdf
- **Australian source:** Yes
- **What it says:** Recommends teachers "co-develop" marking rubrics and hold "discussions... to ensure that teachers have a shared understanding of the marking criteria, as well as what student achievement at each of the proficiency bands would look like," and describes assessment moderation activities (comparing work samples, within-school or cross-school) as improving the reliability and validity of judgements.
- **Relevance to this skill:** Reinforces the skill's Quality Check step, particularly the instruction to flag any descriptor that was "inferred rather than grounded in the fetched content" for the teacher to verify — this mirrors the guide's emphasis on teachers actively confirming shared understanding of what each band looks like, rather than trusting a single author's judgement.

### Planning, teaching, assessing and reporting
- **Publisher/author:** Australian Curriculum, Assessment and Reporting Authority (ACARA)
- **Year:** Current (V9 Australian Curriculum help page)
- **URL:** https://www.australiancurriculum.edu.au/help/f-10-curriculum-overview/planning--teaching--assessing-and-reporting
- **Australian source:** Yes
- **What it says:** Achievement standards describe the quality of learning students should typically demonstrate by the end of a year level or band, and function as "a common reference point for reporting to parents/carers," with states and schools retaining flexibility in local reporting format (e.g. A–E) while anchoring to this shared standard.
- **Relevance to this skill:** Supports the skill's rule that the top and middle band descriptors must be derived directly from what the achievement standard describes as the highest level and the expected/"meets" level respectively — the skill's descriptor-construction method (top band first, then middle, then interpolate/extrapolate) mirrors how ACARA itself frames the achievement standard as the fixed reference point from which grade bands are derived.

## How this evidence should sharpen the skill
1. **Add Jonsson & Svingby's validity caveat to the Quality Check section.** The skill's pre-delivery checklist verifies grounding, distinguishability, and consistency of language — all reliability-focused checks — but doesn't check for validity (whether the rubric actually measures what the task intends to measure, versus just scoring consistently). Consider adding a checklist item such as: "Does each criterion assess something the task actually requires students to demonstrate, not just something easy to score consistently?"
2. **Make "exemplars" an explicit recommendation, not just an implicit one.** Jonsson & Svingby specifically found rubric reliability is strongest when rubrics are "complemented with exemplars and/or rater training." The skill's Rubric Format template has no field for exemplars or work samples. Consider adding an optional "Illustrative work sample" note per band, or at minimum a next-step offer (similar to the Feedback Comment Bank handoff) suggesting the teacher pair the rubric with annotated exemplars before using it for moderation.
3. **Reference Standard 5.3 explicitly to justify the "flag inferred descriptors" instruction.** Currently the skill just instructs the model to flag inferred descriptors without saying why this matters. Tying it explicitly to the moderation/consistency principle (AITSL 5.3, and the NSW "shared understanding of marking criteria" guidance) would help teachers understand that unflagged inference is a moderation risk, not just a minor caveat.
4. **Encourage co-development framing in the Working Mode section.** The NSW What Works Best guide frames rubric quality as coming from *teachers discussing* what achievement at each band looks like — a collaborative, moderation-oriented process — while the skill's MODE: DRAFT path produces "the complete rubric in one pass" without any built-in prompt to involve colleagues. Consider adding a light-touch suggestion after DRAFT-mode delivery (e.g. "Consider comparing this against a colleague's read of the same achievement standard before finalising") to nudge toward the moderation practice the evidence supports.

## Caveats / contested evidence
Jonsson & Svingby's own conclusion is a genuine caveat worth stating plainly: reliability (markers agreeing with each other) and validity (the rubric actually measuring the right thing) are not the same, and rubrics reliably improve the former without automatically guaranteeing the latter. The skill's design — grounding every descriptor in achievement-standard language — is a reasonable strategy for improving validity too (since it ties scoring back to the official standard), but this is an inference beyond what Jonsson & Svingby's review directly tested, and the skill should not be read as claiming its rubrics are automatically valid just because they are grounded and internally consistent.
