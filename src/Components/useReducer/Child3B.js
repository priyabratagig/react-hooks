import React, { useContext } from 'react'
import { countContext, INCREMENT, DECREMENT, RESET } from './ContextStore';

function Child3B() {
    const [count, dispatch] = useContext(countContext);
    return (
        <div>
            <p>Child3B Count - {count}</p>
            <button onClick={() => dispatch(INCREMENT)}>Increase</button>
            <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
            <button onClick={() => dispatch(RESET)}>Reset</button>
        </div>
    )
}

export default Child3B