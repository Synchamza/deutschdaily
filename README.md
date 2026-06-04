# Deutsch Daily

A dark-themed, goal-based English ↔ German flashcard app with daily targets, streaks, progress forecasting, and weak-word tracking.

## Features

- **5 levels** — A1 through C1 sentence packs
- **3 practice modes** — English → German, German → English, Type German (quiz)
- **Daily goal** — Set 10 / 20 / 30 sentences per day
- **Streak tracking** — Keeps your daily streak alive
- **Weak words** — Words you struggle with are flagged and tracked
- **Progress forecast** — Estimates how many days to finish each level pack
- **German audio** — Text-to-speech playback using the Web Speech API
- **Grammar notes** — Every card explains the grammar rule behind the sentence
- **Keyboard shortcuts** — `Space` reveal/next · `K` knew it · `R` review · `S` speak

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Reveal card / go to next |
| `K` | Mark as "I Knew It" |
| `R` | Mark for Review |
| `S` | Play German audio |

## Getting Started


## How It Works

- Progress is saved to **localStorage** — no account needed
- Each time you mark a card as "I Knew It", your learned count goes up
- Marking "Review" adds the card's weak words to your weak-word list
- The forecast panel calculates finish dates based on your daily goal pace
- Quiz mode requires an exact match (case-insensitive, punctuation ignored)

## Sentence Packs

| Level | Focus | Cards in pack |
|-------|-------|--------------|
| A1 | Basics, Daily life | 300 |
| A2 | Plans, Travel, Work | 500 |
| B1 | Opinion, Reason, Advice | 700 |
| B2 | Formal, Argument, News | 850 |
| C1 | Analysis, Debate, Advanced | 1000 |

## Open Source

Sentence packs are designed to be easy to extend. Add new entries to the `sentences` array in `app.js` following this format:

