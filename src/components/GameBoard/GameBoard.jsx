import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updateGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateGameBoard;
    });
    onSelectSquare();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
