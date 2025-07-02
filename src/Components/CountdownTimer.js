import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div>
      <h2 className='timer-heading'>Presale Starts In</h2>
      <div className='timer-wrap'>
      <div>
        <h3><p>{timeLeft.days}  {' '}</p></h3>
        <p>Days</p>
     </div>
        <div>
        <h3><p>{addLeadingZero(timeLeft.hours)}</p></h3>
        <p>Hours</p>
        </div>
        <div>
        <h3><p>{addLeadingZero(timeLeft.minutes)}</p></h3>
        <p>Minutes</p>
        </div>
        <div>
        <h3><p>{addLeadingZero(timeLeft.seconds)}</p></h3>
        <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
