import { useState, useRef } from "react";

const RefTime = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef();

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timerRef.current);
  }

  function handleReset() {
    clearInterval(timerRef.current);
    setTime(0);
  }

  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RefTime;
