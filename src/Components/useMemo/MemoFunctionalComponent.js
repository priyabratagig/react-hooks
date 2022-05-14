import React, { useState, useMemo } from 'react'

function MemoFunctionalComponent() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne]);
    // cash the result, with dependecy array
    // used for hebby execution fucntion
    return (
        <div>
            <p>MemoFunctionalComponent</p>
            <button onClick={() => setCounterOne(counterOne + 1)}>CounterOne {counterOne}</button>
            <p>CounterOne {isEven ? 'Even' : 'Odd'}</p>
            <button onClick={() => setCounterTwo(counterTwo + 1)}>CounterTwo {counterTwo}</button>
        </div>
    )
}

export default MemoFunctionalComponent