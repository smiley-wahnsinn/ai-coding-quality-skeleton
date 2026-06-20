# AGENTS.md

This repository is optimized for high-quality AI-assisted software development across Codex, GitHub Copilot, Claude Code, and other coding agents.

## Rule priority

When rules conflict, follow this order:

1. Safety, security, and data-loss prevention.
2. User-facing data stability.
3. Smallest safe change.
4. Source-of-truth and non-redundant data.
5. Lib-first modularity and portability.
6. Human usability.
7. Tests, documentation, and clean commits.
8. Nice-to-have improvements.

## Working mode: Lazy Quality

- Make the smallest safe change that solves the requested problem.
- Do not rewrite, rename, restructure, reformat, or optimize unrelated code.
- Do not add dependencies unless the task explicitly requires it.
- Read existing code before editing.
- Follow existing patterns before inventing new ones.
- Keep diffs small and reviewable.
- Never claim success without validation.

## KISS and architecture

- Keep the architecture simple.
- Prefer data types and pure functions over classes.
- Use classes only when state, dependencies, or external systems must be encapsulated.
- Do not introduce abstract base classes unless there are at least two real implementations.
- Do not create generic managers, helpers, factories, or frameworks without concrete need.
- Do not distribute unclear boundaries into microservices.

## Lib-first modularity

- Build reusable library code first, then connect it to app runtimes.
- Any logic that can run without UI, Electron, server, database, or filesystem must live outside runtime-specific code.
- Reusable logic must not import from UI, Electron, server adapters, database drivers, or external tools.
- Runtime-specific code may orchestrate but must not own domain logic.
- Prefer pure functions for reusable logic.
- Use explicit public module exports. Avoid deep imports into internals.

## Portability and adapters

- The core must work across operating systems and runtime styles.
- External systems must be accessed through ports/interfaces or clearly named adapters.
- OS-specific code belongs only in adapters.
- Do not hardcode absolute paths, hostnames, ports, local IPs, or OS-specific separators.
- Do not scatter environment detection across the app.
- If a technical implementation may change later, hide it behind a small adapter boundary.

## Source-of-truth data rules

- Avoid redundant source data.
- Every important field has exactly one owner.
- Other objects reference owned data by ID.
- Generated manifests may duplicate values only as immutable snapshots.
- Do not copy prompt text, file paths, titles, or status fields into unrelated source objects.
- Do not change public JSON field names without an explicit migration task.

## Human usability

- Design workflows for tired humans, not only developers.
- Every screen or workflow must answer: what is this, what is missing, what can I do next?
- Prefer guided workflows over large configuration screens.
- Never show a disabled action without explaining why it is disabled.
- Technical details may exist, but they must not be the primary user experience.

## Dependency policy

- No dependency without proof.
- Prefer built-in platform APIs, language features, and existing utilities.
- Do not add convenience packages for tiny helpers.
- Do not update dependencies as part of unrelated tasks.
- Dependency additions, removals, and updates must be separate commits.
- Do not run broad update commands unless explicitly requested.
- Do not use forceful audit fixes without risk analysis.

## AI usage policy

- Deterministic code first.
- Use AI only for creative, linguistic, semantic, or ambiguous tasks.
- Do not use AI for validation, calculations, file existence, path logic, source-of-truth decisions, status, manifests, or database consistency.
- AI output is a suggestion, not truth.
- AI output must be validated before it is saved or used.

## Prompt clarity

- Prompts must be clear, structured, and minimal.
- One prompt has one main goal.
- Use goal, context, allowed scope, forbidden scope, acceptance criteria, validation, and output format.
- Do not include unnecessary project history.
- Do not mix technical implementation prompts with creative prompts.

## Testing and validation

- Run the narrowest useful validation after changes.
- Prefer typecheck, lint, unit tests, targeted integration tests, and build checks as appropriate.
- If a command is missing, say so.
- If a command fails, do not hide it.
- Do not introduce broad test infrastructure unless requested.

## Documentation and commits

- One task should result in one logical patch.
- Do not mix feature work, bug fixes, refactoring, formatting, documentation, and dependency updates.
- Update documentation when behavior, architecture, data structure, workflow, setup, or security posture changes.
- Use Conventional Commits.
- End every task with changed files, validation result, remaining risks, and suggested commit message.

## Output after work

Always summarize:

1. What changed.
2. Why it is the smallest safe change.
3. What was validated.
4. Remaining risks.
5. Suggested commit message.
