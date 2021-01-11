import React from 'react';
import useClock from '../../hooks/useClock';
import useMagicColor from '../../hooks/useMagicColor';
import './clock2.css'

Clock2.propTypes = {

};

function Clock2() {
    const timeString = useClock()
    const color = useMagicColor()
    
    return (
        <div className='clock2' style={{backgroundColor: color}}>
            <p className='clock2__time'>{timeString}</p>
        </div>
    );
}

export default Clock2;