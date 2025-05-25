# 🎹 WEB VIRTUAL PIANO SITE
An *interactive*, responsive virtual piano built using *HTML, CSS, and JavaScript*. This project lets the user play the notes either by clicking on on-screen keys or by pressing key combinations on their keyboard. It also features light/dark mode, visual feedback, and user guides.

# 🚀 Features

🎼Piano Playback
Each piano key (A3 through G5) is clickable.
Keyboard support: Press combinations like A+3, C+5 to play respective notes.
Visual feedback with randomly colored key flashes on press.
Audio plays from local /sounds/ directory (.mp3 files).

🧭 Guided Instructions
"Quick Guide" shown alongside the piano to assist with controls.
Full guide section available via a toggle button.

🌗 Light / Dark Mode
Toggle between dark and light themes from the top-right button.
Mode switch updates the entire layout, including guide and piano.


# 🛠️ Project Structure   
CSOC'25/
├── index.html         # HTML structure of the piano app
├── style.css          # Styling for layout, keys, guides, dark mode
├── script.js          # Full interactive logic for piano, theme toggle
├── sounds/            # Folder containing note .mp3 files (e.g., a3.mp3)
└── README.md          # This file

# 🎹 Usage
🖱️ Mouse Interaction

Click on any key from A3 to G5 to hear a piano note.
Keys flash random colors when clicked for visual effect.

⌨️ Keyboard Interaction

Press two keys: a note letter (A-G) + an octave number (3-5) to trigger that note.
Example:

A + 3 → Plays A3
C + 5 → Plays C5
You can open the console to verify which key was triggered.

# 🎨 Theme Toggle
A toggle button in the top-right allows switching between:

🌞 Light Mode
🌙 Dark Mode

Both guides and piano respond to the theme change instantly.

# 🧠 Learnings & Concepts
1.DOM manipulation
2.Event handling (click, keydown, keyup)
3.Working with Set to track key combos
4.Dynamic styling with JS (style.backgroundColor)
5.Audio playback using Audio API
6.Theme toggling and dark-mode styling

