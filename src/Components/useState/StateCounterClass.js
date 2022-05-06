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
    } incrementCounterFive = () => [
        this.setState(state => ({ counter: state.counter + 1 })) //will pass previous state, react execute changes in batch
    ]
    render() {
        return (
            <div>
                <p>StateCounterClass - Count - {this.state.counter}</p>
                <button onClick={this.incrementCounter}>Increment 1</button>
                <button onClick={() => { for (let i of [1, 2, 3, 4, 5]) this.incrementCounterFive() }}>Increment 5</button>
            </div>
        )
    }
}

export default StateCounterClass