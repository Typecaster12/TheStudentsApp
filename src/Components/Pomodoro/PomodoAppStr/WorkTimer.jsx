import { useEffect, useRef, useState } from 'react';
import './PomodoroStyle.css';


const WorkTimer = () => {
    //states for timer
    const [workTimer, setWorkTimer] = useState(25 * 60);
    // current state of clock
    const [isWorkTimerWorking, setIsWorkTimerWorking] = useState(false);
    //audio reference;
    const workTimerAudioReff = useRef(new Audio('public/public_alarm.mp3'));


    //function for clock's working;
    const toggleFunctionality = () => {
        setIsWorkTimerWorking(!isWorkTimerWorking);
    }

    //for timer functionality;
    useEffect(() => {
        if (isWorkTimerWorking && workTimer > 0) {
            const workInterval = setInterval(() => {
                setWorkTimer((workTimer) => workTimer - 1)
            }, 1000);

            return () => clearInterval(workInterval); //cleanup function;
        }
    }, [workTimer, isWorkTimerWorking]);

    //when the timesUp
    useEffect(() => {
        if (workTimer === 0) {
            workTimerAudioReff.current.play(); //playe the audio using its refference;
            setWorkTimer(25*60);
            setIsWorkTimerWorking(false);
        }
    }, [workTimer]);

    //function to get minutes and seconds
    const getWorkTime = (workTimer) => {
        const workMinutes = Math.floor(workTimer / 60);
        const workSeconds = workTimer % 60;
        return `${workMinutes}:${workSeconds < 10 ? `0${workSeconds}` : workSeconds}`;
    }


    return (
        <div className="work_container">
            <h1 className="work_heading">Work Timer</h1>
            <div className="work_clock">
                {getWorkTime(workTimer)}
            </div>
            <button onClick={toggleFunctionality} className="work_btn">{isWorkTimerWorking ? 'Pause' : 'Start'}</button>
        </div>
    )
}

export default WorkTimer;