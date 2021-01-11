import React, { useState } from 'react';
import './colorBox.css'

function getRandomColor() {
    const colorList = ['blue', 'green', 'pink', 'black', 'yellow']
    return colorList[Math.floor(Math.random() * (colorList.length))]
}

function ColorBox() {
    const [color, setColor] = useState(localStorage.getItem('color')||'deeppink')

    function handleColorBoxClick() {
        const newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem('color', newColor)
    }
    return (
        <div className="color-box"
            style={{ background: color }}
            onClick={handleColorBoxClick}>
            ColorBox
        </div>
    );
}

export default ColorBox;