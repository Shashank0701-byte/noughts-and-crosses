"use client";

import { Circle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type SquareProps = {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinning: boolean;
};

export function Square({ value, onClick, isWinning }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-24 w-24 items-center justify-center rounded-lg border-2 border-primary/20 text-4xl font-bold transition-all duration-300 ease-in-out hover:bg-primary/10 md:h-28 md:w-28',
        isWinning ? 'bg-accent text-accent-foreground animate-in zoom-in-105' : 'bg-card text-primary',
        value ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
      aria-label={`Square ${value ? `with value ${value}` : 'empty'}`}
      disabled={!!value}
    >
      <div className="transform transition-transform duration-300 ease-in-out group-hover:scale-110">
        {value === 'X' && <X className="h-12 w-12 animate-in fade-in zoom-in-75 md:h-16 md:w-16" strokeWidth={3} />}
        {value === 'O' && <Circle className="h-12 w-12 animate-in fade-in zoom-in-75 md:h-16 md:w-16" strokeWidth={3} />}
      </div>
    </button>
  );
}
