# Format and Content Type

Two different questions, both usually decided before anything else:
**Format** is what medium the content is delivered in; **Content Type**
(the abstract model's "Resource Purpose") is what job the content does.
They're independent axes — a video can be a teaching resource or an
assessment; a text document can be either too. Set both keys on every item;
neither substitutes for the other now that every jurisdiction's vocabulary
carries both.

## Format — multi-valued

A small, stable set of primitives, generally combined (e.g. a downloadable
video, an online interactive):

| Value | Meaning |
|---|---|
| `Text` | Written document — article, guidance, worksheet text, transcript |
| `Video` | Video content |
| `Image` | A still image (photo, diagram, illustration) |
| `Audio` | Audio-only content |
| `Interactive` | Something the learner manipulates (simulation, game, interactive diagram) |
| `Downloadable` | Available as a file to download, as opposed to only viewable in-browser |
| `Online` | Web-hosted / streamed, viewable without downloading |
| `Course` | A structured multi-part learning sequence, not a single resource |
| `Assessment` | Built specifically for testing/evaluating a learner |

This is descriptive of the file/medium, not of pedagogical role — a video
can carry any Content Type value below. `Text` and `Video` dominate most
content stores, with `Assessment` rare by raw count. Rarity isn't licence to
under-apply it, though: tag any resource whose function is testing,
evaluating, or tracking a learner's progress (quizzes, rubrics, checklists,
progress-monitoring templates), not only formal exam papers — a resource
literally named "Progress monitoring tool" still needs it. Before Content
Type existed as a separate key in Australia's vocabulary, Format:`Assessment`
was the *only* place that signal could go, which is why it was historically
under-applied there — now put the resource-purpose signal on Content Type
and reserve Format:`Assessment` for when the delivery mechanism itself is
assessment-flavoured (e.g. an online test platform).

**Exception: when the target system doesn't track Content Type as a
dimension at all**, that "now put it on Content Type instead" advice has
nowhere to land — there is no Content Type output for that run. Treat this
as a mandatory cross-check performed once Format is otherwise decided, not a
judgement call to revisit only if it comes to mind:

1. Check whether Content Type/`purposes` is actually a tracked, emitted
   dimension for this run (the setup/target-system instructions say so
   explicitly when it isn't).
2. If it isn't tracked, ask the Content Type question anyway, silently: if
   this item's Content Type *would have been* `Assessment`-flavoured, add
   Format:`Assessment` now, before moving on — don't let the signal
   disappear just because it has nowhere to land as its own key.
3. Apply it at the rate you would if Content Type didn't exist as a concept
   at all — every quiz, rubric, checklist, and progress-monitoring/tracking
   template, not only formal exam papers. This is exactly the shape that
   gets missed in practice: a resource titled "Progress monitoring tool" or
   "...tracker" is assessment-flavoured even though nothing about its name
   says "exam" or "test."

Only fall back to the narrower delivery-mechanism-is-assessment reading (an
online test platform, specifically) when Content Type *is* a tracked
dimension for this run and is carrying that signal already.

Two Format values are easy to over-apply. `Online` is not a synonym for "has
a URL" — nearly every catalogued item does, and most still don't carry this
tag. Reserve it for content whose delivery mechanism is itself the point (a
hosted interactive platform/tool), not for plain web-hosted text or video
that merely happens to live at a URL. `Downloadable` should likewise
describe the *primary* artifact, not any download link that happens to
appear on the page — a "Download DOC/PDF" link on a page whose main
experience is in-browser video or text isn't enough on its own.

## Content Type — usually single-valued, drives everything else

This is the key that conditions how the other keys typically get filled in.
Content clusters into a large majority that's direct teaching/learning
material, with a long tail of administrative, pedagogical, and reference
content that follows different tagging patterns.

"Usually" single-valued, not always: where a vocabulary file's
`use_case_bundles` entry for a Content Type carries a `content_type_bundle`
(UK's `Past Papers` does — see `thematic-and-use-case.md`'s worked table),
that's a corpus-verified exception, not a mistake to collapse back to one
value.

| Value | Typical content | Downstream pattern |
|---|---|---|
| `Teaching Resource` | Worksheets, slide decks, lesson materials, pupil-facing tasks — the default for most catalogued content | Dense: gets a full set of Use Case tags, a specific Phase/Stage, a specific Subject |
| `Assessment` | Exam papers, test frameworks, marked work | Dense, phase-specific |
| `Lesson/Unit Plan` | A plan for delivering teaching, not the teaching material itself | Dense |
| `Curriculum Reference` | The curriculum framework document itself (standards, programmes of study) | Sparse Use Case, precise Subject/Phase |
| `Learning Objectives` | Statements of what should be learned (subject-content specs, research reviews of what "good" looks like) | Moderate; skews toward older phases (secondary/post-16) |
| `Pedagogical Guidance` | How-to-teach guidance, evidence reviews, teaching strategy content — not what to teach | Use Case present but narrower (teacher CPD, personalised learning), Phase often non-specific |
| `Administrative Guidance` | School operations: admissions, funding, governance, attendance, safeguarding | Sparsest: often *no* Use Case tag at all, Phase usually non-specific, but still gets a best-fit Subject |
| `Student-Generated Content` | Student-authored content | Rare in catalogued repositories |
| `Teacher-Generated Content` | Content authored by a teacher rather than a publisher | Rare |

This table is the general, cross-curriculum shape — useful whenever a target
vocabulary's Content Type is `inferred` rather than `observed`. SKILL.md's
Thematic Category/Use Case step links to `thematic-and-use-case.md`, which
carries the Use Case bundle rule with verified specifics whenever you have a
literal UK Content Type to work from — prefer that over this general table.

**Don't let Use Case values leak into Content Type, or vice versa.** Content
Type answers "what kind of resource is this" — a document/artifact
classification (`Teacher And Learning Resources`, `Past Papers`, `Learning
Objectives`). Use Case answers "what job does it do" — a pedagogical/
operational function (`Curriculum & Lesson Planning`, `Assessment And
Feedback`, `Student Progress Tracking`, `Monitoring School Performance`).
These read as similar in shape and are easy to cross-contaminate once a
model struggles to fill one of them — `Assessment And Feedback`, `Curriculum
& Lesson Planning`, `Monitoring School Performance` and their siblings are
Use Case values and never belong under Content Type/`purposes`, no matter
how well they seem to summarise the resource. If you find yourself reaching
for a Use Case-shaped value to fill Content Type (or the reverse), that's a
signal to go back and fill the *correct* key properly — see
`thematic-and-use-case.md`'s bundle table — not to relocate the value.

**Rule of thumb:** the further a piece of content is from "something a
teacher hands directly to pupils," the sparser its tagging on the Use Case
and sometimes Thematic Category dimensions should be — don't force a
Use Case tag onto a policy document just to fill the field.

## Don't collapse a real pair into a false "duplicate"

Real corpora do show casing/punctuation variants of the *same* value
coexisting — `Pedagogical Guidance` / `Pedagogical/Teaching Guidance` /
`Pedagogical / Teaching Guidance` on one item is drift, not signal. Check the
vocabulary's `avoid` list and collapse to the single canonical spelling.

But don't over-apply that instinct to a generic value plus a more specific
one on the same item (`Guidance` alongside `Pedagogical Guidance`) — that
*looks* like the same anti-pattern but corpus data shows it's a real,
frequent combination, not redundancy: roughly 40% of UK `Guidance` items
also carry `Pedagogical Guidance`/`Pedagogical/Teaching Guidance` (check the
vocabulary file's own note on the `Guidance` value). Decide by content, not
by a blanket "one value only" instinct — if the document is purely a
framing/evidence-summary piece, `Guidance` alone is correct; if it also sets
out concrete how-to-teach strategies or interventions, add the Pedagogical
Guidance value alongside it. The anti-pattern to avoid is two spellings of
the *same* concept together, not a generic classification plus a genuinely
distinct, more specific one.
