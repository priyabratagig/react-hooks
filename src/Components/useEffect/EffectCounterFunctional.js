import React, { useState, useEffect } from 'react'

function EffectCounterFunctional() {
    const [coOrdinates, setCoOrdinates] = useState({ x: 0, y: 0 });
    const logMouse = ({ clientX = 0, clientY = 0 }) => {
        console.log('functional mouse moved');
        setCoOrdinates({ x: clientX, y: clientY });
    };
    useEffect(() => {
        console.log('AddEventListener');
        window.addEventListener('mousemove', logMouse)
        return () => { //funtion will run before unmount or useEffect re-run
            window.removeEventListener('mousemove', logMouse);
        }
    }, []); //run only once
    return (
        <div>
            <p>EffectCounterFunctional Mouse Moved - {JSON.stringify(coOrdinates)}</p>
        </div>
    )
}

export default EffectCounterFunctional