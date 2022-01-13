import React, { useState } from "react";
import "./styles.css";

let emojiDatabase = {
  "😃": "Grinning Face with Big Eyes",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling Face with Smiling Eyes",
  "😐": "Neutral Face",
  "😭": "Loudly Crying Face",
  "❤️": "Red heart",
  "😛": "Face with Tongue",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat"
};

let emojisWeKnow = Object.keys(emojiDatabase);

export default function App() {
  let [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    let userInput = event.target.value;

    let meaning = emojiDatabase[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we dont have it in our database";
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    let meaning = emojiDatabase[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div class="flex-wrap">
        <h2>Emoji Finder </h2>
        <main>
          <input placeholder="Paste your emoji here" onChange={inputHandler} />
          <div className="emojis">Click on the emojis to know them ⬇️</div>
          <div>{meaning}</div>
          {emojisWeKnow.map(function (emoji) {
            return (
              <span onClick={() => clickHandler(emoji)} key={emoji}>
                {" "}
                {emoji}{" "}
              </span>
            );
          })}
        </main>
        <footer class="footer">
          <div class="footer-header">SOCIAL MEDIA</div>
          <ul class="link social-handles list-non-bullet">
            <li class="list-item-inline">
              <a
                class="link social-handles"
                href="https://github.com/zabihhaqqani"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li class="list-item-inline">
              <a
                class="link social-handles"
                href="https://www.linkedin.com/in/zabih-haqqani-7ab187191/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li class="list-item-inline">
              <a
                class="link social-handles"
                href="https://twitter.com/zabih01"
                target="_blank"
              >
                Twitter
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
