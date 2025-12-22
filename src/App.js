import React, { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Features from "./components/Features";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  return (
    <div className="app">
      {/* ================= TIC TAC TOE ================= */}
      <h1>Tic Tac Toe</h1>

      <div className="status">
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Next Player: ${isXNext ? "X" : "O"}`
          : "Draw!"}
      </div>

      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
          </div>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Restart Game
      </button>

      <hr />

      {/* ================= DAY 4: PROPS & STATE ================= */}
      <h2>Day 4: Props & State</h2>

      <Profile
        name="Lokesh Thanukonda"
        role="React Developer"
        email="lokesh@example.com"
      />

      <Counter />

      <hr />

      {/* ================= DAY 5: EVENTS & CONDITIONAL RENDERING ================= */}
      <h2>Day 5: Events & Conditional Rendering</h2>

      <Features />
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default App;
