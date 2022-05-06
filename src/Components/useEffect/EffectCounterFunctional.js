import React, { useState, useEffect } from 'react'

function EffectCounterFunctional() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('Document title updated')
        document.title = `Function Clicked ${counter}`
    }, [counter]); //run effect with condition
    return (
        <div>
            <p>EffectCounterFunctional</p>
            <input type="name" value={name} onChange={({ target: { value } }) => setName(value)} />
            <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
        </div>
    )
}

export default EffectCounterFunctional