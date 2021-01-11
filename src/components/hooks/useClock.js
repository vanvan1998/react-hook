import { useEffect, useState } from 'react';

function useClock() {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const interval=setInterval(() => {
            const now = new Date();
            setTimeString(now.toLocaleTimeString())
        }, 1000);
        return () => {
            clearInterval(interval);
        }

    }, [])
    return timeString;
}

export default useClock;