# How to use

1. Extract this ZIP **into the repository root**, preserving the hidden `.github` and `.gitignore` files. **Review collisions before overwriting anything** if repo is not empty.
2. Open the whole folder in your coding agent.
3. Copy `PROMPT_FOR_AGENT_TH.md` into agent chat; it will first read all project documents and sources.
4. The agent writes the Vite/React/WebGL app and runs builds/tests. It can deploy to GitHub Pages after GitHub authentication + the Pages setting.
5. Keep `reference-private/` on your local computer only; do not upload it to a public repository. All release assets must be curated under `public/`.

**Note:** This is not a finished site; there is deliberately no `src/`, `index.html` or `package.json` yet, so it won't overwrite an existing app. A coding agent is instructed to construct or safely adapt those files. The included workflow will begin to pass only when the agent creates and commits the runnable Vite app with `package-lock.json`.

ภาษาไทย: อ่าน `SETUP_TH.md` เพื่อทำตามขั้นตอนตั้งแต่ Extract ถึง Deploy.
