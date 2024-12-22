import { useEffect, useState } from 'react';
import { WEDDING_DATE } from '@/lib/constants';

function getTimeUntilWedding() {
  const wedding = new Date(WEDDING_DATE);
  const now = new Date();
  const diff = wedding.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  return { days, hours };
}

export function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilWedding());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilWedding());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-4 text-sm text-muted-foreground">
      <p>Wedding in {timeLeft.days} days and {timeLeft.hours} hours!</p>
      <p className="text-xs">Come back tomorrow for a new word</p>
    </div>
  );
}