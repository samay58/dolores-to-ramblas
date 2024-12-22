import { cn } from '@/lib/utils';
import { getKeyboardStatus } from '@/lib/game/keyboard';
import type { GameStatus } from '@/lib/types';
import { motion } from 'framer-motion';

interface KeyboardProps {
  onKey: (key: string) => void;
  guesses: string[];
  solution: string;
}

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
];

function getKeyStyles(status: GameStatus | undefined) {
  return {
    'bg-[#24D982] border-[#24D982] text-white shadow-[0_0_10px_rgba(36,217,130,0.3)]': status === 'correct',
    'bg-[#F2D94E] border-[#F2D94E] text-white': status === 'present',
    'bg-[#2B2B2B] border-[#2B2B2B] text-white': status === 'absent',
    'bg-[#1D2A3A] border-[#2B2B2B] hover:border-[#3B3B3B] text-white': !status
  };
}

export function Keyboard({ onKey, guesses, solution }: KeyboardProps) {
  return (
    <motion.div 
      className="grid gap-1.5 sm:gap-2 p-2 sm:p-4 rounded-lg bg-black/30 backdrop-blur-sm shadow-lg border border-white/10 w-full"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {KEYS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1 sm:gap-1.5 safari-flex-fix">
          {row.map(key => {
            const status = getKeyboardStatus(key, guesses, solution);
            return (
              <motion.button
                key={key}
                onClick={() => onKey(key)}
                className={cn(
                  'px-1 sm:px-2 py-3 sm:py-4 text-xs sm:text-sm font-bold rounded-md border transition-colors duration-200',
                  'shadow-sm font-mono transform-gpu active:scale-95',
                  key.length > 1 ? 'px-2 sm:px-4 flex-shrink-0' : 'min-w-[32px] sm:min-w-[40px] w-full',
                  getKeyStyles(status)
                )}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {key === 'Backspace' ? '←' : key}
              </motion.button>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}