---
name: tag
description: >
  Tags a piece of content against a curriculum's own vocabulary — subject or
  learning area, phase or grade, resource type, thematic category, use case,
  accessibility, rights, and keywords — for any curriculum with a named
  jurisdiction, not only the ones this skill ships a vocabulary for. Trigger
  when tagging, classifying, cataloguing, or preparing metadata for
  educational content going into a repository, LMS, or content store.
---

# Tag

A primitive for assigning metadata tags to a piece of education content
relative to a curriculum. It does not assume any particular content store or
curriculum — it gives you an abstract tag model that holds across curriculums,
plus the crosswalks needed to localise that model to a specific curriculum's
own vocabulary, plus literal per-jurisdiction **vocabularies** — exact-string
dictionaries of the real, allowed values for each native tag key (see
[vocabularies/](vocabularies/)) — for when you're tagging into a jurisdiction
whose vocabulary is actually known.

Use the abstract model and the reference files to *reason* about what a tag
should be. Use a `vocabularies/<curriculum>.json` file, when one exists for
your target, to pick the *exact string* to emit — never paraphrase a known
vocabulary's values, even when your own wording seems clearer. A tag that's
conceptually right but differently worded is still the wrong tag to a system
matching against its own controlled vocabulary — the exact string is the
whole point of consulting one.

## The abstract tag model

Ten primary keys cover the space, common to every jurisdiction this skill
ships a vocabulary for — `Format`, `Content Type`, `Thematic Category`,
`Use Case Theme`, `Use Case`, `School Phase`, `Stage / Level`, `Subject`,
`Keyword`, `Topics` — so the key you emit doesn't change with the
jurisdiction, only the values under it. Not every item needs a value on
every key — see each reference for when a key is typically sparse or even
absent.

A further key, `Accessibility`, applies only where a target vocabulary
defines a native key for it (currently Australia's `Access Profile`) — it's
not part of the common ten and isn't guaranteed to exist for every
jurisdiction, but it's grouped into the same reference set below.

| Key | What it captures | Reference |
|---|---|---|
| **Format** | The media/delivery type — Text, Video, Image, Audio, Interactive, Downloadable, Course, Assessment, Online | [references/format-and-purpose.md](references/format-and-purpose.md) |
| **Content Type** | What kind of resource this *is* — teaching resource, assessment, lesson/unit plan, curriculum reference, pedagogical guidance, admin/policy guidance, standards/objectives reference | [references/format-and-purpose.md](references/format-and-purpose.md) |
| **Subject** | The curriculum subject or learning area, in the target curriculum's own terms | [references/subject-and-learning-area.md](references/subject-and-learning-area.md) |
| **School Phase** | Broad age band (Primary/Secondary or equivalent), in the target curriculum's own terms | [references/phase-level-grade.md](references/phase-level-grade.md) |
| **Stage / Level** | Finer age band (Key Stage, Year Level, Grade, or equivalent), paired with School Phase | [references/phase-level-grade.md](references/phase-level-grade.md) |
| **Thematic Category** | A broader lens that cuts across subjects — SEND, wellbeing, school management, curriculum content itself | [references/thematic-and-use-case.md](references/thematic-and-use-case.md) |
| **Use Case Theme** | The coarser sibling of Thematic Category | [references/thematic-and-use-case.md](references/thematic-and-use-case.md) |
| **Use Case** | The pedagogical job the content does — lesson planning, formative assessment, personalised learning, teacher CPD, school administration | [references/thematic-and-use-case.md](references/thematic-and-use-case.md) |
| **Keyword** | Several free, item-specific subject-matter phrases | [references/keywords-and-topics.md](references/keywords-and-topics.md) |
| **Topics** | One broader, thesaurus-style heading — the coarser sibling of Keyword | [references/keywords-and-topics.md](references/keywords-and-topics.md) |
| **Accessibility** | Verifiable accessibility features present in the resource (captions, alt text, screen-reader structure, etc.) — only where the target vocabulary defines a native key | [references/accessibility.md](references/accessibility.md) |

## Vocabularies

[vocabularies/uk-curriculum.json](vocabularies/uk-curriculum.json),
[vocabularies/acv9.json](vocabularies/acv9.json), and
[vocabularies/us-common-core.json](vocabularies/us-common-core.json) are the
jurisdictions this skill currently ships a literal vocabulary for. Each
`Stage / Level` value's `notes` also carries its approximate age and
cross-curriculum equivalents in the other two jurisdictions, and each
`Subject` value's `notes` carries its rough cross-curriculum equivalents
(where one exists) the same way.

## Method

1. **Identify the curriculum and its jurisdiction.** Name which curriculum
   this content targets — a UK National Curriculum, an Australian
   Curriculum, US Common Core, or another named framework — and its
   jurisdiction. If unstated, infer it from the content (spelling,
   terminology, publisher, named qualifications like GCSE vs. AP) or ask.
   Done when you can name the curriculum, or explicitly conclude none
   applies.

2. **Load the matching vocabulary, if one exists.** Check
   `vocabularies/<curriculum>.json` for a file covering this curriculum and
   jurisdiction (e.g. `acv9.json` for Australia's Australian Curriculum v9).
   If one exists, its native key names and its `values[].value` strings are
   what you emit in every later step — not the abstract dimension names, and
   not a rephrasing of them. If none exists, fall back to the abstract
   dimension names, use the reference files' guidance to choose sensible
   values, and say plainly that the output is a best-effort mapping rather
   than a known vocabulary. Done when you know, for this run, whether you're
   emitting a jurisdiction's native keys or the abstract dimension names.

3. **Read the content.** Title, description/summary, a body excerpt, and the
   publisher/format are enough signal for every decision below. Done when
   you've captured that signal, not just skimmed the title.

4. **Classify Content Type and Format.** Content Type is the primary
   branch — it conditions how sparse or dense the remaining keys should be
   (a worksheet gets dense Use Case tagging; a policy document often gets
   none at all). Format is the independent media/delivery axis — set it from
   the same signal, not from Content Type. Both keys exist in every
   jurisdiction's vocabulary now, so set both rather than treating one as a
   substitute for the other. See
   [references/format-and-purpose.md](references/format-and-purpose.md).
   Done when Content Type is set (or explicitly ruled out as inapplicable)
   and Format is set.

5. **Map Subject** into the target curriculum's own term for this concept,
   picking the value from the vocabulary's list rather than a paraphrase of
   it. After picking a Subject value, check its `pairs_with` field in the
   vocabulary file — if present, add that paired value too, before moving on
   to the next step; don't leave this as an optional cross-check to skip
   under time pressure. See
   [references/subject-and-learning-area.md](references/subject-and-learning-area.md).

6. **Map School Phase and Stage / Level**, again in the target curriculum's
   own term and exact stored format. Use each `Stage / Level` value's `notes`
   (approximate age and cross-curriculum equivalents) when comparing across
   curriculums, and use the vocabulary's own
   explicit "non-specific" value — where one exists — rather than omitting
   the key when content is phase-agnostic; omit it only where the vocabulary
   defines no such value (Australia's Stage / Level, for instance, defines no
   non-specific value at all — omit that key there rather than inventing
   one). A School Phase value derived from the curriculum's own structure
   rather than pulled from a literal native field (e.g. Australia's
   Primary/Secondary/Senior Secondary, derived from the F–6/7–10 grouping) is
   still the correct value to emit, not a lesser-confidence fallback to skip.
   See [references/phase-level-grade.md](references/phase-level-grade.md).

7. **Assign Thematic Category, Use Case Theme, and Use Case.** Condition all
   three on Content Type, not on the item's specific topic. Where the
   vocabulary defines a fixed bundle for a given Content Type — check the
   vocabulary file's own `use_case_bundles` map (keyed by literal Content
   Type value) before reasoning from prose, it's the mechanically-copyable
   source of truth — apply it in full as one atomic decision, don't
   cherry-pick the subset that seems to fit this particular item; that
   bundle only applies to a Content Type it literally names, never as a
   general "this looks teaching-adjacent" extension. For every other
   Content Type, check the vocabulary's own `theme_default` for the
   Thematic Category/Use Case Theme pair to default to before falling back
   to first-principles reasoning — it's the dominant pair for most of the
   corpus, not a per-item judgement call. Use Case itself still defaults to
   *dense* here too: check `use_case_default_pool` and select the values
   from its `pool` that this item is actually true of — a missing
   `use_case_bundles` entry means "select from the pool," not "leave this
   empty" — and reserve empty/sparse for the shape-based exceptions that
   pool names (`sparse_or_empty_when`), not for every Content Type lacking
   the exact bundle. For a jurisdiction where these three are `inferred`
   (borrowed from another jurisdiction's observed vocabulary rather than
   that jurisdiction's own real tag data), still emit them — `inferred`
   isn't licence to skip a key. See
   [references/thematic-and-use-case.md](references/thematic-and-use-case.md).

8. **Note Accessibility, where the vocabulary tracks it.** Not part of the
   ten common keys, so only apply this when the target vocabulary defines a
   native key for it (currently Australia's `Access Profile`). Accessibility
   tags describe features *present in the resource itself* — don't guess;
   only tag what you can verify (e.g. captions are present, alt text is
   present). See [references/accessibility.md](references/accessibility.md).

   No shipped vocabulary currently defines a native Rights key. Where the
   target system tracks rights/licensing outside this skill's vocabulary
   files, name the licence/copyright holder and, when known, the specific
   re-use terms — copied verbatim from the content when it already states
   one — rather than a bare yes/no flag or an invented controlled value.

9. **Generate Keyword and Topics.** Keyword is several short, specific,
   Title-Case noun phrases; Topics is one broader, thesaurus-style heading —
   set both, they're siblings, not alternatives, even where one is
   `inferred`. Neither should repeat Subject or Thematic Category. Before
   emitting Keyword values, run it as a check, not an afterthought: ask
   whether this item's Content Type is one of the ones the target
   vocabulary's convention treats as normally empty (e.g. UK test
   papers/specs/curriculum-reference documents) — if so, default to empty
   rather than defaulting to populate; only generate values once you've
   confirmed this Content Type is one of the populated ones. See
   [references/keywords-and-topics.md](references/keywords-and-topics.md).

10. **Apply tag hygiene before emitting.** Canonical casing on every value;
    the vocabulary's `avoid` list over any near-duplicate you're about to
    mint; one tag per value, never comma-joined into a single string; each
    value under its own key, not a neighbouring one it resembles. If you
    have live access to the target system's existing tag data beyond a
    vocabulary file here, reuse its highest-usage existing spelling instead
    of minting a new variant. See
    [references/keywords-and-topics.md](references/keywords-and-topics.md).

11. **Output** the tags as a flat list of `{ key, value }` pairs, using the
    target vocabulary's exact native key names and values — all ten common
    keys, not just the ones a jurisdiction's real corpus happens to observe.
    This is the UK vocabulary applied to a real example — every value below
    is copied verbatim from `vocabularies/uk-curriculum.json`, not rephrased;
    `Format` and `Topics` are UK's two `inferred` keys, included on equal
    footing with the eight `observed` ones. Content Type
    `Teacher And Learning Resources` carries a `use_case_bundles` entry, so
    Use Case is emitted as that entry's full 7-value bundle, atomically, not
    the single value that most obviously fits this worksheet:

    ```json
    [
      { "key": "Format", "value": "Text" },
      { "key": "Content Type", "value": "Teacher And Learning Resources" },
      { "key": "Thematic Category", "value": "Education Objectives And Materials" },
      { "key": "Use Case Theme", "value": "Student Learning And Performance" },
      { "key": "Use Case", "value": "Curriculum & Lesson Planning" },
      { "key": "Use Case", "value": "Resource Generation" },
      { "key": "Use Case", "value": "Teacher Training & Personal Development" },
      { "key": "Use Case", "value": "Student Progress Tracking" },
      { "key": "Use Case", "value": "Personalised Learning" },
      { "key": "Use Case", "value": "Formative Assessment" },
      { "key": "Use Case", "value": "Student-Teacher Comms & Feedback" },
      { "key": "School Phase", "value": "Primary" },
      { "key": "Stage / Level", "value": "Key Stage 2" },
      { "key": "Subject", "value": "Mathematics" },
      { "key": "Keyword", "value": "Long Multiplication" },
      { "key": "Topics", "value": "Number" }
    ]
    ```

    When no vocabulary matched the target curriculum, fall back to the ten
    abstract key names instead (`Format`, `Content Type`, `Thematic
    Category`, `Use Case Theme`, `Use Case`, `School Phase`, `Stage /
    Level`, `Subject`, `Keyword`, `Topics`) and say explicitly that these
    are generalised labels, not a known system's real tag keys.
