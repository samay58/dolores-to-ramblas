import confetti from 'canvas-confetti';

export function showConfetti() {
  const duration = 8000; // Increased duration
  const end = Date.now() + duration;
  const colors = ['#24D982', '#F2D94E'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
      shapes: ['circle', 'square'],
      gravity: 0.8,
      scalar: 1.2
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
      shapes: ['circle', 'square'],
      gravity: 0.8,
      scalar: 1.2
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}