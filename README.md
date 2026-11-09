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
- `/pick-slot`: Pick a drop-off time screen from Figma node `7:121`.
- `/confirm`: Check and confirm screen from Figma node `7:128`.
- `/components`: All eight components and their variants from Figma Components, node `3:25`.
- `/repair`: The original Flat tyre repair booking card, Frame 47, node `4:6`.

Components live in `src/components/`, with shared styles in `components.css` and
design values in `src/styles/tokens.css`. Each interactive component exposes native
React event props. The overview demonstrates selection, disabled states, editable
inputs and action callbacks; it does not submit a real booking.

The service screen starts with Flat tyre repair selected. Select any card with
the mouse or keyboard. Continue opens the slot screen with the selected service
and duration. Back and browser history retain the selections during the current
visit. The slot screen defaults to Today at 16:30; 09:00 and 10:30 are disabled
as shown in Figma. Day labels and availability are static design data.

Continue on the slot screen opens the confirmation screen with the chosen service,
day, time and price. The confirmation form requires a name and valid phone number.
Contact details remain in memory while moving between booking steps and are cleared
by a reload. `onConfirm(details)` exposes the checked booking data for integration.
There is no booking backend: submitting validates the details locally and explicitly
reports that no booking has been sent.

## What is in this repo

| File | What it is for |
|---|---|
| `AGENTS.md` | The rules Codex and Claude read before every task. |
| `LOG.md` | Your process log for the assignment. Fill it in while you work. |
| `REFLECTION.md` | Your reflection for the assignment. |
| `src/` | The app. Tokens go in `src/styles/tokens.css`, components in `src/components/`. |

## Keep this repo public and clean

Anyone can read this repo. Never commit passwords, API keys or `.env` files.
