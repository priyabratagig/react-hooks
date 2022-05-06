import React, { Component } from 'react'

export class StateCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.incrementCounter = this.incrementCounter.bind(this); //storing the reference of this
    }
    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 }); //always take object or function that returns an object
    }
    render() {
        return (
            <div>
                <p>StateCounterClass</p>
                <button onClick={this.incrementCounter}>Count {this.state.counter}</button>
            </div>
        )
    }
}

export default StateCounterClass