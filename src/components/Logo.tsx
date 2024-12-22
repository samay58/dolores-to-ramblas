import { motion } from 'framer-motion';

const SnakeLogo = () => (
  <svg width="72" height="36" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[90px] sm:h-[42px]">
    <g transform="translate(100, 200) scale(0.85)">
      {/* Main infinity shape */}
      <motion.path
        d="M700 150
           C 950 150, 1050 200, 1100 300
           C 1150 400, 1150 450, 1100 550
           C 1050 650, 950 700, 700 700
           C 450 700, 350 650, 300 550
           C 250 450, 250 400, 300 300
           C 350 200, 450 150, 700 150
           Z"
        stroke="#E8E6DA"
        strokeWidth="25"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Snake head */}
      <motion.path
        d="M1100 300
           L 1120 290
           C 1130 285, 1140 285, 1150 290
           L 1170 300
           C 1180 305, 1180 315, 1170 320
           L 1150 330
           C 1140 335, 1130 335, 1120 330
           L 1100 320
           Z"
        fill="#E8E6DA"
        initial={{ scale: 0, x: -20, y: -20 }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      />
      {/* Snake eye */}
      <motion.circle
        cx="1135"
        cy="305"
        r="2"
        fill="#1D2A3A"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      />
      {/* Snake tail */}
      <motion.path
        d="M300 550
           L 280 560
           C 270 565, 260 565, 250 560
           L 230 550
           C 220 545, 220 535, 230 530
           L 250 520
           C 260 515, 270 515, 280 520
           L 300 530
           Z"
        fill="#E8E6DA"
        initial={{ scale: 0, x: 20, y: 20 }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      />
    </g>
  </svg>
);

export function Logo() {
  return (
    <motion.div 
      className="flex flex-col items-center gap-2 sm:gap-4 mb-6 sm:mb-12 w-full"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.01, 1],
          rotate: [0, 0.5, -0.5, 0]
        }}
        transition={{ 
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.33, 0.66, 1],
          repeat: Infinity,
          repeatDelay: 4
        }}
        className="relative"
      >
        <SnakeLogo />
      </motion.div>
      <h1 className="text-3xl sm:text-5xl font-black tracking-wider text-[#A0D992] terminal-glow text-center">
        WORDLE
      </h1>
    </motion.div>
  );
}