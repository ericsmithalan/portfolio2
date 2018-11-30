import '@styles/_index.scss';

import { AboutPage, HomePage, ProjectPage } from '@pages';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export class App extends Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={HomePage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/project" component={ProjectPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
