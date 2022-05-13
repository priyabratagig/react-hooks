import React, { useContext } from 'react'
import { nameContext, hobbyContext } from './ContextStore'
function ContextChild3() {
    const valueName = useContext(nameContext);
    const valueHobby = useContext(hobbyContext);
    return (
        <div>
            ContextChild3
            <p>My name is {valueName}, I'm {valueHobby}</p>
        </div>
    )
}

export default ContextChild3