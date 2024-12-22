// Barcelona Wedding Theme Word List
export const SOLUTION_WORDS = [
  // Barcelona & Spain
  'SPAIN', 'BEACH', 'SAGRA', 'GAUDI', 'TAPAS', 'VINOS', 'PAELA', 'PLAZA', 'GOTIC', 'RAMBA',
  'COSTA', 'BRAVA', 'CATLA', 'METRO', 'BARRI', 'PASEO', 'HOTEL', 'FIETA',
  
  // Wedding Related
  'BRIDE', 'DANCE', 'TOAST', 'RINGS', 'VOWS', 'PARTY', 'MUSIC', 'DRESS', 'SUITE', 'PHOTO',
  'HAPPY', 'LOVED', 'UNION', 'FEAST', 'GUEST', 'DATES',
  
  // San Francisco & Bay Area
  'DOLRS', 'HAYES', 'NOEVY', 'FOGGY', 'MARIN', 'BEACH', 'PRIDE', 'FERRY', 'BAKER', 'HAIGT',
  'PAINT', 'CABLE', 'GIANT', 'ANGEL', 'VISTA', 'CROWN', 'HILLS', 'TACOS',
  
  // Tech & Career
  'LEGAL', 'COURT', 'BRIEF', 'CASES', 'FIRMS', 'FUNDS', 'STOCK', 'TRADE', 'DEALS', 'PITCH',
  'SCALE', 'CLOUD', 'TEAMS', 'SLACK', 'EMAIL', 'ZOOM', 'BOARD',
  
  // Travel & Lifestyle
  'PLANE', 'TRIPS', 'WORLD', 'PASTA', 'SUSHI', 'WINE', 'HIKES', 'VIEWS', 'PARKS', 'CAFES',
  'BRUCH', 'DATES', 'HOMES', 'URBAN', 'LOCAL', 'FRESH'
];

// Additional valid guesses include common 5-letter words
export const VALID_GUESSES = [
  ...SOLUTION_WORDS,
  // Add more common 5-letter words for valid guesses
  'ABOUT', 'ABOVE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'AFTER', 'AGAIN', 'ALERT', 'ALIVE',
  'ALLOW', 'ALONE', 'AMONG', 'APPLY', 'AUDIO', 'AVOID', 'BASIC', 'BEGIN', 'BLACK', 'BLAME',
  'BLIND', 'BRAIN', 'BREAD', 'BREAK', 'BRING', 'BUILD', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN'
];

export function getRandomWord(): string {
  return SOLUTION_WORDS[Math.floor(Math.random() * SOLUTION_WORDS.length)];
}

export function isValidWord(word: string): boolean {
  return VALID_GUESSES.includes(word.toUpperCase());
}

// Helper to count letter occurrences
export function getLetterCount(word: string): Record<string, number> {
  return word.split('').reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}