/**
 * Hello Command
 * A simple greeting command that demonstrates basic CLI functionality
 */
import { Command } from "commander";

export function createHelloCommand(): Command {
  return new Command("hello")
    .argument("<name>", "Name to greet")
    .description("Greet someone by name")
    .action((name: string) => {
      console.log(`hello ${name}`);
    });
}
