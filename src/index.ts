#!/usr/bin/env node

import { Command } from "commander";
import { askGemini } from "./models/gemini";

const cmd = new Command();

cmd.name("ai-cli").version("0.0.1");

cmd.action(() => {
  console.log("Welcome to AI CLI");
});

cmd.arguments("[question...]").action(async (q: string[]) => {
  if (q.length === 0) {
    console.error("Please provide a question");
  } else {
    await askGemini(q.join(" "));
  }
});

cmd.parse(process.argv);
