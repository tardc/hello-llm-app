/**
 * Main Program Configuration
 * Defines the CLI structure and registers all commands
 */
import { Command } from "commander";
import { createHelloCommand } from "./commands/hello.js";
import { createAskCommand } from "./commands/ask.js";

export const program = new Command()
  .name("hello-cli")
  .description("A simple CLI tool with LLM integration")
  .version("1.0.0");

// Register commands
program.addCommand(createHelloCommand());
program.addCommand(createAskCommand());

