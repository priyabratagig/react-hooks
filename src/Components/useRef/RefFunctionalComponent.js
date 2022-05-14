import React, { useEffect, useRef } from 'react'

function RefFunctionalComponent() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <div>
            <p>RefFunctionalComponent</p>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default RefFunctionalComponent