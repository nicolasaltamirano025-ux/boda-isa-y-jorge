import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function diff(targetISO: string): TimeLeft {
  const total = new Date(targetISO).getTime() - Date.now();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    done: false,
  };
}

export function useCountdown(targetISO: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState(() => diff(targetISO));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(diff(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return timeLeft;
}
