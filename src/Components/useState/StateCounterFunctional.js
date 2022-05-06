import React, { useState } from 'react'

function StateCounterFunctional() {
    const [counter, setCounter] = useState(0);
    const incrementCounterFive = () => setCounter(counter => counter + 1)
    return (
        <div>
            <p>StateCounterFunctional Counter - {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment 1</button>
            <button onClick={() => { for (let i of [1, 2, 3, 4, 5]) incrementCounterFive() }}>Increment 5</button>
        </div>
    )
}

export default StateCounterFunctional