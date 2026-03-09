#!/usr/bin/env node
/**
 * CLI Entry Point
 * Loads environment variables and starts the CLI program
 */
import "dotenv/config";
import { program } from "./index.js";

program.parse();
