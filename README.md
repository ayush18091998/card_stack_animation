# 🗣️  Card Stack Section

A responsive React implementation of  “Speak Tutor” section, featuring a sticky scroll card stack effect and clean UI.

---

## ⚙️ Tech Stack

- **React (Vite or CRA)** — component-based structure
- **CSS3 / Flexbox / Media Queries** — layout and responsiveness
- **HTML5 Video** — for embedded looping previews
- **JavaScript (ES6+)** — logic and variable injection
- **No animation libraries** — all effects achieved using pure CSS

---

## 🚀 Project Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/ayush18091998/card_stack_animation.git
   cd speak-tutor-clone
   git checkout feature/cards_scroll_animation
   npm install
   npm start
   ```

## 🧩 Component Structure

```plaintext
src/
├── App.tsx              # Main layout with title, description, CardStack, and footer
├── App.css              # Global styles and section layout
├── components/
│   └── cardStack/
│       ├── CardStack.js   # Renders stacked cards with sticky scroll behavior
│       ├── CardStack.css  # Handles stacking logic and sticky positioning
│       ├── Card.js        # Displays title, description, and video
│       ├── Card.css       # Card visuals and responsive layout
│       └── CardData.js    # Static array of card data
```

### Structure Summary

- **App.tsx** → Main layout for the Speak Tutor section (header → cards → footer)
- **CardStack** → Manages z-index and scroll stacking logic
- **Card** → Defines the card UI (title, description, and video)
- **CardData** → Holds static content for cards


##  Responsiveness & Layout Behavior

### Responsive Design

Responsiveness is achieved through a combination of:

- **CSS media queries** (`@media (max-width: 900px)`)
- **Flexible sizing units** (`vw`, `vh`, `rem`)
- **Fluid typography and container widths**

#### Key Behavior

- **Large screens**
    - Cards are displayed side-by-side with sticky scroll behavior.
- **Small screens (<900px)**
    - Cards stack vertically.
    - Font sizes and paddings adjust using `rem` and `vw` units.
---

## 🌀 Scroll Animation (Sticky Stack)

Implemented using **pure CSS** — no JavaScript animations.

Each `.card-container` uses:

```css
position: sticky;
bottom: -400px;
```


## License
MIT © 2025 — Free for educational and personal use.