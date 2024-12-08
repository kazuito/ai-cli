# ai-cli

Ask AI in your terminal. Currently only supports Gemini by Google.

## Quick start

1. Install the npm package globally.

   ```
   npm i -g @kazuito/ai-cli
   ```

2. Add an environment variable `GEMINI_API_KEY` in your terminal config file.

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
