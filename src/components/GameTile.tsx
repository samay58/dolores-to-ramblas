import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GameTileProps {
  letter: string;
  status?: 'correct' | 'present' | 'absent';
  animate?: boolean;
  index?: number;
}

export function GameTile({ letter, status, animate = false, index = 0 }: GameTileProps) {
  const Wrapper = animate ? motion.div : 'div';
  
  return (
    <Wrapper
      {...(animate ? {
        initial: { rotateX: 0, scale: 1 },
        animate: { 
          rotateX: 360,
          scale: status === 'correct' ? [1, 1.1, 1] : 1
        },
        transition: { 
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.34, 1.56, 0.64, 1]
        }
      } : {})}
      className={cn(
        'w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] border-2 flex items-center justify-center',
        'text-xl sm:text-2xl font-bold rounded-md shadow-md font-mono',
        'transition-all duration-300 transform-gpu backface-visible',
        'webkit-backface-visibility-visible',
        {
          'bg-[#24D982] border-[#24D982] text-white shadow-[0_0_10px_rgba(36,217,130,0.3)]': status === 'correct',
          'bg-[#F2D94E] border-[#F2D94E] text-white': status === 'present',
          'bg-[#2B2B2B] border-[#2B2B2B] text-white': status === 'absent',
          'bg-[#1D2A3A] border-[#2B2B2B] hover:border-[#3B3B3B] text-white/90': !status,
        }
      )}
      style={{
        WebkitTransform: animate ? 'translateZ(0)' : undefined,
        WebkitPerspective: animate ? '1000px' : undefined,
        WebkitBackfaceVisibility: 'visible'
      }}
    >
      {letter}
    </Wrapper>
  );
}