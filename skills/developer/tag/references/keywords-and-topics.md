# Keyword and Topics

The free-text dimension — not a controlled vocabulary like the others, so it
carries the most item-specific detail and the most variance between systems.
`Keyword` and `Topics` are two separate, sibling native keys in every
vocabulary file now — not two alternate conventions to pick between per
jurisdiction. Set both on every item (subject to each key's own legitimate
empty case below), the same way you'd set both Thematic Category and Use
Case Theme.

## Two conventions, now both present as separate keys everywhere

- **`Keyword` — several free keywords per item** (the UK convention: ~5 per
  item, Title Case noun phrases, e.g. `Inequality Symbols`, `Data Protection
  Officer`, `Partitioning`). This convention favours precision — many short,
  specific phrases that together pin down the item's exact topic.

  Whether it's populated at all is Content-Type-conditioned, not random —
  and the default guess is wrong: **`Keyword` is legitimately empty**, not
  under-tagged, on `Past Papers`, `Learning Objectives`, `National
  Curriculum`, and other pure curriculum-reference/spec/mark-scheme
  documents; it's populated (~5 values) mainly on
  `Guidance`/`Pedagogical Guidance`-family and worksheet-style content. Check
  which cluster this item's Content Type falls into *before* generating
  values — don't backfill 5–8 plausible-sounding keywords onto a test paper
  or spec document just because most items in the corpus have some. This
  correlation is real but coarse — it's conditioned on the *exact* Content
  Type value or combination (`Pedagogical Guidance` alone skews empty;
  `Guidance` paired with `Pedagogical/Teaching Guidance` skews populated),
  not on the general "is this a guidance-shaped document" impression, so
  treat it as the strongest available prior rather than a guarantee once
  you're looking at a specific, less-common Content Type combination.
- **`Topics` — exactly one controlled topic term per item** (the Australian
  convention, observed under the real field name `Topic`: a single term like
  `Place value`, `Text structure`, `Discrimination`, drawn from what
  functions as a controlled subject-topic taxonomy rather than free
  extraction). This convention favours a single best classification over an
  exhaustive list.


## Topics: a controlled thesaurus term, not a content summary

Topics reads like free text but behaves like a controlled subject-heading
vocabulary — cataloguers pick a broader curriculum/skill-level concept, not
a phrase describing what the specific item is about. Australia's
corpus-observed convention (real field name `Topic`, singular) is the model
every jurisdiction's `Topics` key follows, including where it's `inferred`:

| Narrower (item-specific) — avoid | Broader (thesaurus-style) — prefer |
|---|---|
| `Japanese vocabulary` | `Listening` |
| `Food gardens` | `Gardening` |
| `Phonics` | `Assessment for learning` |
| `Shopping` | `Data processing` |

When choosing a value for Topics, favour the more general, curriculum-
vocabulary-flavoured framing over a more specific paraphrase of the content.
A recurring real convention is `Specific term (Broader concept)` — e.g.
`Coordinates (Geometry)`, `Sequences (Number patterns)`, `Volume
(Dimensions)` — use that shape when the item is one instance of a named
curriculum concept.

**Don't lift the source page's own category/filter labels as if they were
Topic values.** Scraped resource content often carries the *hosting site's*
own taxonomy — a "Topic," "Category," or filter facet list baked into the
page markup — which is a different, unrelated vocabulary from the target
curriculum's controlled Topic field, even when it happens to reuse the same
word "Topic." Treat those labels as descriptive input to reason from, not as
candidate output values to copy — reasoning to a curriculum-shaped term per
the guidance above, from the page's actual subject matter, is the job; the
page's own site-navigation labels are not a shortcut past that.

**This dimension has a real ceiling where no literal Topic thesaurus is
shipped.** Australia's real Topic values are drawn from a controlled
schools subject-heading thesaurus, but no `vocabularies/*.json` file here
ships the actual `Topics` value list the way `Subject`/`Access Profile` are
shipped — the four narrower/broader pairs above are illustrative framing,
not a copyable list. Reasoning from first principles about the right
*scope* of term (per the guidance above) will still land on a plausible
term, but it won't reliably land on the *exact* controlled term a real
thesaurus would assign — treat this as a best-effort dimension with a lower
achievable accuracy than the controlled-vocabulary keys, not a sign the
approach is wrong.

## What makes a good Keyword or Topics value, regardless of count

- **Title Case**, short noun phrase, 1–4 words.
- **Specific to the item** — not a restatement of Subject, Content Type,
  or Thematic Category, which already capture the broad classification.
  Keywords should add the topic-level detail those controlled fields can't
  express (a KS2 maths worksheet already tagged `Subject: Mathematics` gets
  keywords like `Equality Symbols`, not `Mathematics` again).
- **Named and concrete**: named legislation (`Equality Act 2010`), named
  historical topics (`Anglo-Saxons`), named techniques (`Long
  Multiplication`) — the terms someone would actually search to find this
  exact item among thousands of similar ones.

## Tag hygiene, generalised across every dimension

The drift below shows up on controlled dimensions too, not only Keywords —
apply these habits to every tag you emit, not just this one:

- **One canonical casing.** The same conceptual value tends to accumulate
  case variants over a vocabulary's life (`Humanities and Social Sciences`
  vs `Humanities and social sciences`; `Education Objectives And Materials`
  vs `Education Objectives and Materials`). Use Title Case on every word,
  consistently, so you don't introduce a third variant into an
  already-drifted vocabulary.
- **Prefer the vocabulary's canonical spelling over a near-duplicate.**
  Wording drift accumulates as punctuation/spelling variants of the same
  concept (`Pedagogical Guidance` / `Pedagogical/Teaching Guidance`). Check
  each vocabulary file's `avoid` list first; where one exists, it names the
  exact variant to skip and the canonical form to use instead.
- **One tag per value, never comma-joined.** Emit `Resource Generation` and
  `Curriculum & Lesson Planning` as two separate tags on the same key, not
  one string `"Resource Generation, Curriculum & Lesson Planning"`.
- **Keep each value under its own key.** A value that belongs to one
  dimension occasionally gets typed under a different one (a Use Case value
  appearing under Phase). If a value you're about to emit doesn't look like
  it belongs to that key's own vocabulary, double-check which key it
  actually belongs to.
- **Sparse tagging tracks Content Type, not randomness.** Missing values
  on the Use Case or Thematic Category dimensions cluster on
  administrative/policy content, not on teaching resources — that's a real,
  legitimate pattern (see SKILL.md's Thematic Category/Use Case step, which
  links to `thematic-and-use-case.md`), not a gap to "fix" by forcing a
  value in.

If you have live access to the target system's existing tag data beyond
what's in a vocabulary file here, query it for near-matches to the value
you're about to mint and reuse the highest-usage existing spelling — every
new casing variant makes the vocabulary progressively harder to filter on
for everyone downstream.
