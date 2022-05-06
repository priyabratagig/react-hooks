import React, { useState } from 'react'

function StateCounterFunctional() {
    const [state, setState] = useState([]);
    return (
        <div>
            {/* need to copy the array and assign updates */}
            <button onClick={() => setState([...state, { id: state.length, value: Math.floor(Math.random(10) + 1) }])}>Add Item</button>
            {state.map(ele => (<p key={ele.id}>{ele.id} - {ele.value}</p>))}
        </div>
    )
}

export default StateCounterFunctional