import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "AGENTS.md",
  "CLAUDE.md",
  ".github/copilot-instructions.md",
  "docs/agent-profiles.md",
  ".codex/config.toml",
  ".github/workflows/validate.yml",
  ".github/dependabot.yml"
];

const requiredDirs = [
  ".codex/prompts",
  ".github/instructions",
  ".github/prompts",
  ".claude/agents",
  ".claude/rules",
  ".claude/skills"
];

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

for (const file of requiredFiles) {
  if (!existsSync(path.join(root, file))) fail(`Missing required file: ${file}`);
}

for (const dir of requiredDirs) {
  if (!existsSync(path.join(root, dir))) fail(`Missing required directory: ${dir}`);
}

function list(dir, suffix) {
  const full = path.join(root, dir);
  if (!existsSync(full)) return [];
  return readdirSync(full).filter((name) => name.endsWith(suffix));
}

const copilotPrompts = list(".github/prompts", ".prompt.md");
if (copilotPrompts.length < 5) fail("Expected at least 5 Copilot prompt files.");

const copilotInstructions = list(".github/instructions", ".instructions.md");
if (copilotInstructions.length < 3) fail("Expected at least 3 Copilot instruction files.");

const claudeAgents = list(".claude/agents", ".md");
if (claudeAgents.length < 8) fail("Expected at least 8 Claude agent profiles.");

for (const name of claudeAgents) {
  const text = readFileSync(path.join(root, ".claude/agents", name), "utf8");
  if (!text.startsWith("---")) fail(`Claude agent missing frontmatter: ${name}`);
  if (!text.includes("name:")) fail(`Claude agent missing name: ${name}`);
  if (!text.includes("description:")) fail(`Claude agent missing description: ${name}`);
}

const agents = readFileSync(path.join(root, "AGENTS.md"), "utf8");
for (const phrase of ["Lazy Quality", "Dependency policy", "AI usage policy", "Source-of-truth"]) {
  if (!agents.includes(phrase)) fail(`AGENTS.md missing phrase: ${phrase}`);
}

if (!process.exitCode) {
  console.log("Agent skeleton validation passed.");
}
