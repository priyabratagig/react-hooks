import React, { useEffect, useRef, useState } from 'react'

function RefFunctionalComponent() {
    const [count, setCount] = useState(0);
    const interval = useRef(undefined);
    useEffect(() => {
        interval.current = setInterval(() => setCount(count => count + 1), 1000);
        return () => clearInterval(interval.current);
    });
    return (
        <div>
            <p>RefFunctionalComponent</p>
            <p>Count - {count}</p>
            <button onClick={() => clearInterval(interval.current)}>Stop Count</button>
        </div>
    )
}

export default RefFunctionalComponent