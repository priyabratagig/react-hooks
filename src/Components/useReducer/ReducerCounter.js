import React, { useReducer } from 'react'
//useReducer is used for state management
//useState is built with useReducer
//when dealing multiple state variable with same state transition, good to use multiple useReducer
const initialState = 0;
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const reducer = (state, action) => {
    switch (action) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return initialState;
        default:
            return state;
    };
}
function ReducerCounter() {
    const [firstCount, dispatchFirst] = useReducer(reducer, initialState);
    const [secondCount, dispatchSecond] = useReducer(reducer, initialState);
    return (
        <div>
            <p>ReducerCounter</p>
            <p>Count - {firstCount}</p>
            <button onClick={() => dispatchFirst(INCREMENT)}>Increment</button>
            <button onClick={() => dispatchFirst(DECREMENT)}>Decrement</button>
            <button onClick={() => dispatchFirst(RESET)}>Reset</button>
            <p>Second-Count - {secondCount}</p>
            <button onClick={() => dispatchSecond(INCREMENT)}>Increment</button>
            <button onClick={() => dispatchSecond(DECREMENT)}>Decrement</button>
            <button onClick={() => dispatchSecond(RESET)}>Reset</button>
        </div>
    )
}

export default ReducerCounter