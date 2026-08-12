# Thematic Category and Use Case

All three keys are conditioned on Content Type (see SKILL.md's Content
Type/Format step, which links to `format-and-purpose.md`) — decide Content
Type first.

## Thematic Category and Use Case Theme — two separate keys, not one

These are **two independent native keys**, both single-valued, both
conditioned on Content Type — not two names for the same field. Emit both on
every item. `Thematic Category` is the finer-grained of the pair; `Use Case
Theme` is its coarser sibling. Use the exact strings in the target
vocabulary file, not a paraphrase of them — "the framework this document
sits under" is a description of the concept, `Education Objectives And
Materials` is the value to actually emit.

`Special Education Requirements` takes priority over every other Thematic
Category value when content is SEND-specific, even if it's also pedagogical
or administrative in nature.

### Default the pair, then check named exceptions — don't reconstruct it per item

For most Content Types, this pair isn't a fresh judgement call on every
item — one pair dominates the corpus (observed on roughly three-quarters of
UK content: `Education Objectives And Materials` / `Student Learning And
Performance`). Check the vocabulary file's `Content Type.theme_default` for
this default pair before reasoning from scratch, and apply it to *any*
Content Type without its own `use_case_bundles` entry, not only the two that
carry one — that includes `Guidance`, `Pedagogical Guidance`/`Pedagogical/
Teaching Guidance`, `Learning Objectives`, `National Curriculum`, `Teacher
Generated Content`, and most of the rest of the Content Type list. Emit both
keys from this default, don't drop `Use Case Theme` just because a bundle
entry doesn't exist for this Content Type.

Only deviate from the default pair where the content's actual subject
matter — not its Content Type label — signals one of these:

- **The item's real subject is how the school system runs or is inspected**,
  not a specific curriculum area — this is the same signal
  `phase-level-grade.md` already uses for its `Non-Specific/All` Phase
  exception (an EEF-/Ofsted-style whole-school evidence review, an
  inspection framework, or genuinely operational/compliance content like
  data protection or consent). If that signal fires here, it also fires for
  Use Case Theme: switch to `School Management`. Keep `Thematic Category` at
  `Education Objectives And Materials` when the review is specifically about
  subject/curriculum quality (a subject research review); drop `Thematic
  Category` entirely for purely operational/compliance content.
- **The content is SEND-specific**, per the priority rule above — `Thematic
  Category: Special Education Requirements`, and it composes with the point
  above rather than replacing it: a whole-school SEND/inclusion evidence
  review still gets `Use Case Theme: School Management`.
- **The content is specifically about post-16/FE/T-Level progression** —
  `Thematic Category: Further And Higher Education`, `Use Case Theme`
  unchanged at `Student Learning And Performance`.

A phase mention, an inspection body's name, or a subject name in the title
isn't enough on its own to trigger these — read what the document is
actually *for*, the same way `phase-level-grade.md` warns against treating a
phase namecheck as scoping evidence.

## Use Case — three tiers, keyed on document shape more than Content Type

Describes the pedagogical/operational job the content does. There are three
tiers, and which one applies is mostly a function of what the document is
*for* — not a literal Content Type string match:

1. **Atomic bundle.** A short, named list of Content Types where the corpus
   observes one fixed multi-value set on essentially every item —
   `Teacher And Learning Resources` and the `Past Papers` family. Apply the
   `use_case_bundles` entry in full, as one atomic decision — don't
   cherry-pick a subset, and don't extend this treatment to a Content Type
   that merely resembles one of these two (a Key Stage 2 test *framework*
   document is not automatically a `Past Papers`-shaped item just because
   both mention a test — check the vocabulary's literal Content Type value,
   not the vibe).
2. **Dense but item-specific — the common case.** Most other Content
   Types — `Guidance`, `Pedagogical Guidance`/`Pedagogical/Teaching
   Guidance`, `Learning Objectives`, `National Curriculum`, `Progression
   Map`, `Marked`, and most of the rest of the list — still default to a
   *dense* Use Case set on teaching/curriculum/assessment-support content,
   just not the exact same 7 values every time. Use the vocabulary's own
   `use_case_default_pool`: pick the 2-7 values from its `pool` that are
   actually true of this item. The failure mode here is under-filling
   (reaching for one value, or leaving it empty, because there's no literal
   bundle entry to copy) — don't do that; a missing `use_case_bundles` entry
   means "select from the pool," not "this item gets none."
3. **Sparse to empty.** Reserved for content whose job genuinely isn't a
   classroom task — check `use_case_default_pool.sparse_or_empty_when` in
   the vocabulary file. This is shape-based, not Content-Type-based: a
   subject/inspection *report* (a review of how a subject or the system is
   taught/performing across many schools) is sparse/empty even when its
   Content Type reads as teaching-flavoured (`Teacher Generated Content` is
   the literal Content Type on some of these); a privacy notice or consent
   form is sparse/empty regardless of Content Type. `Administrative
   Guidance` and `Quality Assurance` default to this tier directly.

Check the vocabulary file's `use_case_bundles` and `use_case_default_pool`
before reasoning from scratch either way — they're the mechanically-copyable
source of truth, not a starting point to override on instinct. Between
tiers 2 and 3, the deciding question is "does a teacher/pupil actually *do*
something with this on a specific occasion, or is it a source document
someone consults" — not which Content Type label got picked.

## Worked Content Type → bundle mapping (UK)

`vocabularies/uk-curriculum.json`'s `Content Type` key carries a
`use_case_bundles` map, keyed by literal Content Type value, that gives the
exact bundle to copy — mechanically, not reconstructed from prose. At
minimum:

| Content Type | Thematic Category | Use Case Theme | Use Case (all, atomically) |
|---|---|---|---|
| `Teacher And Learning Resources` | `Education Objectives And Materials` | `Student Learning And Performance` | `Curriculum & Lesson Planning`, `Resource Generation`, `Teacher Training & Personal Development`, `Student Progress Tracking`, `Personalised Learning`, `Formative Assessment`, `Student-Teacher Comms & Feedback` |
| `Past Papers` (mark schemes, test papers) | `Education Objectives And Materials` | `Student Learning And Performance` | same 7-value bundle as above — **and** emit Content Type itself as the bundle `Teacher And Learning Resources`, `Learning Objectives`, `Past Papers` (all three, not `Past Papers` alone) |

This 7-value Use Case bundle is every Use Case value *except* the
admin/monitoring cluster (`Managing Education Organisation Policies And
Obligations`, `Monitoring School Performance`, `Monitoring Pupil Behaviour &
Wellbeing`, `Managing School Policies And Obligations`, `Managing Finacial
And Funding Matters`) and `Assessment And Feedback` — those five stay
reserved for actually administrative/monitoring/assessment-specific content,
not for the general teaching-resource bundle.

For a Content Type not covered by `use_case_bundles`, use the vocabulary
file's `use_case_default_pool` instead (tier 2 above) — that's still most
Content Types, and still usually a multi-value answer, just not this exact
atomic 7. For a jurisdiction whose vocabulary carries neither map at all,
fall back to single-value judgement using the shape test above — the bundle
and pool mechanisms are corpus-verified shortcuts where they exist, not
proof that every jurisdiction works this way.
