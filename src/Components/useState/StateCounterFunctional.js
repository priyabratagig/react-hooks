import React, { useState } from 'react'

function StateCounterFunctional() {
    const [state, setState] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            {/* need to copy the object and assign updates */}
            <input type="name" value={state.firstName} onChange={(e) => { setState({ ...state, firstName: e.target.value }) }} />
            <input type="name" value={state.lastName} onChange={(e) => { setState({ ...state, lastName: e.target.value }) }} />
            <p>{JSON.stringify(state)}</p>
        </div>
    )
}

export default StateCounterFunctional