import React, { memo } from 'react'

function Title() {
    console.log('Rendering - Title');
    return (
        <h1>useCallback Hook</h1>
    )
}

export default memo(Title)