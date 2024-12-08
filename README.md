# ai-cli

Ask AI in your terminal. Currently only supports Gemini by Google.

## Prerequisites

- Node.js v16+
- A valid Gemini API key

## Quick start

1. Install the npm package globally.

   ```
   npm i -g @kazuito/ai-cli
   ```

2. Add an environment variable `GEMINI_API_KEY` in your terminal configuration file (e.g. `.zshrc`, `.bashrc`).

   Example for `zsh`:

   ```
   # ~/.zshrc

   export GEMINI_API_KEY="your_api_key"
   ```

3. Run `ai-cli <prompt>` on your terminal to ask AI.

   ```
   $ ai-cli How to say 'Good morning' in Japanese
   The most common way to say "Good morning" in Japanese is **おはようございます (Ohayou gozaimasu)**.
   ```

## Tips

Add an alias to make it easy to run the command!

```
# ~/.zshrc

alias ai="ai-cli"
```

## License

This project is licensed under the MIT License.
