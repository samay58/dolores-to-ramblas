import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trophy, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { showConfetti } from '@/lib/confetti';

interface GameOverProps {
  won: boolean;
  solution: string;
  guesses: string[];
  onNewGame: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GameOver({ won, solution, guesses, onNewGame, open, onOpenChange }: GameOverProps) {
  const { toast } = useToast();

  useEffect(() => {
    if (won && open) {
      showConfetti();
    }
  }, [won, open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1D2A3A]/95 backdrop-blur-sm border-2 border-white/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            {won ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-2"
              >
                <Trophy className="w-6 h-6 text-[#24D982]" />
                Congratulations!
              </motion.div>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-500" />
                Game Over
              </>
            )}
          </DialogTitle>
          <DialogDescription className="text-lg text-white/90">
            {won ? (
              `You won in ${guesses.length} ${guesses.length === 1 ? 'guess' : 'guesses'}!`
            ) : (
              `The word was ${solution}`
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Button 
              onClick={() => {
                navigator.clipboard.writeText(
                  `Dolores to Ramblas\n${guesses.length}/8 guesses\n${
                    guesses.map(guess => 
                      guess.split('').map((letter, i) => 
                        letter === solution[i] ? '🟩' : solution.includes(letter) ? '🟨' : '⬛'
                      ).join('')
                    ).join('\n')
                  }`
                );
                toast({
                  title: 'Copied to clipboard!',
                  description: 'Share your results with friends',
                });
              }}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Share Results
            </Button>
          </div>
          <Button 
            onClick={() => {
              onOpenChange(false);
              onNewGame();
            }}
            className="w-full bg-[#24D982] hover:bg-[#20C875] text-white"
          >
            Play New Game
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}