# Spoke

The build of Spoke, a bike repair booking app. You design in Figma, Codex builds from your frames, and you check the result.

## Start the app

Open this folder in a terminal (in GitHub Desktop: Repository, Open in Terminal) and run:

```
npm install
npm run dev
```

The app runs at http://localhost:5173. Stop it with Ctrl+C.

## Component previews

- `/`: All eight components and their variants from Figma Components, node `3:25`.
- `/repair`: The original Flat tyre repair booking card, Frame 47, node `4:6`.

Components live in `src/components/`, with shared styles in `components.css` and
design values in `src/styles/tokens.css`. Each interactive component exposes native
React event props. The overview demonstrates selection, disabled states, editable
inputs and action callbacks; it does not submit a real booking.

## What is in this repo

| File | What it is for |
|---|---|
| `AGENTS.md` | The rules Codex and Claude read before every task. |
| `LOG.md` | Your process log for the assignment. Fill it in while you work. |
| `REFLECTION.md` | Your reflection for the assignment. |
| `src/` | The app. Tokens go in `src/styles/tokens.css`, components in `src/components/`. |

## Keep this repo public and clean

Anyone can read this repo. Never commit passwords, API keys or `.env` files.
