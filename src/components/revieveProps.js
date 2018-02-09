import React, { Component } from 'react'


export default class RevieveProps extends Component {
    constructor() {
        super()

        this.state = {
            timesUpdated: 0
        }
    }
    
    componentWillReceiveProps() {
        var up = ++this.state.timesUpdated
        this.setState({timesUpdated: up})
    }

    render() {
        return (
            <div>
                {this.props.value}
                <br/>
                {this.state.timesUpdated}
            </div>
        )
    }
}