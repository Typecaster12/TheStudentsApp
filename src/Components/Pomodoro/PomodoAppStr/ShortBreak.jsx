import { useEffect, useState } from "react"

const ShortBreak = () => {
  const [shortTimer, setShortTimer] = useState(5 * 60);
  const [isShortClockWorking, setIsShortClockWorking] = useState(false);

  //toggle functionality;
  const toggleClockBtn = () => {
    setIsShortClockWorking(!isShortClockWorking);
  }

  //function to get minutes and seconds
  const getMinutes = (shortTimer) => {
    const workMinutes = Math.floor(shortTimer / 60);
    const workSeconds = shortTimer % 60;
    return `${workMinutes}:${workSeconds < 10 ? `0${workSeconds}` : workSeconds}`;
  }

  useEffect(() => {
    if (isShortClockWorking && shortTimer > 0) {
      const shortInterval = setInterval(() => {
        setShortTimer((shortTimer) => shortTimer - 1)
      }, 1000)

      return () => clearInterval(shortInterval);
    }

  }, [shortTimer, isShortClockWorking]);


  useEffect(() => {
    if (shortTimer === 0) {
      setShortTimer(5 * 60);
      setIsShortClockWorking(false);
    }
  }, [shortTimer, isShortClockWorking]);


  return (
    <div className="short_container">
      <h1 className="short_heading">Short Break</h1>
      <div className="short_clock">
        {getMinutes(shortTimer)}
      </div>
      <button className="short_btn" onClick={toggleClockBtn}>{isShortClockWorking ? 'Pause' : 'Start'}</button>
    </div>
  )
}

export default ShortBreak
