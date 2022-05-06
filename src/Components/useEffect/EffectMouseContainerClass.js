import React, { Component } from 'react'
import EffectCounterClass from './EffectCounterClass'

export class EffectMouseContainerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDisplay: true,
        };
    };
    render() {
        return (
            <div>
                <p>EffectMouseContainerClass</p>
                <button onClick={() => this.setState({ toggleDisplay: !this.state.toggleDisplay })}>Toggle</button>
                {this.state.toggleDisplay && <EffectCounterClass />}
            </div>
        )
    }
}

export default EffectMouseContainerClass