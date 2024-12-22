import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HintButtonProps {
  hint: string | null;
  onClick: () => void;
  disabled: boolean;
  active: boolean;
}

export function HintButton({ hint, onClick, disabled, active }: HintButtonProps) {
  if (!hint) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-4 right-4"
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        variant="outline"
        className={cn(
          "bg-[#1D2A3A] border-white/20 text-white hover:bg-white/10 gap-2 shadow-lg hover:shadow-xl transition-all duration-300",
          active && "bg-[#24D982]/20 hover:bg-[#24D982]/30 border-[#24D982]/40",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <motion.div
          animate={active ? {
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.3 }}
        >
          <Lightbulb className={cn(
            "w-4 h-4",
            active && "text-[#24D982]"
          )} />
        </motion.div>
        <span className="text-sm">
          {active ? 'Hide Hint' : 'Need a Hint?'}
        </span>
      </Button>
    </motion.div>
  );
}