import "@styles";

import { AboutPage, HomePage, ProjectPage } from "@pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Globals, ThemeName } from "@app";
import React, { Component } from "react";

export interface IAppProps {}

export interface IAppState {
	themeName: ThemeName;
}

export class App extends Component<IAppProps, IAppState> {
	public constructor(props: IAppProps) {
		super(props);

		Globals.rootElementId = "root";

		this.state = {
			themeName: Globals.themeName
		};
	}

	public componentWillMount() {
		Globals.setTheme("light");
	}

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
