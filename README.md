# 🦆 Ornitorincii

An AI-powered Romanian football news aggregator that fetches articles from multiple RSS feeds, generates sarcastic fan-style analysis using Google Gemini, and automatically posts to Facebook.

Built as a personal learning project to practice and revisit React, TypeScript, Node.js, and third-party API integrations in a real-world context.

**Live:** [news-football-ai.vercel.app](https://news-football-ai.vercel.app)

---

## What it does

- Fetches football news twice a day (7:00 AM and 7:00 PM Romanian time) from ProSport, Digisport, and Sport.ro
- Filters out non-football articles using a keyword whitelist
- Generates AI analysis for each article using Google Gemini — written like a passionate fan at a bar, not a journalist
- Each analysis includes a stats/context section, an opinion, and a prediction
- Automatically posts the analysis to the Ornitorincii Facebook page
- Caches articles to a JSON file so data persists between server restarts

---

## Tech stack

| Layer           | Technology                           |
| --------------- | ------------------------------------ |
| Frontend        | React + TypeScript + Tailwind CSS v4 |
| Backend         | Node.js + Express + TypeScript       |
| AI              | Google Gemini 2.5 Flash              |
| RSS parsing     | rss-parser                           |
| Scheduling      | node-cron                            |
| Frontend deploy | Vercel                               |
| Backend deploy  | Render                               |
