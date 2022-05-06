import React, { Component } from 'react'

export class EffectCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    };
    updateCount = () => {
        this.setState({ count: this.state.count + 1 })
    };
    componentDidMount() {
        this.interval = setInterval(this.updateCount, 1000)
    };
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p>EffectCounterClass Count -  {this.state.count}</p>
            </div>
        )
    }
}

export default EffectCounterClass