import { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
    const colorList = ['blue', 'green', 'pink', 'black', 'yellow']
    const currentIndex = colorList.indexOf(currentColor)
    var newIndex = currentIndex

    while (newIndex === currentIndex) {
        newIndex = Math.floor(Math.random() * (colorList.length))
    }
    return colorList[newIndex]
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')

    useEffect(() => {
        const interval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor)
            colorRef.current = newColor
            console.log(newColor);
        }, 1000);
        return () => {
            clearInterval(interval);
        }

    }, [])
    return color;
}

export default useMagicColor;