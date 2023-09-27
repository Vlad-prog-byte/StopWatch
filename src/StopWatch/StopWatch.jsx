import './StopWatch.css';
import React, { useState, useEffect } from "react";


const StopWatch = () => {
    const [isActive, SetActive] = useState(false);
    const [timer, SetTime] = useState(0);

    useEffect(() => {
        let timing = null;
        console.log("работает");
        if (isActive)
            timing = setInterval(() => {
                SetTime((timer) => timer + 10);
            }, 10)
        return () => {
            clearInterval(timing);
        };
    } , [isActive]);

    const handleActivate = (event) => {
        SetActive(!isActive);
    }

    const handleReset = (event) => {
        SetTime(0);
    }

    return(
        <div className="StopWatch">
            <div className='StopWatch__timer'>
                <span className="digits">
                    {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + ((timer / 10) % 100)).slice(-2)}
                </span>
            </div>
            <div className='StpoWatch__buttons'>
                <button className='activate' onClick={handleActivate}>
                    {isActive ? <p>Пауза</p> : <p>Старт</p>}
                </button>
                <button className='reset' onClick={handleReset}><p>Обновить</p></button>
            </div>
        </div>
    );
}

export default StopWatch;