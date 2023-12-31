// Importing necessary React hooks
import React, { useState, useRef } from "react";
import './Stopwatch.css';

// Defining the Stopwatch function component
const Stopwatch = () => {
    // Using the useState hook to manage timer state
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    
    //function to format time
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    };

    //function to start Stopwatch
    const startStopwatch = () => {
        if (!isRunning) {
            const startTime = Date.now() - elapsedTime;
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 10); // Update every 10 milliseconds for better accuracy
        } else {
            clearInterval(intervalRef.current);
        }
        setIsRunning(!isRunning);
    };

    //function to reset Stopwatch
    const resetStopwatch = () => {
        clearInterval(intervalRef.current);
        setElapsedTime(0);
        setIsRunning(false);
    };

    // Rendering the Stopwatch component
    return (
        <div className="stopwatch-container">
            <h1>Simple Stopwatch</h1>
            <div className="stopwatch-display">{formatTime(elapsedTime)}</div>
            <div className="stopwatch-buttons">
                <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={resetStopwatch}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;
