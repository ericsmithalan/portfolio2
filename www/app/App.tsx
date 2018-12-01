import './app.css';

import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages/';

export class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={HomePage} />
                    <Route path="/home" component={HomePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
