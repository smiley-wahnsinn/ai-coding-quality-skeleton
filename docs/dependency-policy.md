# Dependency Policy

## Principle

A dependency is a long-term obligation, not a quick trick.

## Dependency gate

Before adding a dependency, answer:

1. What exact problem does it solve?
2. Where will it be used?
3. Is it runtime or dev-only?
4. Can built-in APIs or existing code solve this simply?
5. How many lines of local code would the alternative need?
6. Does it bring transitive dependencies?
7. Does it affect build, bundle size, packaging, or security?
8. What is the rollback plan?

If the answer is unclear, do not add the dependency.
