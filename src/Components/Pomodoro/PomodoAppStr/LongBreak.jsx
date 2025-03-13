import { useEffect, useState } from "react"

const LongBreak = () => {

  const [longTimer, setLongTimer] = useState(30 * 60);
  const [isClockRunning, setIsClockRunning] = useState(false);

  //toggle fucntionality;
  const toggleClockButton = () => {
    setIsClockRunning(!isClockRunning);
  }

  //function to get minutes and seconds
  const getMinutes = (longTimer) => {
    const workMinutes = Math.floor(longTimer / 60);
    const workSeconds = longTimer % 60;
    return `${workMinutes}:${workSeconds < 10 ? `0${workSeconds}` : workSeconds}`;
  }

  useEffect(() => {
    if (isClockRunning && longTimer > 0) {
      const timeInterval = setInterval(() => {
        setLongTimer((longTimer) => longTimer - 1);
      }, 1000);

      //cleanup function;
      return () => clearInterval(timeInterval);
    }
  }, [longTimer, isClockRunning]);


  //when time is up;
  useEffect(() => {
    if (longTimer === 0) {
      setIsClockRunning(false);
      setLongTimer(30 * 60);
    }
  }, [longTimer, isClockRunning])

  return (
    <div className="long_container">
      <h1 className="long_heading">Long Break</h1>
      <div className="long_clock">
        {getMinutes(longTimer)}
      </div>
      <button className="long_btn" onClick={toggleClockButton}>{isClockRunning ? 'Pause' : 'Start'}</button>
    </div>
  )
}

export default LongBreak
