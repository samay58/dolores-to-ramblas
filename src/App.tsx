import { useCallback, useEffect, useState } from 'react';
import { GameBoard } from '@/components/GameBoard';
import { Keyboard } from '@/components/Keyboard';
import { GameOver } from '@/components/GameOver';
import { Logo } from '@/components/Logo';
import { Tutorial } from '@/components/Tutorial';
import { WeddingCountdown } from '@/components/WeddingCountdown';
import { HintButton } from '@/components/HintButton';
import { getRandomWord, isValidWord } from '@/lib/game';
import { useToast } from '@/hooks/use-toast';
import { MAX_GUESSES } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isGameActive, setIsGameActive] = useState(true);
  const { toast } = useToast();

  const won = guesses.includes(currentWord.word);
  const solution = currentWord.word;
  const hint = currentWord.hint;

  const handleShowHint = () => {
    if (hint) {
      setShowHint(!showHint);
    }
  };

  const onKey = useCallback((key: string) => {
    if (gameOver || !isGameActive) return;

    if (key === 'A' && !currentGuess && guesses.length > 0) {
      return;
    }

    if (key === 'Enter') {
      if (currentGuess.length !== 5) {
        toast({
          title: 'Not enough letters',
          description: 'Word must be 5 letters long',
          variant: 'destructive',
        });
        return;
      }

      if (!isValidWord(currentGuess)) {
        toast({
          title: 'Invalid word',
          description: 'Please enter a valid word',
          variant: 'destructive',
        });
        return;
      }

      setGuesses(prev => [...prev, currentGuess.toUpperCase()]);
      setCurrentGuess('');

      if (currentGuess.toUpperCase() === solution || guesses.length + 1 === MAX_GUESSES) {
        setGameOver(true);
        setIsGameActive(false);
      }
    } else if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(prev => prev + key.toUpperCase());
    }
  }, [currentGuess, gameOver, guesses.length, solution, toast, isGameActive]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.repeat) return;
      onKey(e.key);
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [onKey]);

  const newGame = () => {
    const newWord = getRandomWord();
    setCurrentWord(newWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
    setShowHint(false);
    setIsGameActive(true);
  };

  const handleGameOverClose = (open: boolean) => {
    setGameOver(open);
    if (!open) {
      newGame();
    }
  };

  useEffect(() => {
    document.title = "Wedding Wordle 🥂";
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-4 sm:p-8 relative">
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
        {hint && (
          <>
            <HintButton
              hint={hint}
              onClick={handleShowHint}
              disabled={gameOver}
              active={showHint}
            />
            <AnimatePresence>
              {showHint && hint && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 p-2 sm:p-3 rounded-lg bg-[#1D2A3A]/80 border border-white/10 text-white/90 text-xs sm:text-sm text-center backdrop-blur-sm w-40 sm:w-48"
                >
                  💡 {hint}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
      <div className="z-10 w-full max-w-[500px] mx-auto flex flex-col items-center">
        <Logo />
        <WeddingCountdown />
        <Tutorial />
        <div className="flex flex-col items-center gap-4 sm:gap-8 w-full">
          <GameBoard
            guesses={guesses}
            currentGuess={currentGuess}
            solution={solution}
            maxGuesses={MAX_GUESSES}
          />
          <div className="w-full max-w-[500px] px-1 sm:px-4">
            <Keyboard
              onKey={onKey}
              guesses={guesses}
              solution={solution}
            />
          </div>
          <GameOver
            won={won}
            solution={solution}
            guesses={guesses}
            onNewGame={newGame}
            open={gameOver}
            onOpenChange={handleGameOverClose}
          />
        </div>
      </div>
    </div>
  );
}