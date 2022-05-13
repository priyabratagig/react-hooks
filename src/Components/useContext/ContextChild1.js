import React from 'react'
import ContextChild2 from './ContextChild2'

function ContextChild1() {
    return (
        <div>
            ContextChild1
            <ContextChild2 />
        </div>
    )
}

export default ContextChild1