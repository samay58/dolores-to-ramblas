import { THEMED_WORDS } from './words/themed-words';
import { COMMON_WORDS } from './words/common-words';
import { ALLOWED_WORDS } from './words/allowed-words';

export type GameStatus = 'correct' | 'present' | 'absent';

export function getRandomWord() {
  const randomWord = THEMED_WORDS[Math.floor(Math.random() * THEMED_WORDS.length)];
  return randomWord;
}

export function getHint(solution: string): string | null {
  const themedWord = THEMED_WORDS.find(word => word.word === solution);
  return themedWord?.hint || null;
}

export function isValidWord(word: string): boolean {
  const upperWord = word.toUpperCase();
  return THEMED_WORDS.some(tw => tw.word === upperWord) || 
         COMMON_WORDS.includes(upperWord as typeof COMMON_WORDS[number]) ||
         ALLOWED_WORDS.includes(upperWord);
}

export function getLetterStatus(
  letter: string,
  position: number,
  solution: string
): GameStatus {
  const letterUpper = letter.toUpperCase();
  
  if (letterUpper === solution[position]) {
    return 'correct';
  }
  
  if (solution.includes(letterUpper)) {
    return 'present';
  }
  
  return 'absent';
}