import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const rows = range(0, 5);
const columns = range(0, NUM_OF_GUESSES_ALLOWED);

function Grid({ list, answer }) {
  return (
    <div className="guess-results">
      {columns.map((c) => {
        return (
          <p className="guess" key={`col-${c}`}>
            {rows.map((r) => {
              const guess = list[c] && checkGuess(list[c], answer);
              return (
                <span
                  className={`cell ${guess ? guess[r].status : ""}`}
                  key={`column-${c}-cell-${r}`}
                >
                  {list[c] ? guess[r].letter : ""}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Grid;
