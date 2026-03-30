# Cat Lab

A warm, playful cat-themed web app built with React, Vite, and Tailwind CSS.

## Features

- **Home** — Hero section with feature overview
- **Cat Gallery** — Live cat photos from [The Cat API](https://thecatapi.com), 12 at a time with Load More
- **Name This Cat** — AI-powered cat naming using Claude Haiku vision (Anthropic API)
- **Favourites** — Heart cats to save them in browser localStorage
- **Cat History** — Visual timeline of 10,000 years of cat-human history

## Tech Stack

- React 19 + Vite 8
- React Router v7
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- Anthropic Claude API (`claude-haiku-4-5-20251001`)
- The Cat API (unauthenticated or with free key)

## Running Locally

```bash
npm install
npm run dev
```

App runs at http://localhost:5173

## Environment Variables

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|---|---|---|
| `VITE_ANTHROPIC_API_KEY` | For AI naming | Get at [console.anthropic.com](https://console.anthropic.com/) |
| `VITE_CAT_API_KEY` | Optional | Get at [thecatapi.com](https://thecatapi.com) for higher rate limits |

> **Security warning:** This is a frontend-only app, so API keys are included in the browser bundle. For production, proxy the Anthropic API through a backend server so the key is never exposed to the client.

## Project Structure

```
src/
  components/
    CatCard.jsx        # Cat photo card with heart + AI naming
    FeatureCard.jsx    # Feature overview card for home page
    Navbar.jsx         # Sticky nav with mobile hamburger
    TimelineEvent.jsx  # Single event node for history timeline
  hooks/
    useFavourites.js   # localStorage-backed favourites state
  pages/
    Home.jsx           # Landing page with hero + features
    History.jsx        # Visual cat history timeline
    Gallery.jsx        # Live cat photo grid
    Favourites.jsx     # Saved cats view
  App.jsx              # Router and layout shell
  main.jsx             # React entry point
  index.css            # Tailwind v4 import + base styles
```

## Build

```bash
npm run build
```

Output goes to `dist/`.
