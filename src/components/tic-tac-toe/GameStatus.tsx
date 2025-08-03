"use client";

import { Award, Users } from 'lucide-react';

type GameStatusProps = {
  winner: 'X' | 'O' | null;
  isDraw: boolean;
  xIsNext: boolean;
};

export function GameStatus({ winner, isDraw, xIsNext }: GameStatusProps) {
  let status;
  if (winner) {
    status = (
      <>
        <Award className="h-6 w-6 text-accent" />
        <span className="font-bold text-accent">Winner: {winner}</span>
      </>
    );
  } else if (isDraw) {
    status = (
      <>
        <Users className="h-6 w-6 text-muted-foreground" />
        <span className="font-bold">It's a Draw!</span>
      </>
    );
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full bg-card px-6 text-lg shadow-md transition-all">
      {status}
    </div>
  );
}
