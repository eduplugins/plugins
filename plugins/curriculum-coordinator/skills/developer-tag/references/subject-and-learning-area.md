# Subject / Learning Area

## Contents
- Terminology varies by curriculum, even though the key doesn't
- Don't invent a value that isn't in the list
- Casing and near-duplicate forms drift in real data
- Umbrella and split-subject pairing
- Some curricula cover only a narrow subject list
- Cross-curriculum equivalence (rough)
- Multi-valued and non-subject content

Every curriculum names this concept differently in its own materials, and
their subject lists don't line up one-to-one — but the vocabulary files
normalise the *key* to `Subject` everywhere so the tag shape doesn't change
with the jurisdiction. Map into the *target* curriculum's own **values**
under that key — don't invent a universal subject list and expect it to fit
every jurisdiction.

## Terminology varies by curriculum, even though the key doesn't

Some curricula call this **Subject** directly in their own materials — the
vocabulary key matches directly. Others call the broad grouping something
else (a **Learning Area**, a **Domain**, a **Strand** — whatever term that
curriculum's own materials use), with individual subjects recognised within
it for some phases and not others. Still others define standards for only a
narrow slice of subjects rather than a full spread. A curriculum this skill
has no vocabulary file for will have its own term again in its own
materials — check for it there, but still emit it under the common
`Subject` key rather than inventing a new key name.

## Don't invent a value that isn't in the list

Check the vocabulary's full list of values — not just the well-known named
subjects — before picking one. Real curricula carry values well beyond the
obvious subject names: broader/non-curriculum values for content that isn't
subject-specific teaching material (whole-school policy, cross-curriculum
guidance), and phase-specific values that exist alongside the general
subject list rather than folding into it (an early-years phase, for
example, commonly has its own handful of subject-shaped values distinct
from the primary/secondary list). Check a target curriculum's vocabulary
file for both kinds before reaching for a generic fallback.

**Don't let a curriculum's "non-specific" or "general" value become the
default for "doesn't fit a named subject."** It's the correct value only for
genuinely phase/subject-agnostic content — a small minority of items — and
the vocabulary's full values list, not just the familiar named subjects,
usually has a closer fit first. The other direction happens too: a
teacher-assessment *framework/methodology* document can correctly get the
non-specific value even when its title names one subject's test (e.g. a
document titled after a specific subject's reading test can still be
non-specific rather than that subject), because the document describes the
assessment process, not that subject's content — check what the document
actually covers, not just what its title mentions.

## Casing and near-duplicate forms drift in real data

Multi-word values are prone to casing drift in the wild — a Title-Case
canonical form alongside a lowercase-second-word variant, or an old spelling
alongside a newer preferred one. Always emit the canonical form from the
vocabulary file's own `values` list, and check its `avoid` list — where one
exists — for the known variants to normalise away from, rather than
reproducing whatever casing the source content happens to use.

## Umbrella and split-subject pairing

Some curricula group several individual subjects under one broader umbrella
term, and some of those same curricula also formally split that umbrella
into its own named subjects at a later phase. Where that's the shape, tag
the umbrella *alongside* the specific split subject at every phase it
applies to — including phases where the formal split already exists — not
only the phase where the umbrella is used on its own. See each value's
`pairs_with` in the target vocabulary file — when you'd tag any value that
has one, tag its pair too. This also covers umbrella/individual pairs that
aren't a formal split at all (an umbrella arts subject and its individual
disciplines, for instance) and pairs between two values that are formally
independent subjects but co-occur often enough to treat as linked in
practice.

## Some curricula cover only a narrow subject list

Not every curriculum defines standards for every subject a school teaches —
a curriculum may set standards for only one or two subject areas, with
nothing else in its own vocabulary to map the rest of the timetable onto. If
content targets a curriculum in this shape but falls outside the subjects it
actually defines, say so rather than forcing a mapping onto the nearest
named value, or fall back to a plain subject label without a
curriculum-standard crosswalk.

## Cross-curriculum equivalence (rough)

Useful when converting a tag set from one curriculum's vocabulary to
another's, or reconciling content already tagged in two systems. This
mapping is recorded as `notes` on each `Subject` value in the vocabulary
files themselves rather than duplicated here — check a value's `notes` for
its cross-curriculum equivalents (where a mapping exists) or the absence of
one. Treat it as a rough conceptual match for cross-referencing content, not
a claim that the two curriculums' content standards actually align — two
curriculums' objectives can cover a similar subject area without covering
the same content. For a curriculum with no equivalence recorded, build the
mapping from the two curriculums' own subject lists rather than guessing
from the name alone (e.g. a term that looks like a direct match in one
framework doesn't guarantee it corresponds to the same-sounding term in
another).

## Multi-valued and non-subject content

Subject can carry more than one value when content genuinely spans areas
(e.g. an English-and-History source-analysis resource). For content that
isn't subject-specific at all (whole-school policy, general guidance), pick
the closest conceptual fit rather than leaving the dimension blank — real
corpora consistently do this rather than omit the tag.

**Exception: primary-source archival media catalogued without a curriculum
mapping.** A historical photograph, painting, or artefact record kept as a
media item in its own right — not authored or packaged as teaching
material — legitimately gets no Subject/Learning Area at all when its own
source record carries none. Don't infer one from what the depicted subject
matter suggests a teacher *might* use it for (a colonial-era painting isn't
automatically `History` or `The Arts` just because either would fit) — that
inference is exactly backwards for this content shape, where the real
convention is to leave the curriculum mapping to whoever builds a lesson
around the item, not to the archival record itself. This is narrower than
the "don't leave it blank" default above: it applies to media catalogued as
a historical/archival record, not to teaching resources, guidance, or
policy content, which should still get a best-fit value as normal.
