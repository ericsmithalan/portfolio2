import "@styles";

import { AboutPage, HomePage, ProjectPage } from "@pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import { Globals } from "@app";

export interface IAppProps {}

export interface IAppState {
	themeType: string;
}

export class App extends Component<IAppProps, IAppState> {
	public constructor(props: IAppProps) {
		super(props);
		Globals.instance.themeType = "light";

		this.state = {
			themeType: Globals.instance.themeType
		};
	}

	public componentWillMount() {
		const root: HTMLElement = document.getElementById("root");
		root.setAttribute("class", `app ${this.state.themeType}`);
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
