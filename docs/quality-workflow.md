# Quality Workflow

Use this workflow for agent-assisted changes:

```text
1. Technical Lead plans the task.
2. One implementer makes the smallest safe change.
3. Test Engineer validates or adds focused tests.
4. Security/Architecture/Dependency reviewer checks the risk area.
5. Quality Gatekeeper reviews the final diff.
6. Documentation and commit message are finalized.
```

Do not let the same role both implement and approve a risky change.
