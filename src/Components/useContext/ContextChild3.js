import React, { useContext } from 'react'
import { nameContext, hobbyContext } from './ContextStore'
function ContextChild3() {
    const [name, setName] = useContext(nameContext);
    const [hobby, setHobby] = useContext(hobbyContext);
    return (
        <div>
            ContextChild3
            <p>My name is {name}, I'm {hobby}</p>
            <input type="name" value={name} onChange={({ target: { value } }) => { setName(value) }} />
            <input type="text" value={hobby} onChange={({ target: { value } }) => { setHobby(value) }} />
        </div>
    )
}

export default ContextChild3