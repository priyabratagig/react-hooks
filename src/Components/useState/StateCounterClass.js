import React, { Component } from 'react'

export class StateCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };
    }
    render() {
        return (
            <div>
                {/* need to copy the object to then assign updates */}
                <input type="name" value={this.state.firstName} onChange={(e) => { this.setState({ ...this.state, firstName: e.target.value }) }} />
                <input type="name" value={this.state.lastName} onChange={(e) => { this.setState({ ...this.state, lastName: e.target.value }) }} />
                <p>{JSON.stringify(this.state)}</p>
            </div>
        )
    }
}

export default StateCounterClass