import React, { Component } from 'react'

export class RefClassComponent extends Component {
    interval;
    state = {
        count: 0,
    };
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p>RefClassComponent</p>
                <p>Count - {this.state.count}</p>
                <button onClick={() => clearInterval(this.interval)}>Stop Count</button>
            </div>
        )
    }
}

export default RefClassComponent