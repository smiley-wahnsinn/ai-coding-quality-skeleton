# Agent Profiles

These neutral profiles are mirrored across tools where possible. Claude Code has native subagents. Codex and GitHub Copilot use prompt-profile equivalents.

| ID | Role | Purpose | May implement? |
|---|---|---|---:|
| `technical-lead` | Technical Lead | Splits ambiguous requests into small, safe, ordered tasks. Does not implement code by default. | no |
| `architecture-reviewer` | Architecture Reviewer | Reviews modularity, KISS, source-of-truth, ports, adapters, and boundary drift. Read-only by default. | no |
| `domain-data-architect` | Domain Data Architect | Reviews normalized data structures, ownership, IDs, schemas, and migration risk. Read-only by default. | no |
| `typescript-implementer` | TypeScript Implementer | Implements narrow TypeScript changes with strict typing and small diffs. | yes |
| `frontend-ux-engineer` | Frontend UX Engineer | Implements focused UI changes with human usability, clear status, and accessible workflows. | yes |
| `runtime-integration-engineer` | Runtime Integration Engineer | Implements safe runtime edges such as IPC, CLI, server handlers, adapters, and process launchers. | yes |
| `test-engineer` | Test Engineer | Adds or improves the narrowest useful tests and validation checks. | yes |
| `security-reviewer` | Security Reviewer | Reviews security posture, unsafe APIs, command execution, secret handling, and dependency risk. Read-only by default. | no |
| `dependency-auditor` | Dependency Auditor | Audits dependencies for necessity, runtime/dev placement, update risk, and unused packages. Read-only by default. | no |
| `python-tools-engineer` | Python Tools Engineer | Implements Python only where it is stronger or unavoidable, as a tool/adapter layer. | yes |
| `ci-release-engineer` | CI Release Engineer | Maintains validation scripts, CI, release notes, and packaging checks. | yes |
| `docs-curator` | Docs Curator | Keeps architecture notes, README, changelog, and workflow docs accurate. | yes |
| `performance-profiler` | Performance Profiler | Reviews bottlenecks, concurrency, expensive operations, and scaling risks. Read-only by default. | no |
| `quality-gatekeeper` | Quality Gatekeeper | Final reviewer before commit or release. Checks scope, validation, risk, docs, and commit message. Read-only. | no |


## Recommended handoff

```text
technical-lead
→ exactly one implementer
→ test-engineer
→ focused reviewer
→ quality-gatekeeper
```

## Rule

Reviewer roles should not implement changes unless explicitly asked. Implementer roles should not self-approve risky changes.
