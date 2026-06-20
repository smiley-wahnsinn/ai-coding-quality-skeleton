# Architecture Principles

## Core idea

The application core must stay reusable, deterministic, and runtime-independent.

## Layers

```text
UI / CLI / Server / Worker
  → runtime composition
  → adapters
  → use cases
  → domain / validation / pure logic
```

## Rules

- Core logic does not know how it is executed.
- Runtime-specific code lives at the edges.
- Adapters hide databases, filesystems, APIs, CLIs, GPU tools, and OS details.
- Generated files are snapshots, not source of truth.
- Avoid early microservices. Start with modular code and typed jobs.
