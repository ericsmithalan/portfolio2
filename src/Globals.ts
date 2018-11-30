import { Theme } from '@styles/Theme';

export class Globals {
    private static _theme: Theme;

    public static get theme(): Theme {
        if (!this._theme) {
            this._theme = new Theme("light");
        }

        return this._theme;
    }
}
