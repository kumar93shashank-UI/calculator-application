import React, { Component } from 'react';

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <div className="Result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}
export default Output;