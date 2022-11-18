import React, { useEffect, useState } from "react"
import { add } from 'date-fns';

interface Date {
    date: string;
}

const Timer = (props: Date): JSX.Element => {

    const countDownDate = new Date(props.date).getTime();

    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

    return (
        <div className="timer">
            <p><span>Pozostało:</span>{days} dni {hours} godzin {minutes} minut</p>
        </div>
    )
}

export default Timer