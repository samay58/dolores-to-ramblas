import { BARCELONA_WORDS } from './barcelona-words';
import { SF_WORDS } from './sf-words';
import { TRAVEL_WORDS } from './travel-words';
import { WEDDING_WORDS } from './wedding-words';
import { CAREER_WORDS } from './career-words';
import { THEMED_WORDS } from './themed-words';
import { COMMON_WORDS } from './common-words';
import type { ThemedWord } from '../types';

// Combine all category words
const ALL_CATEGORY_WORDS = [
  ...BARCELONA_WORDS,
  ...SF_WORDS,
  ...TRAVEL_WORDS,
  ...WEDDING_WORDS,
  ...CAREER_WORDS
];

export function getRandomWord(): ThemedWord {
  return THEMED_WORDS[Math.floor(Math.random() * THEMED_WORDS.length)];
}

export function isValidWord(word: string): boolean {
  const upperWord = word.toUpperCase();
  return ALL_CATEGORY_WORDS.includes(upperWord as typeof ALL_CATEGORY_WORDS[number]) || 
         COMMON_WORDS.includes(upperWord as typeof COMMON_WORDS[number]);
}

export function getHint(solution: string): string | null {
  const themedWord = THEMED_WORDS.find(word => word.word === solution);
  return themedWord?.hint || null;
}