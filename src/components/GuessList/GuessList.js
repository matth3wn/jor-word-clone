import React from "react";

function GuessList({ list }) {
  return (
    <div className="guess-results">
      {list.map((guess, i) => (
        <p key={`${guess}-${i}`} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
