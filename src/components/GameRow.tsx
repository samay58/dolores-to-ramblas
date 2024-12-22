import { GameTile } from '@/components/GameTile';
import { getLetterStatus } from '@/lib/game';
import type { GameStatus } from '@/lib/game';

interface GameRowProps {
  guess?: string;
  solution?: string;
  isCurrentGuess?: boolean;
}

export function GameRow({ guess, solution, isCurrentGuess }: GameRowProps) {
  const tiles = Array(5).fill('');

  return (
    <div className="grid grid-cols-5 gap-1 sm:gap-2">
      {tiles.map((_, i) => {
        const letter = guess?.[i] || '';
        let status: GameStatus | undefined;
        
        if (solution && !isCurrentGuess && letter) {
          status = getLetterStatus(letter, i, solution);
        }

        return (
          <GameTile
            key={i}
            letter={letter}
            status={status}
            animate={!!status}
            index={i}
          />
        );
      })}
    </div>
  );
}