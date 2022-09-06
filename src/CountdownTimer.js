import React, { useState, useEffect } from 'react';

export default function CountdownTimer(props) {
    const {initialSeconds = 0} = props;
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [tenths, setTenths] = useState(0)
    const [maxSeconds, setMaxSeconds] = useState(seconds)
    
    const [secondsCounter, setSecondsCounter] = useState(0)

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds === maxSeconds){
                setSeconds(seconds - 1);
            }
            if (seconds > 0 && secondsCounter === 10) {
                setSeconds((e) => e - 1);
                setSecondsCounter(0)
                setTenths(9)
            }
            if (tenths > 0) {
                setTenths((e) => e - 1);
            }
            if (tenths === 0) {
                if (seconds === 0) {
                    setTenths(0)
                    return
                }
                setTenths(9);
            }
            setSecondsCounter((e) => e + 1)
        }, 100)
        return ()=> {
            clearInterval(myInterval);
          };
    }, [seconds, tenths]);

    return (
        <div>
        <h1>{seconds}:{tenths}</h1>
        </div>
    )
}