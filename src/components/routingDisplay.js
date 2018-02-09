import React, {Component} from 'react'

export default class RoutingDisplay extends Component {

    render() {
        return(
            <div>
                {/* Sim1 42j & 42k */}
                Hello from page {this.props.match.params.page}
                <br/>
                You can go to any page by adding any random number to the end of the url
            </div>
        )
    }
}