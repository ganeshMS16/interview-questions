import React from 'react'
import { useState, useRef } from "react";

function PlayPause() {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        if (!useRef.current) {
            useRef.current = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000)
        }
    }
    const stopClick = () => {
        if (useRef.current) {
            clearInterval(useRef.current)
            useRef.current = null
        }
    }
    return (
        <div className="App">
            <button onClick={handleClick}>Inc</button>
            {count}
            <button onClick={stopClick}>Pause</button>
        </div>
    );
}

export default PlayPause