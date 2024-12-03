import './PromoBanner.css'
import React, {useEffect, useState} from "react"

function PromotionalBanner() {

    const deadline = new Date("2024-12-03T23:59:59");

    const [remainingTime, setRemainingTime] = useState(deadline.getTime() - Date.now())

    useEffect(() => {
        if (remainingTime > 0) {
            setTimeout(() => setRemainingTime(remainingTime - 1000), 1000);
        } 
        console.log(new Date(remainingTime));
    })


    return (
        <div className="banner">
            <p className='banner-text'>SPEND $75, GET $100 PROMO CODE</p>
            <p className='banner-text'>CYBER DEAL. HURRY, ENDS 12/3!</p>
            <div className='timers'>
                <TimerElement value={Math.floor(remainingTime / (1000 * 60 * 60 * 24))} label='Days'></TimerElement>
                <TimerElement value={Math.floor(remainingTime / (1000 * 60 * 60) % 24 )} label='Hours'></TimerElement>
                <TimerElement value={Math.floor(remainingTime / (1000 * 60) % 60 )} label='Minutes'></TimerElement>
                <TimerElement value={Math.floor(remainingTime / (1000) % 60 )} label='Seconds'></TimerElement>
            </div>
        </div>
    )
}

function TimerElement({ value, label }: { value: number; label: string }) {
    return (
        <div className='timer-element'>
            <p className='timer-element-value'>{value.toString().padStart(2, '0')}</p>
            <p className='timer-element-label'>{label}</p>
        </div>
    )
}

export default PromotionalBanner
