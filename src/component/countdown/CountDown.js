import moment from 'moment-hijri';
import { useState, useEffect } from 'react';
import css from './CountDown.module.css'
const CountDown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // parse hijri date
    let targetDate = moment(date, 'iYYYY-iMM-iDD');
    let currentDate = moment();

    // update time left
    const intervalId = setInterval(() => {
      let distance = targetDate - currentDate;
      if (distance <= 0) {
        clearInterval(intervalId);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      currentDate = moment();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div className={css.countdown}>
    <p>Time remaining to reach the date:</p>
    <p>{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</p>
    </div>
  );
};

export default CountDown
