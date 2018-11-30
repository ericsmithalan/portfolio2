import { ITheme } from '@src';
import { DarkTheme, LightTheme } from '@theme';

interface IGlobalProps {
    onThemeChanged<T>(property: string, value: T): void;
}

export class Globals {
    private static _instance: Globals;
    private readonly props: IGlobalProps;
    private _themeType: "dark" | "light";
    private _theme: ITheme;

    public static get instance(): Globals {
        return this._getInstance();
    }

    public propertyChanged<T>(property: string, value: T): void {}

    public get themeType(): "dark" | "light" {
        if (!this._themeType) {
            this._themeType = "dark";
        }

        return this._themeType;
    }

    public set themeType(value: "dark" | "light") {
        if (this._themeType != value) {
            this._themeType = value;
            this.propertyChanged("themeType", value);
        }
    }

    public get theme(): ITheme {
        if (!this._theme) {
            if (this.themeType === "dark") {
                this._theme = new DarkTheme();
            } else {
                this._theme = new LightTheme();
            }
        }

        return this._theme;
    }

    private static _getInstance(): Globals {
        if (!Globals.instance) {
            Globals._instance = new Globals();
        }
        return Globals.instance;
    }
}
