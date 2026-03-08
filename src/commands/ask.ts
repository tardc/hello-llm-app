/**
 * Ask Command
 * Integrates with OpenAI-compatible LLM APIs to answer questions
 */
import { Command } from "commander";
import OpenAI from "openai";

interface AskOptions {
  model: string;
  temperature: string;
  baseUrl?: string;
  apiKey?: string;
}

export function createAskCommand(): Command {
  return new Command("ask")
    .argument("<question>", "Question to ask the LLM")
    .option("-m, --model <model>", "Model to use", "gpt-3.5-turbo")
    .option("-t, --temperature <number>", "Temperature (0-2)", "0.7")
    .option("--base-url <url>", "API base URL (or use OPENAI_BASE_URL env var)")
    .option("--api-key <key>", "API key (or use OPENAI_API_KEY env var)")
    .description("Ask a question to an OpenAI-compatible LLM")
    .action(async (question: string, options: AskOptions) => {
      try {
        // Get API key from options or environment
        const apiKey = options.apiKey || process.env.OPENAI_API_KEY;

        if (!apiKey) {
          console.error(
            "Error: API key is required. Set OPENAI_API_KEY environment variable or use --api-key option."
          );
          process.exit(1);
        }

        // Configure OpenAI client
        const config: { apiKey: string; baseURL?: string } = { apiKey };
        const baseUrl = options.baseUrl || process.env.OPENAI_BASE_URL;
        if (baseUrl) {
          config.baseURL = baseUrl;
        }

        const client = new OpenAI(config);

        console.log(`\nAsking: ${question}\n`);
        console.log("Thinking...\n");

        // Make API request
        const response = await client.chat.completions.create({
          model: options.model,
          messages: [
            {
              role: "user",
              content: question,
            },
          ],
          temperature: parseFloat(options.temperature),
        });

        const answer = response.choices[0]?.message?.content;

        if (answer) {
          console.log("Answer:");
          console.log(answer);
          console.log();
        } else {
          console.error("No response received from the API");
        }
      } catch (error) {
        console.error("\nError occurred:");

        if (error instanceof OpenAI.APIError) {
          console.error(`API Error (${error.status}): ${error.message}`);
          if (error.status === 401) {
            console.error("\nPlease check your API key is valid.");
          }
        } else if (error instanceof Error) {
          console.error(error.message);

          if (error.message.includes("timeout") || error.message.includes("ECONNREFUSED")) {
            console.error("\nTips:");
            console.error("- Check your internet connection");
            console.error("- Verify the API endpoint is accessible");
            console.error("- Ensure your API key is valid");
          }
        } else {
          console.error("An unknown error occurred");
        }

        process.exit(1);
      }
    });
}
