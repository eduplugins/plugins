# Assessment Outline — Evidence Base

**Skill file:** `plugins/skills/assessment/outline/SKILL.md`
**Category:** Assessment

## What the skill does
Produces a formal assessment task outline — task description, mode, conditions, curriculum links, scaffolding, and submission details — clear enough for a student to follow and precise enough for a colleague to administer consistently. It always fetches live curriculum standards and achievement descriptors first (never invents them), distinguishes formative from summative purpose, and hands its curriculum-linked output on to the Rubric Builder skill.

## Evidence base

### Assessment principles
- **Publisher/author:** NSW Education Standards Authority (NESA)
- **Year:** Current (live curriculum reference page)
- **URL:** https://curriculum.nsw.edu.au/assessment-and-reporting/assessment-principles
- **Australian source:** Yes
- **What it says:** Sets out the principles of effective assessment, including that it "is valid: there is clear alignment between the syllabus, the assessment activity and the criteria used"; identifies strengths, misunderstandings and skills not yet mastered; enables timely and relevant feedback; and "is regular, purposeful and integrated throughout teaching and learning." It also requires assessment to be inclusive and accessible for all students.
- **Relevance to this skill:** This is the clearest direct source for the skill's core design decision — that a task outline must show explicit curriculum links (standards and achievement descriptors quoted, not paraphrased from memory) and must build in scaffolding/differentiation. NESA's validity principle is exactly what the skill enforces by fetching live curriculum content rather than letting the model recall it.

### Purpose of assessment
- **Publisher/author:** NSW Education Standards Authority (NESA)
- **Year:** Current (live curriculum reference page)
- **URL:** https://curriculum.nsw.edu.au/assessment-and-reporting/assessment-in-stage-6/purpose-of-assessment
- **Australian source:** Yes
- **What it says:** Distinguishes assessment *for* learning (assisting learning, giving feedback on strengths/areas for improvement), *as* learning (students monitoring and taking responsibility for their own progress), and *of* learning (providing evidence of achievement, reporting against syllabus outcomes).
- **Relevance to this skill:** Directly grounds the skill's Planning Question 2 ("Is this formative... or summative...?"), which maps closely onto NESA's for/of-learning distinction, and its Step on scaffolding, which supports the "as learning" dimension by building in support that helps students monitor their own progress.

### Planning, teaching, assessing and reporting
- **Publisher/author:** Australian Curriculum, Assessment and Reporting Authority (ACARA)
- **Year:** Current (V9 Australian Curriculum help page)
- **URL:** https://www.australiancurriculum.edu.au/help/f-10-curriculum-overview/planning--teaching--assessing-and-reporting
- **Australian source:** Yes
- **What it says:** States that achievement standards describe the quality of learning students should typically demonstrate by the end of a year level or band, and that teachers use them to "monitor student learning," make judgements about progress, and report to parents/carers using a common national reference point.
- **Relevance to this skill:** Justifies the skill's instruction to fetch "both" curriculum standards and achievement descriptors before generating the outline — ACARA positions achievement standards as the anchor point for the entire assess-and-report cycle, which is why the skill treats them as the thing Rubric Builder will need next, not an optional extra.

### Australian Professional Standards for Teachers — Standard 5.1
- **Publisher/author:** Australian Institute for Teaching and School Leadership (AITSL)
- **Year:** Current standards (live reference document)
- **URL:** https://www.aitsl.edu.au/standards
- **Australian source:** Yes
- **What it says:** Standard 5.1 requires teachers to "Demonstrate understanding of assessment strategies, including informal and formal, diagnostic, formative and summative approaches to assess student learning."
- **Relevance to this skill:** Supports the skill's Planning Question 3 (choice of mode: written / oral / multimodal / practical / digital / performance / portfolio) and Question 2 (formative/summative) as reflecting the range of approaches Australian teachers are formally expected to be able to design and select between.

## How this evidence should sharpen the skill
1. **Name the formative/summative distinction using NESA's own for/as/of framing.** The skill's Planning Question 2 currently offers only a binary (formative vs summative). Consider adding the "as learning" dimension explicitly — e.g. prompting whether the task includes a self-monitoring or reflection component — since NESA treats this as a distinct third purpose, not a subset of formative.
2. **Strengthen the validity principle in the "Assessment" section of the template.** The output template's closing "Assessment" line currently just points to the rubric. Given NESA's validity principle ("clear alignment between the syllabus, the assessment activity and the criteria used"), consider adding a brief instruction to the skill to sanity-check, before finalising, that the task description in this outline still matches the exact curriculum standards fetched — i.e. a lightweight validity check step, similar to Rubric Builder's "Quality check before delivering."
3. **Add an explicit accessibility instruction, not just a differentiation question.** NESA's assessment principles state assessment "is inclusive of, and accessible for, all students" as a first-class principle, not an optional add-on. The skill currently treats differentiation as Planning Question 6 (last of six) and defers "additional adjustments" to class records. Consider elevating accessibility to be checked earlier, and note the Disability Standards for Education 2005 requirement that assessment tasks be accessible (referenced by NESA) as the reason, rather than framing it only as a nice-to-have differentiation option.
4. **Cross-reference AITSL 5.1's "informal and formal" wording in the mode-selection guidance.** The skill's mode list (written/oral/multimodal/practical/digital/performance/portfolio/other) doesn't explicitly note that tasks can combine informal and formal assessment. A short note that formal, summative outlines like this one sit within a broader mix that should also include informal, formative checks (e.g. this plugin's own Exit Ticket skill) would tie the assessment skill family together and match AITSL's framing.

## Caveats / contested evidence
None identified specific to this skill's approach — the NESA and ACARA sources are consistent with each other and directly describe the practice the skill automates (curriculum-grounded, purpose-labelled, mode-explicit assessment task design). The main limitation is that these sources are NSW/national curriculum-body guidance rather than independent empirical research; they describe accepted professional standards rather than measured learning-outcome effects, which is an appropriate evidence type for a task-design skill like this one but is a different kind of evidence from, e.g., the effect-size research cited for Exit Ticket or Feedback Comment Bank.
