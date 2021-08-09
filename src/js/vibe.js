//!Array of messages to dynamically render

const vibes = [
  "... and wonderful",
  "... and clean",
  "... and simple",
  "... and so are  otters 🦦"
];

const emojis = [
  "♥️",
  "💔",
  "💗",
  "💕"
];

//! random index generator using math.random * array length vibe[randomNumber]

let vibe = vibes[Math.floor(Math.random() * vibes.length)];
console.log(vibe)

document.querySelector(".vibe").append(vibe);

let emoji = emojis[Math.floor(Math.random() * emojis.length)];

document.querySelector(".love").append(emoji);