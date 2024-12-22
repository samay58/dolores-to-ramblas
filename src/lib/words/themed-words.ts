interface ThemedWord {
  word: string;
  category: 'barcelona' | 'wedding' | 'food' | 'travel';
  hint: string;
}

export const THEMED_WORDS: ThemedWord[] = [
  // Barcelona themed
  { word: 'TAPAS', category: 'food', hint: 'Small Spanish dishes perfect for sharing' },
  { word: 'GAUDI', category: 'barcelona', hint: 'Famous architect who shaped Barcelona' },
  { word: 'SAGRA', category: 'barcelona', hint: 'La ___ Familia, an iconic basilica' },
  { word: 'BESOS', category: 'barcelona', hint: 'Kisses in Spanish' },
  { word: 'PLAYA', category: 'barcelona', hint: 'Where to enjoy the Mediterranean sun' },
  
  // Wedding themed
  { word: 'BRIDE', category: 'wedding', hint: 'The star of the wedding day' },
  { word: 'DANCE', category: 'wedding', hint: 'What we\'ll do at the reception' },
  { word: 'TOAST', category: 'wedding', hint: 'Raise your glass!' },
  { word: 'RINGS', category: 'wedding', hint: 'Symbol of eternal love' },
  { word: 'VOWS', category: 'wedding', hint: 'Promises made on the special day' },
  
  // Food & Drink
  { word: 'PAELA', category: 'food', hint: 'Traditional Spanish rice dish' },
  { word: 'VINOS', category: 'food', hint: 'Spanish wines' },
  { word: 'CAVA', category: 'food', hint: 'Sparkling celebration drink' },
  
  // Travel themed
  { word: 'PLAZA', category: 'travel', hint: 'City square where people gather' },
  { word: 'HOTEL', category: 'travel', hint: 'Where guests will stay' },
  { word: 'FIETA', category: 'travel', hint: 'Spanish celebration' },
  { word: 'PLANO', category: 'travel', hint: 'You\'ll need this to navigate the city' },
  { word: 'METRO', category: 'travel', hint: 'Underground transportation' }
];