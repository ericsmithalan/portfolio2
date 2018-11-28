import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage, ProjectPage } from "@pages";

export class App extends React.Component {
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
