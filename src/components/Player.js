import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const inputText = useRef();

  function onClickHandler() {
    setPlayerName(inputText.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputText} />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
