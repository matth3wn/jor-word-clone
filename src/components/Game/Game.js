import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import Grid from "../Grid/Grid";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const checkGameStatus = ({ guess, answer, listLength }) => {
  const check = guess === answer;
  if (check) {
    return { status: true, style: "happy" };
  }
  if (listLength === NUM_OF_GUESSES_ALLOWED && !check) {
    return { status: true, style: "sad" };
  }
  return;
};

function Game() {
  const [list, setList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({
    status: false,
    style: "sad",
  });

  const handleOnSubmit = (guess) => {
    const nextGuess = [...list, guess];
    setList(nextGuess);
    const status = checkGameStatus({
      guess,
      answer,
      listLength: nextGuess.length,
    });
    status && setGameStatus(status);
  };
  return (
    <>
      <Grid list={list} answer={answer} />
      <GuessInput
        handleOnSubmit={handleOnSubmit}
        gameStatus={gameStatus.status}
      />
      {gameStatus.status && (
        <Banner gameStatus={gameStatus.style}>
          {gameStatus.style === "sad" ? (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          ) : (
            <p>
              <strong>Congratulations!</strong> Got it in {' '}
              <strong>{`${list.length === 1 ? `1 guess` : `${list.length} guesses`}`}</strong>.
            </p>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
