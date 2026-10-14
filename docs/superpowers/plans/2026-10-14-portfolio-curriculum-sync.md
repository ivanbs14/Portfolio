# Portfolio Curriculum Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Synchronize the portfolio's professional profile, experience history, and technical skills with the approved Portuguese curriculum.

**Architecture:** Preserve the current data flow: English source data remains in `src/data/portfolio.ts`, Portuguese experience content remains aligned by array index in `src/components/portfolio/experience-timeline.tsx`, and localized profile copy remains in `src/components/portfolio/language-provider.tsx`. No component contracts or layout structures change.

**Tech Stack:** Next.js, React, TypeScript, ESLint

---

### Task 1: Update English profile and technical matrix

**Files:**
- Modify: `src/data/portfolio.ts`

- [x] **Step 1: Update technical skills**

Add `MongoDB` and `NoSQL` to Databases. Add `Azure`, `Automated Testing`, `Modular Architecture`, and `Code Review` to Cloud / DevOps while preserving its existing entries.

- [x] **Step 2: Update profile contact and summary**

Change the LinkedIn display value and URL to `linkedin.com/in/ivanbarbosa2` and `https://www.linkedin.com/in/ivanbarbosa2`. Replace the summary with concise English copy covering full-stack development, technical leadership, SQL/NoSQL databases, cloud, CI/CD, and generative AI.

- [x] **Step 3: Verify the data changes**

Run:

```bash
rtk rg -n "MongoDB|NoSQL|Azure|Automated Testing|Modular Architecture|Code Review|ivanbarbosa2" src/data/portfolio.ts
```

Expected: every new skill and both LinkedIn values are present.

### Task 2: Synchronize the English experience history

**Files:**
- Modify: `src/data/portfolio.ts`

- [x] **Step 1: Correct LongView dates and status**

Set the period to `[ Jun/2025 - Sep/2026 ]` and `isActive` to `false`.

- [x] **Step 2: Rewrite experience highlights**

Update each company's highlights to cover the facts assigned in the approved design, using concise English portfolio copy. Keep all four companies and the current object shape.

- [x] **Step 3: Verify no active or stale LongView entry remains**

Run:

```bash
rtk rg -n "Sep/2025|Sep/2026|isActive" src/data/portfolio.ts
```

Expected: LongView uses `Sep/2026`; no experience has `isActive: true`.

### Task 3: Synchronize Portuguese profile and experiences

**Files:**
- Modify: `src/components/portfolio/language-provider.tsx`
- Modify: `src/components/portfolio/experience-timeline.tsx`

- [x] **Step 1: Update the localized profile summary**

Replace `profile.summary` in both language dictionaries with semantically equivalent concise summaries covering full-stack engineering, technical leadership, SQL/NoSQL, cloud, CI/CD, and generative AI.

- [x] **Step 2: Update Portuguese experience data**

Set the LongView period to `[ Jun/2025 - Set/2026 ]` and rewrite every Portuguese highlight so it matches the facts represented in the corresponding English entry.

- [x] **Step 3: Check language alignment**

Run:

```bash
rtk rg -n "Set/2025|Set/2026|MongoDB|testes automatizados|arquitetura modular|code review" src/components/portfolio
```

Expected: `Set/2025` is absent; the updated date and competencies are present.

### Task 4: Validate the completed synchronization

**Files:**
- Verify: `src/data/portfolio.ts`
- Verify: `src/components/portfolio/language-provider.tsx`
- Verify: `src/components/portfolio/experience-timeline.tsx`

- [x] **Step 1: Run formatting integrity check**

Run `rtk git diff --check`.

Expected: no output and exit code 0.

- [x] **Step 2: Run lint**

Run `rtk npm run lint`.

Expected: no new diagnostics in the modified content. Record separately the known `react-hooks/set-state-in-effect` errors and `<img>` warning if still present.

- [x] **Step 3: Run the production build**

Run `rtk npm run build`.

Expected: successful Next.js production build.

- [x] **Step 4: Review scope**

Run:

```bash
rtk git diff -- src/data/portfolio.ts src/components/portfolio/language-provider.tsx src/components/portfolio/experience-timeline.tsx
```

Expected: only professional profile, experience, skills, and the previously approved resume-link update differ; projects, layout, metrics, and navigation are unchanged.

## Validation results

- `git diff --check`: passed.
- `npm run build`: passed, including TypeScript and static page generation.
- `npm run lint`: exited with code 1 because of two pre-existing `react-hooks/set-state-in-effect` errors in `hud-header.tsx` and `language-provider.tsx`, plus one pre-existing `<img>` warning in `hero-section.tsx`. The content synchronization introduced no new lint diagnostics.
- Independent code review: no critical or important issues; the implementation was assessed as ready after documenting the lint result.
