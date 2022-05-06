import React, { Component } from 'react'

export class EffectCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        document.title = `Class Clicked ${this.state.count}` //same code writen twice
    };
    componentDidUpdate() {
        document.title = `Class Clicked ${this.state.count}` //same code writen twice
    }
    render() {
        return (
            <div>
                <p>EffectCounterClass</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Cliked {this.state.count}</button>
            </div>
        )
    }
}

export default EffectCounterClass