import React, { useRef, useState } from 'react'

const Timer = () => {
    const timerRef = useRef() //creater reference
    const [message, setMessage] = useState("Wait for 3 Seconds....")
    function handleStartTimer() {
        timerRef.current = setTimeout(() => { 
            setMessage("Time's Up!")
        }, 3000)

    }
    function handleStopTimer() {
        clearTimeout(timerRef.current); //Timer-ID Clear
        setMessage("Timer Stopped!")

    }

    return (
        <div>
            <p>{message}</p>
            <button onClick={handleStartTimer}>Start Timer</button>
            <button onClick={handleStopTimer}>Stop Timer</button>
        </div>
    )
}

export default Timer