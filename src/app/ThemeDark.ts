import { IMonochromaticColors, Theme } from "@theme";

export class DarkTheme extends Theme {
	public get chromeColors(): IMonochromaticColors {
		return {
			high: "#222222",
			highMedium: "#333333",
			medium: "#444444",
			lowMedium: "#555555",
			low: "#666666"
		};
	}

	public get baseColors(): IMonochromaticColors {
		return {
			high: "#DEDEDE",
			highMedium: "#C4C4C4",
			medium: "#A1A1A1",
			lowMedium: "#ABABAB",
			low: "#999999"
		};
	}
}
