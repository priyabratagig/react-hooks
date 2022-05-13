import React from 'react'
import { nameContext, hobbyContext } from './ContextStore'
function ContextChild3() {
    return (
        <div>
            ContextChild3
            <nameContext.Consumer>
                {(valueName) => {
                    return (<hobbyContext.Consumer>
                        {(valueHobby) => <p>My name is {valueName}, I'm {valueHobby}</p>}
                    </hobbyContext.Consumer>)
                }}
            </nameContext.Consumer>
        </div>
    )
}

export default ContextChild3