import React, { useState, useEffect } from 'react'

function EffectCounterFunctional() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = `Function Clicked ${counter}`
    })
    return (
        <div>
            <p>EffectCounterFunctional</p>
            <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
        </div>
    )
}

export default EffectCounterFunctional