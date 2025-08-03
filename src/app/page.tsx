"use client";

import { useState } from "react";
import { Board } from "@/components/tic-tac-toe/Board";
import { GameStatus } from "@/components/tic-tac-toe/GameStatus";
import { StartGameDialog } from "@/components/tic-tac-toe/StartGameDialog";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

function calculateWinner(squares: Array<'X' | 'O' | null>): { winner: 'X' | 'O', line: number[] } | null {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

export default function TicTacToeGame() {
  const [squares, setSquares] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo?.winner ?? null;
  const winningLine = winnerInfo?.line ?? null;
  const isDraw = squares.every(square => square !== null) && !winner;

  function handleSquareClick(i: number) {
    if (squares[i] || winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(false);
  }

  function handleSelectPlayer(player: 'X' | 'O') {
    setGameStarted(true);
    // This function is simple for a 2-player setup.
    // If we were adding an AI, we could check if player chose 'O'
    // and trigger the AI's first move here.
  }

  return (
    <>
      <StartGameDialog open={!gameStarted} onSelect={handleSelectPlayer} />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-body">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-6xl">
            Noughts & Crosses
          </h1>
          
          <div className="flex flex-col items-center gap-4">
            <GameStatus winner={winner} isDraw={isDraw} xIsNext={xIsNext} />
            <Board squares={squares} onSquareClick={handleSquareClick} winningLine={winningLine} />
          </div>
          
          <div className="h-16">
            {(winner || isDraw) && (
              <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                  <Button onClick={handleReset} size="lg">
                      <RotateCcw className="mr-2 h-5 w-5" />
                      Play Again
                  </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
