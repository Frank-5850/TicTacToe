import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [count, setCount] = useState(0);

  const reset = () => {
    setBoard([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  };

  const winConditions = () => {
    if (board[0] === "x" && board[1] === "x" && board[2] === "x") {
      alert("Player 1 Wins");
    } else if (board[0] === "x" && board[3] === "x" && board[6] === "x") {
      alert("Player 1 Wins");
    } else if (board[2] === "x" && board[5] === "x" && board[8] === "x") {
      alert("Player 1 Wins");
    } else if (board[6] === "x" && board[7] === "x" && board[8] === "x") {
      alert("Player 1 Wins");
    } else if (board[1] === "x" && board[4] === "x" && board[7] === "x") {
      alert("Player 1 Wins");
    } else if (board[3] === "x" && board[4] === "x" && board[5] === "x") {
      alert("Player 1 Wins");
    } else if (board[0] === "x" && board[4] === "x" && board[8] === "x") {
      alert("Player 1 Wins");
    } else if (board[2] === "x" && board[4] === "x" && board[6] === "x") {
      alert("Player 1 Wins");
    } else if (board[0] === "o" && board[1] === "o" && board[2] === "o") {
      alert("Player 2 Wins");
    } else if (board[0] === "o" && board[3] === "o" && board[6] === "o") {
      alert("Player 2 Wins");
    } else if (board[2] === "o" && board[5] === "o" && board[8] === "o") {
      alert("Player 2 Wins");
    } else if (board[6] === "o" && board[7] === "o" && board[8] === "o") {
      alert("Player 2 Wins");
    } else if (board[1] === "o" && board[4] === "o" && board[7] === "o") {
      alert("Player 2 Wins");
    } else if (board[3] === "o" && board[4] === "o" && board[5] === "o") {
      alert("Player 2 Wins");
    } else if (board[0] === "o" && board[4] === "o" && board[8] === "o") {
      alert("Player 2 Wins");
    } else if (board[2] === "o" && board[4] === "o" && board[6] === "o") {
      alert("Player 2 Wins");
    } else if (count > 8) {
      alert("The game is a draw");
    }
  };

  const clickBox = (index) => {
    let newBoard = [...board];
    newBoard[index] = currentPlayer ? "x" : "o";
    setBoard(newBoard);
    setCurrentPlayer(!currentPlayer);
    setCount(count + 1);
  };

  useEffect(() => {
    winConditions();
  }, [board]);

  return (
    <div className="App">
      <div className="boardWrapper">
        <div className="boardContainer">
          {board.map((board, i) => (
            <div className="box" key={i} onClick={() => clickBox(i)}>
              {board}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
