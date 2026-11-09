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

- `/`: Choose a service screen from Figma node `7:114`.
- `/components`: All eight components and their variants from Figma Components, node `3:25`.
- `/repair`: The original Flat tyre repair booking card, Frame 47, node `4:6`.

Components live in `src/components/`, with shared styles in `components.css` and
design values in `src/styles/tokens.css`. Each interactive component exposes native
React event props. The overview demonstrates selection, disabled states, editable
inputs and action callbacks; it does not submit a real booking.

The service screen starts with Flat tyre repair selected. Select any card with
the mouse or keyboard. Continue reports the chosen service and exposes an
`onContinue(service)` callback for the next booking step. The back arrow opens
the component overview. No booking backend or additional screens are included.

## What is in this repo

| File | What it is for |
|---|---|
| `AGENTS.md` | The rules Codex and Claude read before every task. |
| `LOG.md` | Your process log for the assignment. Fill it in while you work. |
| `REFLECTION.md` | Your reflection for the assignment. |
| `src/` | The app. Tokens go in `src/styles/tokens.css`, components in `src/components/`. |

## Keep this repo public and clean

Anyone can read this repo. Never commit passwords, API keys or `.env` files.
