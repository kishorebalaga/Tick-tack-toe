import React, { useEffect, useState } from "react";
import TickTack from "./components/TickTack";

export const WinnerCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
];

export default function App() {
  const player_1 = "X";
  const player_2 = "O";
  const [tickarr, setTickArr] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);
  const [winnerPlayer, setWinnerPlayer] = useState("");

  const onClickTile = (index) => {
    if (tickarr[index] !== null) {
      return;
    }
    let tick2 = [...tickarr];
    tick2[index] = currentPlayer;
    setTickArr(tick2);

    if (currentPlayer === player_1) {
      setCurrentPlayer(player_2);
    } else {
      setCurrentPlayer(player_1);
    }
  };

  const checkCombinations = () => {
    for (let comb of WinnerCombination) {
      if (
        tickarr[comb[0]] === tickarr[comb[1]] &&
        tickarr[comb[1]] === tickarr[comb[2]] &&
        tickarr[comb[0]] !== null
      ) {
        if (tickarr[comb[1]] === "X") {
          setWinnerPlayer("Player 1");
        } else {
          setWinnerPlayer("Player 2");
        }
        return;
      }
    }
    if (tickarr.every((ele) => ele !== null)) {
      setWinnerPlayer("Draw");
    }
  };

  useEffect(() => {
    checkCombinations();
  }, [currentPlayer]);

  const onClickReset = () => {
    setTickArr(Array(9).fill(null));
    setWinnerPlayer("");
    setCurrentPlayer(player_1);
  };

  console.log("winnerPlayer ==>", winnerPlayer);

  return (
    <h1 className="h-screen w-full text-3xl bg-black">
      <TickTack onClickTile={onClickTile} tickarr={tickarr} />
      <button
        onClick={onClickReset}
        className=" text-6xl text-blue-400 flex flex-row items-center justify-center w-full mt-8"
      >
        Reset
      </button>
      {winnerPlayer && (
        <h2 className="text-6xl text-blue-400 flex flex-row items-center justify-center">{`${winnerPlayer} player wins`}</h2>
      )}
      {winnerPlayer === "Draw" ? `It's a tie` : ""}
    </h1>
  );
}
