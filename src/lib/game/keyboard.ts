import type { GameStatus } from '../types';

export function getKeyboardStatus(
  key: string,
  guesses: string[],
  solution: string
): GameStatus | undefined {
  const flatKey = key.toUpperCase();
  let status: GameStatus | undefined;

  guesses.forEach(guess => {
    guess.split('').forEach((letter, i) => {
      if (letter.toUpperCase() !== flatKey) return;
      
      if (letter === solution[i]) {
        status = 'correct';
      } else if (solution.includes(letter) && status !== 'correct') {
        status = 'present';
      } else if (!status) {
        status = 'absent';
      }
    });
  });

  return status;
}