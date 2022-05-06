import React, { Component } from 'react'

export class EffectCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }
    logMouse = ({ clientX = 0, clientY = 0 }) => {
        this.setState({ x: clientX, y: clientY })
    };
    componentDidMount() {
        console.log('AddEventListener');
        window.addEventListener('mousemove', this.logMouse); //only need to be executed once
    };
    render() {
        return (
            <div>
                <p>EffectCounterClass Mouse Moved - {JSON.stringify(this.state)}</p>
            </div>
        )
    }
}

export default EffectCounterClass