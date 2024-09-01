import React, { useState } from 'react';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board: Player[]): Player | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 flex items-center justify-center bg-gray-200 border border-gray-400 text-2xl font-bold cursor-pointer"
          >
            {value}
          </div>
        ))}
      </div>
      {winner ? (
        <div className="text-xl mb-4">Winner: {winner}</div>
      ) : (
        <div className="text-xl mb-4">Next Player: {currentPlayer}</div>
      )}
      <button
        onClick={resetGame}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
