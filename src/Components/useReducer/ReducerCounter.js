import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
//useReducer is used for state management
//useState is built with useReducer
const initialState = {
    loading: false,
    post: { id: '' },
    error: '',
};
const REQUESTED = 'REQUESTED'
const REQUEST_FAILED = 'REQUEST_FAILED'
const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
const reducer = (state, action) => {
    switch (action.type) {
        case REQUESTED:
            return { error: '', loading: true, post: { id: action.payload } };
        case REQUEST_FAILED:
            return { ...initialState, error: action.payload, post: { id: state.post.id } };
        case REQUEST_SUCCESS:
            return { ...initialState, post: action.payload };
        default:
            return { ...state };
    };
}
function ReducerCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        if (state.post.id === '') return;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${state.post.id}`)
            .then((response) => dispatch({ type: REQUEST_SUCCESS, payload: response.data }))
            .catch(({ message }) => dispatch({ type: REQUEST_FAILED, payload: message }));
    }, [state.post.id]);
    return (
        <div>
            <p>ReducerCounter</p>
            <input type="number" value={state.post.id} onChange={({ target: { value } }) => dispatch({ type: REQUESTED, payload: value })} />
            {state.loading ?
                <p>...loading</p> :
                state.error === '' ? (
                    <>
                        <p>Post Title: {state.post.title}</p>
                        <p>Post body: {state.post.body}</p>
                    </>
                ) :
                    <p>Error: {state.error}</p>}
        </div>
    )
}

export default ReducerCounter