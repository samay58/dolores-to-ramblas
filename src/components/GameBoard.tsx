import { GameRow } from '@/components/GameRow';

interface GameBoardProps {
  guesses: string[];
  currentGuess: string;
  solution: string;
  maxGuesses: number;
}

export function GameBoard({ guesses, currentGuess, solution, maxGuesses }: GameBoardProps) {
  const empties = Array(maxGuesses - 1 - guesses.length).fill('');

  return (
    <div className="grid gap-2">
      {guesses.map((guess, i) => (
        <GameRow key={i} guess={guess} solution={solution} />
      ))}
      
      {guesses.length < maxGuesses && (
        <GameRow guess={currentGuess} isCurrentGuess />
      )}

      {empties.map((_, i) => (
        <GameRow key={`empty-${i}`} />
      ))}
    </div>
  );
}