import { IColorScheme } from '@src';
import { Theme } from '@styles/Theme';

export class LightTheme extends Theme {
    public get chromeColors(): IColorScheme {
        return {
            high: "#DEDEDE",
            highMedium: "#C4C4C4",
            medium: "#A1A1A1",
            lowMedium: "#ABABAB",
            low: "#999999"
        };
    }

    public get baseColors(): IColorScheme {
        return {
            high: "#222222",
            highMedium: "#333333",
            medium: "#444444",
            lowMedium: "#555555",
            low: "#666666"
        };
    }
}
