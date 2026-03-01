# diffable-test

This repository exists as a **testing fixture** for [Diffable](https://github.com/alojzy231/diffable) — a structured code review platform for technical hiring.

## Purpose

The `main` → `dev` diff is intentionally crafted to showcase every diff action the Diffable UI supports:

| Diff type | File |
|---|---|
| Modified lines | `src/constants.ts` |
| Renamed props | `src/components/Button.tsx` |
| Deleted file | `src/components/Card.tsx` |
| Moved file | `src/components/utils/helpers.ts` → `src/utils/helpers.ts` |
| Changed imports & usage | `src/pages/index.tsx` |
| Long line (wrap toggle) | `src/constants.ts` — `LONG_DISCLAIMER` constant |

## Usage in Diffable

When creating a review in Diffable, use:

- **Repo URL:** `https://github.com/alojzy231/diffable-test`
- **Base branch:** `main`
- **Head branch:** `dev`
