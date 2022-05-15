import React from 'react'
import useDocumentTitle from './useDocumentTitle'
function DocumentTitle() {
    const [clicks, setClicks] = useDocumentTitle(0);
    return (
        <div>
            <p>DocumentTitle</p>
            <button onClick={() => setClicks(clicks + 1)}>Add Clicked - {clicks}</button>
            <button onClick={() => setClicks(0)}>Reset</button>
        </div>
    )
}

export default DocumentTitle