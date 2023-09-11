import React, { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

const Countdown = () => {
  const targetDate = new Date('2024-11-02T16:00:00');

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const timeDiff = differenceInSeconds(targetDate, currentDate);

    if (timeDiff <= 0) {
      // Countdown has ended
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(timeDiff / 86400)); // 1 day = 24 * 60 * 60 seconds
      setHours(Math.floor((timeDiff % 86400) / 3600)); // 1 hour = 60 * 60 seconds
      setMinutes(Math.floor((timeDiff % 3600) / 60));
      setSeconds(timeDiff % 60);
    }
  };

  // Update the countdown every second
  useEffect(() => {
    const intervalId = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown">
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  );
}

export default Countdown;
