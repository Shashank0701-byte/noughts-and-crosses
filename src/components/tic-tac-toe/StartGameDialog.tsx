"use client";

import { Circle, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type StartGameDialogProps = {
  open: boolean;
  onSelect: (player: 'X' | 'O') => void;
};

export function StartGameDialog({ open, onSelect }: StartGameDialogProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl">
            Choose Your Side
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Player 'X' always goes first. Who do you want to be?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center gap-4 py-4">
          <Button
            variant="outline"
            size="lg"
            className="h-20 w-20 transform transition-transform hover:scale-105"
            onClick={() => onSelect('X')}
            aria-label="Select player X"
          >
            <X className="h-12 w-12 text-primary" strokeWidth={3} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-20 w-20 transform transition-transform hover:scale-105"
            onClick={() => onSelect('O')}
            aria-label="Select player O"
          >
            <Circle className="h-12 w-12 text-primary" strokeWidth={3} />
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
