import React, { Component } from 'react'

export class EffectCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: '',
        };
    }
    componentDidMount() {
        document.title = `Class Clicked ${this.state.count}` //same code writen twice
    };
    componentDidUpdate(previousProps, previousState) {
        if (previousState.count !== this.state.count) { //run side effect with condition
            console.log('Document title updated')
            document.title = `Class Clicked ${this.state.count}` //same code writen twice
        }
    }
    render() {
        return (
            <div>
                <p>EffectCounterClass</p>
                <input type="name" value={this.state.name} onChange={({ target: { value } }) => this.setState({ ...this.state, name: value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Cliked {this.state.count}</button>
            </div>
        )
    }
}

export default EffectCounterClass