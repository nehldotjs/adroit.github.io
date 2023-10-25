import React, { useState, useEffect } from "react";
import { useContxtValues } from "../contexts/context";

function CountDownTimer() {
  const initialTime = 120; // Initial time in seconds (2 minutes)
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  const minutes = Math.floor(timeLeft / 60);
  const remainingSeconds = timeLeft % 60;

  console.log(minutes, remainingSeconds);

  const { resetTimer, setResetTimer, name, countDownState, setCountDownState } =
    useContxtValues();

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsRunning(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  const startCountdown = () => {
    setIsRunning(true);
  };
  
  if (resetTimer) {
    setIsRunning(false);
    setTimeLeft(initialTime);
  }

  return <>{minutes + ":" + remainingSeconds}</>;
}

export default CountDownTimer;
