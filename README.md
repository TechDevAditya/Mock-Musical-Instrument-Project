# 🎹 Web Virtual Piano Site

An **interactive**, responsive virtual piano built using **HTML, CSS, and JavaScript**.  
Users can play notes either by **clicking piano keys** on screen or by pressing **keyboard key combinations**.  
The project also features light/dark mode, dynamic key visual feedback, and comprehensive usage guides.

---

## 🚀 Features

### 🎼 Piano Playback
- Each piano key (`A3` through `G5`) is clickable.
- Keyboard support: Press combinations like `A+3`, `C+5` to play respective notes.
- Visual feedback: keys flash with a random color when pressed.
- Audio playback from the local `/sounds/` directory (with `.mp3` files).

### 🧭 Guided Instructions
- 📌 **Quick Guide** displayed beside the piano for basic usage.
- 📖 **Full Guide** section accessible via toggle.

### 🌗 Light / Dark Mode
- Switch between light and dark themes using a toggle button in the top-right.
- Both guides and the piano layout update with the selected mode.

---

## 🎹 Usage

### 🖱️ Mouse Interaction
- Click any key from `A3` to `G5` to hear the note.
- The key will flash a random color as feedback.

### ⌨️ Keyboard Interaction
- Press a **letter** (`A-G`) + an **octave number** (`3-5`) to trigger that note.
  
  **Examples:**
  - `A + 3` → Plays `A3`
  - `C + 5` → Plays `C5`

- Open your browser's **console** to see the triggered note logs.

---

## 🎨 Theme Toggle

- 🌞 Light Mode  
- 🌙 Dark Mode  

Toggle from the top-right of the page.  
Guides and piano UI update based on the selected mode.

---

## 🧠 Learnings & Concepts

1. DOM manipulation
2. Event handling (`click`, `keydown`, `keyup`)
3. Using `Set` to track key combinations
4. Dynamic styling via JavaScript
5. Audio playback using the `Audio` API
6. Theme toggling and dark mode integration

---

