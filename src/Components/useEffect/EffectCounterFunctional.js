import React, { useState, useEffect } from 'react'

function EffectCounterFunctional() {
    const [count, setCount] = useState(0);
    // const updateCount = () => {
    //     setCount(count + 1);
    //     // setCount(count => count + 1); solution-2
    // };
    useEffect(() => {
        const updateCount = () => {
            setCount(count + 1);
            // whenever need to call a function inside useEffect define it inside useEffect, that way don't forget to keep track of props and states dependency
        };
        const interval = setInterval(updateCount, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count]); //run only once
    // useEff with empty dependency
    // will run once and don't watch changes any veriable
    // at re-render count is changed and upCount's count rfferencing old count
    // Dependency array is not to when re-run the effect, instade let react know everything that effect must watch for changes
    return (
        <div>
            <p>EffectCounterFunctional Count - {count}</p>
        </div>
    )
}

export default EffectCounterFunctional