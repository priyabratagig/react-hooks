import React, { useReducer } from 'react'
//useReducer is used for state management
//useState is built with useReducer
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
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>ReducerCounter</p>
            <p>Count - {count}</p>
            <button onClick={() => dispatch(INCREMENT)}>Increment</button>
            <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
            <button onClick={() => dispatch(RESET)}>Reset</button>
        </div>
    )
}

export default ReducerCounter