export type GameStatus = 'correct' | 'present' | 'absent';

export interface ThemedWord {
  word: string;
  category: 'barcelona' | 'wedding' | 'food' | 'travel';
  hint: string;
}