import React, { useReducer } from 'react'
//useReducer is used for state management
//useState is built with useReducer
const initialState = {
    firstCounter: 0,
    secondCounter: 0,
};
const INCREMENT_FIRST = 'INCREMENT_FIRST'
const DECREMENT_FIRST = 'DECREMENT_FIRST'
const RESET_FIRST = 'RESET_FIRST'
const INCREMENT_SECOND = 'INCREMENT_SECOND'
const DECREMENT_SECOND = 'DECREMENT_SECOND'
const RESET_SECOND = 'RESET_SECOND'
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_FIRST:
            return { ...state, firstCounter: state.firstCounter + action.value };
        case DECREMENT_FIRST:
            return { ...state, firstCounter: state.firstCounter - action.value };
        case RESET_FIRST:
            return { ...state, firstCounter: initialState.firstCounter };
        case INCREMENT_SECOND:
            return { ...state, secondCounter: state.secondCounter + action.value };
        case DECREMENT_SECOND:
            return { ...state, secondCounter: state.secondCounter - action.value };
        case RESET_SECOND:
            return { ...state, secondCounter: initialState.secondCounter };
        default:
            return { ...state };
    };
}
function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>ReducerCounter</p>
            <p>First-Count - {count.firstCounter}</p>
            <button onClick={() => dispatch({ type: INCREMENT_FIRST, value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT_FIRST, value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: RESET_FIRST })}>Reset</button>
            <p>Second-Count - {count.secondCounter}</p>
            <button onClick={() => dispatch({ type: INCREMENT_SECOND, value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT_SECOND, value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: RESET_SECOND })}>Reset</button>
        </div>
    )
}

export default ReducerCounter