import React, { useState } from 'react'

function StateCounterFunctional() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>StateCounterFunctional</p>
            <button onClick={() => setCounter(counter + 1)}>Count {counter}</button>
        </div>
    )
}

export default StateCounterFunctional