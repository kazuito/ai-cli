#!/usr/bin/env node

import { Command } from "commander";
import { askGemini } from "./models/gemini";

const cmd = new Command();

cmd.name("ai-cli").version("1.0.4");

cmd.arguments("[prompt...]").action(async (prompts: string[]) => {
  if (prompts.length === 0) {
    console.error("Please provide a prompt");
  } else {
    await askGemini(prompts.join(" "));
  }
});

cmd.parse(process.argv);
