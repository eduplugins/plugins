# Phase / Level / Grade

The age/stage-band dimension. Every curriculum has one; none of them use the
same units or even the same number of bands, and real content often spans a
range rather than a single band — tag the full range rather than picking one
value arbitrarily.

## Terminology and bands by curriculum

A curriculum outside these three will have its own term and band structure
again — find it in that curriculum's own materials rather than assuming it
maps onto one of these three shapes. Whatever native term that curriculum
uses, store it under `Stage / Level` (and its broader band under `School
Phase`) rather than inventing a new key name for it — the goal is one
consistent pair of keys across every jurisdiction, holding jurisdiction-
specific values.

## Cross-curriculum equivalence (rough — ages, not standards content)

The age-band mapping is recorded as
`notes` on each `Stage / Level` value in the vocabulary files themselves rather than
duplicated here — check a value's `notes` for its approximate age and
cross-curriculum equivalents. Treat it as a rough age-band equivalence, not a
claim that the standards themselves align — a UK KS2 maths objective and a US
Grade 4 maths standard cover the same age group but not necessarily the same
content.

## Multi-valued ranges are normal

Real content frequently targets a range rather than one band — e.g. a single
Australian resource tagged `Years 9, 10` or `Foundation, Year 1, Year 2`, or
UK content spanning `Key Stage 3` and `Key Stage 4`. Tag every band the
content actually targets rather than collapsing to one value.

## The "non-specific" value is correct, not a gap

Content that genuinely isn't phase-specific (whole-school policy, a
cross-phase pedagogical framework) should get an explicit non-specific value
in whichever curriculum's terms you're using (e.g. UK's `Non-Specific/All`),
not an omitted tag, whenever that curriculum's vocabulary defines one. An
empty Phase/Level/Grade field usually signals incomplete tagging, not a
deliberate choice — don't reach for "leave it blank" as your default move.

This cuts the other way for UK Phase specifically: whole-school evidence
reviews and inspection-style reports often warrant `Non-Specific/All` even
when their own text mentions "primary and secondary schools" by name,
because the report's intent is to apply broadly across phases rather than
being restricted to the phases it happens to namecheck. Don't take a phase
mention in the description as scoping evidence for this kind of content.

Treat this as a decision procedure keyed on Content Type, not a
free-floating judgement call — Content Type is the reliable signal here,
phase mentions in the body text are not:

1. Is Content Type `Guidance`, `Pedagogical Guidance`, or
   `Pedagogical/Teaching Guidance`, **and** is the document EEF-/Ofsted-style
   (a whole-school evidence review or inspection framework, not content
   aimed at delivering a lesson)? → default to `Non-Specific/All`, even if
   the text namechecks "primary and secondary."
2. Only deviate from that default when the document is scoped to one phase
   in its own title or stated purpose (e.g. "A Guide to Early Years
   Assessment") — not merely because one phase's examples happen to
   dominate the body text.
3. Outside that Content Type cluster, phase mentions in the text *are* the
   scoping signal as normal — this exception is narrow, not a general
   licence to reach for `Non-Specific/All` whenever a document mentions more
   than one phase.
