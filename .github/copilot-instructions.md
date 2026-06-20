# GitHub Copilot Repository Instructions

Follow this repository's shared engineering rules in `AGENTS.md`.

## Core behavior

- Make the smallest safe change.
- Read existing code before editing.
- Do not change unrelated code.
- Do not add dependencies unless explicitly required.
- Keep business logic out of UI components.
- Prefer deterministic code over AI for validation, calculations, paths, manifests, and status.
- Preserve source-of-truth ownership and avoid redundant data.
- End with changed files, validation, risks, and a Conventional Commit suggestion.

## When using prompt files

Use `.github/prompts/*.prompt.md` for role-based tasks such as planning, implementing, reviewing, testing, dependency decisions, and quality gates.

## Safety

Never weaken security settings or run broad destructive commands. If the task requires risk, explain it first.
