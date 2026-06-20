# AI Coding Quality Skeleton

A neutral GitHub repository skeleton for high-quality software work with Codex, GitHub Copilot, and Claude Code.

It defines one shared engineering constitution and translates it into tool-specific formats:

- `AGENTS.md` for shared coding-agent rules and Codex-compatible guidance.
- `.github/copilot-instructions.md`, `.github/instructions/*`, and `.github/prompts/*` for GitHub Copilot.
- `CLAUDE.md`, `.claude/rules/*`, `.claude/skills/*`, and `.claude/agents/*` for Claude Code.
- `.codex/prompts/*` for strict task prompts usable with Codex.

Website: [matschewski.de](https://www.matschewski.de)

## Goals

- Small, focused, reviewable changes.
- KISS before architecture ego.
- Lib-first modularity.
- Clear source-of-truth ownership.
- No unnecessary dependencies.
- Deterministic code before AI.
- Human-readable UI and workflows.
- Security and portability by default.
- Clean commits and documentation.

## Repository layout

```text
.
├─ AGENTS.md
├─ CLAUDE.md
├─ docs/
│  ├─ agent-profiles.md
│  ├─ architecture-principles.md
│  ├─ dependency-policy.md
│  ├─ prompt-guidelines.md
│  └─ quality-workflow.md
├─ .codex/
│  ├─ config.toml
│  └─ prompts/
├─ .github/
│  ├─ copilot-instructions.md
│  ├─ instructions/
│  ├─ prompts/
│  ├─ workflows/
│  └─ dependabot.yml
├─ .claude/
│  ├─ agents/
│  ├─ rules/
│  ├─ skills/
│  └─ settings.json
└─ tools/node/
   └─ validate-agent-skeleton.mjs
```

## Use this skeleton

1. Copy these files into a new project or use this folder as a template repository.
2. Replace the placeholder project name in `package.json` if needed.
3. Keep `AGENTS.md` as the shared source of truth for agent behavior.
4. Only specialize path-specific instructions when the actual project requires it.
5. Run validation:

```bash
npm run validate
```

## Tool mapping

| Concept | Codex | GitHub Copilot | Claude Code |
|---|---|---|---|
| Shared rules | `AGENTS.md` | summarized in `.github/copilot-instructions.md` | imported by `CLAUDE.md` |
| Task prompts | `.codex/prompts/*.md` | `.github/prompts/*.prompt.md` | `.claude/skills/*/SKILL.md` |
| Agent profiles | prompt roles | prompt files | `.claude/agents/*.md` |
| Path rules | nested `AGENTS.md` if needed | `.github/instructions/*.instructions.md` | `.claude/rules/*.md` |

## Important rule

Do not let agents improve everything at once.

Use this order:

```text
Plan → small implementation → tests → review → docs → commit
```

