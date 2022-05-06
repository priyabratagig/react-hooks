import React, { Component } from 'react'

export class StateCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: [],
        };
    }
    addItems = function () {
        this.setState({
            ids: [...this.state.ids, { id: this.state.ids.length, value: Math.floor(Math.random() * 10) + 1 }]
        },
            () => { alert('Added ' + JSON.stringify(this.state.ids[this.state.ids.length - 1])); } //immediately invoked after evry setState call
        );
    }
    render() {
        return (
            <div>
                {/* need to copy the array and assign updates */}
                <button onClick={() => this.addItems()}>Add Item</button>
                {this.state.ids.map(ele => (<p key={ele.id}>{ele.id} - {ele.value}</p>))}
            </div>
        )
    }
}

export default StateCounterClass