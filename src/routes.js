import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import RoutingDisplay from './components/routingDisplay'

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path='/:page'
                        component={RoutingDisplay} />
                </Switch>
            </div>
        )
    }
}