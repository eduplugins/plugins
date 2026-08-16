# Tag — Evidence Base

**Skill file:** `plugins/skills/developer/tag/SKILL.md`
**Category:** Developer

## What the skill does
A metadata-tagging primitive that assigns education content ten abstract tag keys (Format, Content Type, Subject, School Phase, Stage/Level, Thematic Category, Use Case Theme, Use Case, Keyword, Topics, plus an optional Accessibility key) against a target curriculum's own controlled vocabulary, using per-jurisdiction vocabulary files to emit exact native strings rather than paraphrased labels.

## Evidence base

### Australian Education Vocabularies
- **Publisher/author:** Education Services Australia (ESA), on behalf of Australian education agencies and authorities
- **Year:** Current (ongoing platform)
- **URL:** https://vocabulary.curriculum.edu.au/
- **Australian source:** Yes
- **What it says:** Publishes a set of controlled vocabularies (including the Schools Online Thesaurus, ScOT) used across the Australian education sector "to promote discoverability and consistent methods of describing and retrieving resources," published as SKOS-compliant linked data (JSON-LD, RDF/XML) with SPARQL query access.
- **Relevance to this skill:** Directly validates the tag skill's core design principle — that a controlled, jurisdiction-specific vocabulary's exact string values must be used rather than paraphrased equivalents — since this is precisely how Australia's own national education metadata infrastructure operates.

### Scootle — national digital learning repository
- **Publisher/author:** Education Services Australia (ESA)
- **Year:** Current
- **URL:** https://www.esa.edu.au/solutions/our-solutions/scootle
- **Australian source:** Yes
- **What it says:** Describes Scootle as the national repository giving Australian teachers and students access to digital learning resources "aligned to the breadth of the Australian Curriculum," sourced from Australian and international providers.
- **Relevance to this skill:** Establishes the real-world content-store context the tag skill is designed for — content tagged against curriculum vocabularies (subject, phase, content type) so it can be discovered and filtered at national scale, matching the skill's stated trigger ("tagging content going into a repository, LMS, or content store").

### DCMI Metadata Terms
- **Publisher/author:** Dublin Core Metadata Initiative (DCMI)
- **Year:** Ongoing specification (current version actively maintained)
- **URL:** https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
- **Australian source:** No — international standard
- **What it says:** Defines the 15 core Dublin Core elements (Title, Creator, Subject, Description, Type, Format, etc.) plus extended properties, each with a stable URI, intended for consistent, interoperable resource description across systems, formats and disciplines.
- **Relevance to this skill:** Underpins the general principle that metadata tagging requires a fixed, named key set applied consistently regardless of the underlying resource — directly analogous to the tag skill's "ten primary keys... common to every jurisdiction" design, which functions as a Dublin-Core-like abstraction layer above jurisdiction-specific vocabularies.

### LRMI (Learning Resource Metadata Initiative) / schema.org LearningResource
- **Publisher/author:** DCMI (steward since 2014, originally Association of Educational Publishers & Creative Commons); properties integrated into schema.org
- **Year:** LRMI stewardship transferred to DCMI in 2014; schema.org LearningResource type actively maintained
- **URL:** https://www.dublincore.org/about/lrmi/ and https://schema.org/LearningResource
- **Australian source:** No — international standard
- **What it says:** LRMI defines "classes, properties and concept schemes for markup and description of educational resources," with properties like `educationalAlignment`, `learningResourceType`, `educationalLevel`, and `teaches` designed to describe how a resource maps to curriculum frameworks, its format, its intended audience level, and its pedagogical purpose.
- **Relevance to this skill:** LRMI's `educationalAlignment`/`educationalFramework` properties are the closest widely-adopted international analogue to the tag skill's per-jurisdiction crosswalk model (mapping a resource to a named curriculum's own structure), and `learningResourceType`/`educationalLevel` map closely onto the skill's Content Type/Format and School Phase/Stage-Level keys.

## How this evidence should sharpen the skill
1. **Name the standards lineage in the skill's own documentation.** The SKILL.md currently presents the ten-key abstract model as if newly invented for this skill; a short note (e.g. in the "abstract tag model" section) that this design deliberately parallels established practice — Dublin Core's fixed-key/varied-value pattern and LRMI's `educationalAlignment` framework-mapping pattern — would make clear the model isn't arbitrary but follows recognised metadata-interoperability conventions.
2. **Cross-check the shipped vocabularies against ESA's Australian Education Vocabularies where overlap exists.** Since `vocabularies/acv9.json` and the Scootle/ScOT ecosystem may describe overlapping concepts (subject, resource type, school phase) for the same Australian jurisdiction, the skill could note in `references/subject-and-learning-area.md` or the top-level SKILL.md that ESA's published vocabularies are a cross-reference point for teams extending `acv9.json`, reducing the risk of inventing Australian tag values that diverge from the sector's actual controlled vocabulary.
3. **Justify the "Accessibility" key's Australia-only scoping with the LRMI/schema.org comparison.** The skill notes Accessibility only applies "where a target vocabulary defines a native key for it (currently Australia's Access Profile)" — it could note that schema.org has no dedicated LearningResource accessibility property either (accessibility metadata there lives in separate `accessibilityFeature`/`accessibilityHazard` properties on the base CreativeWork type), which explains why this key is treated as an exception rather than one of the ten common keys, strengthening the design rationale already implicit in the skill.
4. **Reference LRMI's `educationalAlignment` model explicitly in the Subject/Stage-Level mapping steps.** Steps 5–6 describe mapping Subject and School Phase/Stage into "the target curriculum's own term and exact stored format" — citing that this mirrors LRMI's `AlignmentObject` pattern (`alignmentType`, `educationalFramework`, `targetName`) would give implementers building future jurisdiction vocabularies a recognised external schema to model new `vocabularies/<curriculum>.json` files against.

## Caveats / contested evidence
IEEE LOM (1484.12.1) was investigated as a candidate source but is a heavier, XML-Schema-bound standard aimed at learning-object interoperability in LMS contexts rather than lightweight web/repository tagging — its categories (general, lifecycle, technical, rights, relation, classification) are broader than this skill's ten-key model, and mapping between them was not attempted here to avoid overstating alignment; it is mentioned for completeness but not included as a cited source. None of the sources above describes a system with the tag skill's exact "abstract common keys + per-jurisdiction crosswalk" structure — Dublin Core and LRMI establish the *pattern* of fixed keys with jurisdiction/domain-specific values, but the specific ten-key model and Australia/UK/US crosswalk are this skill's own synthesis, not a direct implementation of any single external standard.
