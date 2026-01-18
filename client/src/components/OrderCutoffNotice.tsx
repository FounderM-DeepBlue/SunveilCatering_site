import { useState, useEffect } from 'react';
import { differenceInSeconds, nextTuesday, isTuesday, isAfter, set } from 'date-fns';
import { cn } from '@/lib/utils';

interface OrderCutoffNoticeProps {
  className?: string;
  variant?: 'inline' | 'popup';
}

export function OrderCutoffNotice({ className, variant = 'inline' }: OrderCutoffNoticeProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Define cutoff time for any given day
      const cutoffTime = { hours: 23, minutes: 59, seconds: 59, milliseconds: 999 };
      
      let targetDate: Date;

      // Check if today is Tuesday and we are before the cutoff
      const todayCutoff = set(now, cutoffTime);
      
      if (isTuesday(now) && !isAfter(now, todayCutoff)) {
        targetDate = todayCutoff;
      } else {
        // Otherwise, target the next Tuesday
        targetDate = set(nextTuesday(now), cutoffTime);
      }

      const diffInSeconds = differenceInSeconds(targetDate, now);
      
      if (diffInSeconds <= 0) {
        setTimeLeft("00d 00h 00m 00s");
        return;
      }

      const days = Math.floor(diffInSeconds / (3600 * 24));
      const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((diffInSeconds % 3600) / 60);
      const seconds = diffInSeconds % 60;

      setTimeLeft(
        `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
      );
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const isPopup = variant === 'popup';

  return (
    <div className={cn(
      "flex flex-col items-center text-center",
      !isPopup && "p-6 border rounded-xl bg-white/50 backdrop-blur-sm border-[hsl(var(--color-border))] my-8 mx-auto max-w-2xl gap-2",
      isPopup && "gap-4 py-4",
      className
    )}>
      <h3 className={cn(
        "font-serif font-bold text-[hsl(var(--color-deep-forest))]",
        isPopup ? "text-3xl" : "text-xl"
      )}>
        Order Cutoff Notice
      </h3>
      
      <div className={cn(
        "font-mono font-bold text-[hsl(var(--color-forest))]",
        isPopup ? "text-5xl my-4" : "text-3xl"
      )}>
        {timeLeft}
      </div>

      <div className={cn(
        "text-[hsl(var(--color-moss))]",
        isPopup ? "text-lg space-y-2" : "text-sm space-y-1"
      )}>
        <p>Orders placed by Tuesday at 11:59 PM will be available for pickup on Friday of the same week.</p>
        <p>Any orders placed after midnight Tuesday will be delivered the following Friday.</p>
      </div>
    </div>
  );
}
