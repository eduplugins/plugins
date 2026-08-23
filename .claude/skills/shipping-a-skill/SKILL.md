---
name: shipping-a-skill
version: 1.0.0
released: 2026-08-23
description: >
  Writes and ships a skill in this repo end to end — slug and category,
  frontmatter and description, body craft, evidence base, plugins.json
  registration, and the generated-output rebuild. Use when adding a skill
  under skills/, revising an existing one, editing a skill in .claude/, or
  porting a skill in from another project.
---

# Shipping a skill

A skill here is not done when `SKILL.md` reads well. It is **shipped** when it is
**installable** (a `plugins.json` entry points at it), **grounded** (an evidence
base the body actually uses), and **green** (`plugins:check` passes on committed
generated output). Short of all three, it is a draft.

This file is the pipeline. The craft beneath it — the levers that make a skill
**predictable** — is disclosed to [`CRAFT.md`](CRAFT.md), with its full domain
model in [`GLOSSARY.md`](GLOSSARY.md). Each step below names the section to read
when that principle bites; read the named section rather than the whole file.

## Two kinds of skill live here

The pipeline forks at the first step, and the fork governs everything after it:

- **Published** — `skills/<category>/<name>/`, generated out into `plugins/` and
  installed by educators. Always **model-invoked**: an educator installing a
  plugin never types a skill name, so a skill the agent cannot reach is a skill
  nobody uses. Steps 1–7 all apply.
- **Repo tooling** — `.claude/skills/<name>/`, for building this repo. No
  evidence base, no registration, no build. Steps 2, 3 and 7 only, and the
  invocation choice is live — see _Invocation_ in `CRAFT.md`.

## What this skill needs

Read these from the repo rather than recalling them:

- **Schema** — `docs/data-model.md` for the frontmatter fields and what the build
  validates.
- **House style** — two or three sibling skills in the target category. They are
  the source of truth for section shape, voice, and the `keywords` vocabulary.
  Reuse existing keyword values; a one-off value fragments the catalog taxonomy.
- **Evidence conventions** — `docs/evidence/README.md` plus one worked file.
- **Bundles** — `plugins.json`, for which educator roles exist and what each
  already carries.

Ask the user only for what the repo cannot answer: the educator role and moment
this serves, the pedagogical claim behind it, and any sources they already hold.

## Steps

### 1. Fix the slug

The slug is `<category>/<name>`, and the folder is `skills/<category>/<name>/`.
Categories in use: `assessment`, `communication`, `differentiation`, `inquiry`,
`planning`, `developer`. Reach for an existing one; a new category costs every
consumer a new heading in the catalog, so it earns its place only when no
existing category holds the skill without stretching.

Before committing to a new folder, read every skill in the category and settle
whether this is a new skill or an edit to one that exists. Two skills with
adjacent descriptions compete for the same trigger and both fire unreliably.
`CRAFT.md` → _When to split_ gives the two cuts that justify a separate skill;
absent one of them, revise the existing skill instead.

**Done when:** slug chosen, and every existing skill in the category has been
read closely enough to rule out overlap.

### 2. Write the frontmatter

```yaml
---
name: <name>            # the folder name, not the display name
version: 1.0.0
released: YYYY-MM-DD    # today, on every substantive revision
description: >
  What it produces, the constraint that makes it trustworthy, and the
  trigger phrasing.
keywords:
  content-type: <reuse a sibling's value>
  use-case:
    - <reuse a sibling's value>
  keyword:
    - <3–5 discovery terms>
references:
  - "<Author, publication or issuing body>"
---
```

The `description` is the whole of the invocation surface and the only part
always loaded, so it earns harder pruning than anything else — `CRAFT.md` →
_Writing the description_ for how to prune it, and _Leading words_ for the
vocabulary to front-load. Word it with the terms a teacher actually uses when
they want this skill; that shared language is what makes it fire.

`version` and `released` move together. Bump the minor version for a behaviour
change, the patch for wording, and set `released` to the date of the edit.

**Done when:** each trigger in the description names a distinct **branch**, and
every `keywords` value either matches a sibling's or is a deliberate addition to
the taxonomy.

### 3. Write the body

`CRAFT.md` governs the body: _Information hierarchy_ for what sits in `SKILL.md`
versus a disclosed file, _Pruning_ for what to cut, _Leading words_ for what to
collapse. Work through it before writing prose, and again before calling the
body done.

Two repo-specific constraints sit on top of it:

**Name the source, never the content.** Where a skill needs curriculum content,
achievement descriptors, or standards, it states what it needs and instructs the
agent to fetch it — from whichever curriculum lookup is available in the session,
falling back to asking the teacher to paste it. It reuses content already
established earlier in the conversation rather than re-fetching, and it grounds
every descriptor it writes in what was fetched.
`skills/assessment/rubric-builder` is the reference implementation.

**Leave the judgement with the teacher.** Achievement levels, grades, and
diagnostic calls come from the teacher; the skill drafts around them. Output is a
draft for review.

**Done when:** every external input the skill depends on has a stated source and
a stated fallback, and each step in the body ends on a **completion criterion**
that is checkable.

### 4. Ground it

An "Evidence base" section in the body cites the research or authoritative
guidance behind the skill's approach, and `references` lists the same sources —
one claim written twice, so they move together.

Prefer Australian sources where a solid one exists (AITSL, ACARA, NESA, state
DoE/CESE, AERO); fall back to established international research (Hattie,
Rosenshine, EEF) and label it as such. Where the research qualifies the approach,
put that in a "Gotchas" section rather than burying it — a skill that names its
own limits is more useful than one that oversells.

Add the matching file under `docs/evidence/` and index it in that folder's README.

If porting from another project: check the licence, and name the original source
and licence in the body. Attribution stays.

**Done when:** every entry in `references` is load-bearing in the body, and no
claim in the body rests on a source absent from `references`.

### 5. Register it

Add the slug to at least one `plugins.json` entry. A skill absent from every
bundle is installable by nobody — the most common way a skill stalls at draft.

Choose bundles by the role that would reach for it, and say out loud which roles
you considered and rejected, so the user can correct the call.

**Done when:** the slug appears in every bundle whose role would plausibly use
it, and the user has confirmed the placement.

### 6. Build and verify

```
pnpm run plugins:build
pnpm run plugins:check
```

`plugins/` and `.claude-plugin/marketplace.json` are generated. Edit the sources
and rebuild; the next build overwrites anything typed into the output.

**Done when:** `plugins:check` exits clean and the regenerated output is staged
alongside the source edits.

### 7. Open the PR

Everything lands on `main` via PR, and `plugins-check` gates the merge. The PR
body states what the skill does, which bundles it joined, and what the evidence
base rests on.

## Failure modes

Diagnostics for a skill behaving badly. The craft failures — **premature
completion**, **duplication**, **sediment**, **sprawl**, **no-op**, **negation**
— are in `CRAFT.md` → _Failure modes_, each with its cure. These are the ones
particular to this repo:

- **Orphan** — `SKILL.md` written, no `plugins.json` entry. Passes CI, installs
  for nobody. Step 5 exists for this.
- **Drift** — sources edited, `plugins:build` skipped, generated output stale. CI
  catches it; catch it first.
- **Overwritten edit** — a change made directly in `plugins/` or
  `marketplace.json`, gone at the next build.
- **Recalled curriculum** — a skill that lets the agent produce curriculum codes
  or achievement descriptors from memory. The codes look right and are wrong,
  which is worse than absent.
- **Decorative references** — sources listed in frontmatter that the body never
  leans on. Evidence backing is a load-bearing claim, not a credential.
- **Category creep** — a new category added for one skill, leaving a category of
  one and a catalog heading that earns nothing.
  