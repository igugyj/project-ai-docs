/**
 * Thin DeepSeek Harness bundle adapter for project-ai-docs.
 *
 * The host-owned filesystem provider remains the discovery implementation.
 * This adapter points one isolated provider at this package's canonical
 * skills tree. It does not copy skill bodies, replace the native skill tool,
 * or add runtime authority.
 */

import { fileURLToPath } from "node:url";
import { apply as applyFilesystemProvider } from "@deepseek-ai/dsh-skill-filesystem";

const skillsRoot = fileURLToPath(new URL("../skills/", import.meta.url));

export const name = "project-ai-docs";
export const inject = ["skills"];

export function apply(ctx) {
  applyFilesystemProvider(ctx, {
    providerName: "project-ai-docs",
    includeDefaultRoots: false,
    bundledSkillDir: skillsRoot,
    watch: false,
  });
}