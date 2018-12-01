import { DarkTheme, LightTheme } from "@app";

import { ITheme } from "@theme";

export type ThemeName = "dark" | "light";

export class Globals {
	private static _rootElementId: string;
	private static _themeName: ThemeName;
	private static _theme: ITheme;

	public static get rootElementId() {
		if (!this._rootElementId) {
			this._rootElementId = "root";
		}

		return this._rootElementId;
	}

	public static set rootElementId(value: string) {
		if (this._rootElementId != value) {
			this._rootElementId = value;
		}
	}

	public static get themeName(): ThemeName {
		if (!this._themeName) {
			this.setTheme("dark");
		}
		return this._themeName;
	}

	public static setTheme(name: ThemeName) {
		if (name != this._themeName) {
			this._themeName = name;

			if (name === "dark") {
				this._theme = new DarkTheme();
			} else {
				this._theme = new LightTheme();
			}

			const root: HTMLElement = document.getElementById(Globals.rootElementId);
			root.setAttribute("class", `app ${name}`);
		}
	}

	public static get theme(): ITheme {
		if (!this._theme) {
			this.setTheme("dark");
		}
		return this._theme;
	}
}
