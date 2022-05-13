import React, { useReducer, createContext } from 'react'
export const countContext = createContext();
const initialState = 0;
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'
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
export function ContextProvider({ children }) {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <countContext.Provider value={[count, dispatch]}>
            {children}
        </countContext.Provider>
    )
}
