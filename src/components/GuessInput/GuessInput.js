import React from "react";

function GuessInput({ handleOnSubmit, gameStatus }) {
  const [input, setInput] = React.useState("");
  const handleOnChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setInput("");
        handleOnSubmit(input);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={handleOnChange}
        value={input}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength="5"
        disabled={gameStatus}
      />
    </form>
  );
}

export default GuessInput;
