import React, { memo } from 'react'

function Count({ text = '', value = '' }) {
    console.log(`Rendering - ${text}`);
    return (
        <p>{text} - {value}</p>
    )
}

export default memo(Count)