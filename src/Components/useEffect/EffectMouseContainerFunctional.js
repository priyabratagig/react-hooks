import React, { useState } from 'react'
import EffectCounterFunctional from './EffectCounterFunctional';

function EffectMouseContainerFunctional() {
    const [toggleDisplay, SetToggleDisplay] = useState(true);
    return (
        <div>
            <p>EffectMouseContainerFunctional</p>
            <button onClick={() => SetToggleDisplay(!toggleDisplay)}>Toggle</button>
            {toggleDisplay && <EffectCounterFunctional />}
        </div>
    )
}

export default EffectMouseContainerFunctional