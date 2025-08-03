"use client";

import { Square } from './Square';

type BoardProps = {
  squares: Array<'X' | 'O' | null>;
  onSquareClick: (i: number) => void;
  winningLine: number[] | null;
};

export function Board({ squares, onSquareClick, winningLine }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl bg-primary/20 p-2 shadow-lg">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onSquareClick(i)}
          isWinning={winningLine?.includes(i) ?? false}
        />
      ))}
    </div>
  );
}
