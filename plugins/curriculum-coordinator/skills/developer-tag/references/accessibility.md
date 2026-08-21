# Accessibility and Rights

## Accessibility — tag only what's verifiably present

Accessibility tags describe features **present in the resource itself**, not
aspirations. Only apply a value you can confirm from the content (captions
exist in the video file, alt text is present in the markup, a transcript
accompanies the audio). Don't tag accessibility features you're guessing at.

**The format/genre alone is not verification.** "This is a PDF" or "this is
a video" is not evidence that alt text, structural navigation, or hearing
independence is present — it's exactly the case that produces
`Generic`/`Unknown`, not a specific feature tag. If the only signal you have
is what kind of file this is, don't infer specific accessibility features
from that alone; that's guessing wearing the shape of verification. Concretely:
a PDF worksheet with figures does *not* get `Alternative text` just because
it contains images, and a document with section headings does *not* get
`Structural navigation` just because it's well-organised — both need an
actual statement or metadata field confirming the feature, not an inference
from "this kind of document usually has one."

Roughly ordered by how often each is actually present in a mature
accessibility vocabulary:

| Value | Meaning |
|---|---|
| `Device independence` | Usable without a specific input device (e.g. keyboard-only navigable) |
| `Hearing independence` | Doesn't require audio to understand (captions, transcript, or purely visual) |
| `Colour independence` | Doesn't rely on colour alone to convey meaning |
| `Captions` | Captions/subtitles present on video/audio |
| `Alternative text` | Alt text present for images |
| `High contrast display` | A high-contrast version/mode available |
| `Reading order` | Structured so a screen reader follows a sensible order |
| `Visual independence` | Doesn't require sight to understand (full audio description or equivalent) |
| `High contrast audio` | Audio mixed for clarity independent of background noise |
| `Audio description` | A spoken description track for visual content |
| `Large print` | A large-print version available |
| `Structural navigation` | Proper heading/structure markup for assistive navigation |

A large share of items simply have **no verified accessibility features** —
that's a legitimate, common state (tag as `Generic` or `Unknown`, matching
whatever your target system uses for "assessed and has none" vs. "not
assessed"; the Australian vocabulary's `Generic` is the former, `Unknown`
the latter).

**"No evidence either way" still resolves to a value, not an omitted key.**
Once the target vocabulary defines this key at all, an item with no
verifiable accessibility signal gets `Generic` or `Unknown` — never leave
`Accessibility` out of the output entirely. Omitting the key isn't a safer
or more honest version of "I don't know which of the two applies"; it's a
distinct, wrong answer that scores the same as guessing the wrong one of
the two.

**`Generic` vs. `Unknown` is close to a coin flip from the input alone, and
that's a property of the underlying cataloguing process, not a gap in your
reasoning.** Both mean "no accessibility feature is being claimed" — they
differ only in whether the source system's own cataloguer happened to record
an assessment, which the resource's title/description/page content can't
tell you either way. Don't adopt a fixed default in either direction; judge
each item on whatever weak signal it does have.

**One narrow, evidence-based exception to "don't infer from format alone":**
video/interactive content from a broadcaster or established publisher can
carry the same three-value profile — `Device independence`, `Hearing
independence`, `Colour independence` — as a standard captioned, responsive
web video package. This is not "it's a video/interactive item, therefore
check for this" — most video/interactive items don't qualify. It requires
one of these to appear **literally, in the content you were given**, not
inferred from genre:

- the word "captions" or "subtitles", describing *this* resource
- the word "transcript"
- the content names a specific broadcaster or established publisher (a real
  organisation name — the BBC, a named production company, a named
  publisher) as the source of *this* video/interactive item — "this is a
  video" or "this is interactive" alone is not a publisher signal
- an explicit "accessible version" / "described version" link or statement

A how-to video, a screen-recording walkthrough, a tutorial, or any other
video/interactive item that doesn't carry one of the four literal signals
above does **not** qualify, no matter how professionally produced it looks
or how plausible a caption seems — treat the absence of a literal match as
"the exception doesn't apply," not as a judgement call to weigh.

When this exception applies, emit **exactly** these three values, never a
fourth on top (e.g. don't add `Alternative text` just because the item also
has images — that needs its own separate, literal evidence, same rule as
above, and is checked independently of whether the triple fired). **Before
emitting, count the array: if this exception applied, it must contain
exactly 3 values — if you find 4, remove whichever one isn't
`Device independence`/`Hearing independence`/`Colour independence`, don't
rationalize keeping it.**
