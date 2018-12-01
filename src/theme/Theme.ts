import {
	IFontFamilies,
	IFontSizes,
	ILayoutBreakpoints,
	IMonochromaticColors,
	INotificationColors,
	IPointerEventColors,
	ITheme
} from "@theme";

export class Theme implements ITheme {
	public get layoutBreakpoints(): ILayoutBreakpoints {
		return {
			xsmall: 320,
			small: 600,
			medium: 960,
			large: 1280,
			xlarge: 1920
		};
	}

	public get chromeColors(): IMonochromaticColors {
		return {
			high: "#f2f2f2",
			highMedium: "#e5e5e5",
			medium: "#cccccc",
			lowMedium: "#999999",
			low: "#666666"
		};
	}

	public get baseColors(): IMonochromaticColors {
		return {
			high: "#0d0d0d",
			highMedium: "#1a1a1a",
			medium: "#262626",
			lowMedium: "#333333",
			low: "#666666"
		};
	}

	public get accentColors(): IMonochromaticColors {
		return {
			high: "#126ef5",
			highMedium: "#3885f7",
			medium: "#5e9cf9",
			lowMedium: "#83b3fa",
			low: "#a9cafc"
		};
	}

	public get notificationColors(): INotificationColors {
		return {
			warning: "#bcb34f",
			success: "#4fbc7b",
			danger: "#e94b35",
			error: "#bc4f4f"
		};
	}

	public get iconColors(): IPointerEventColors {
		return {
			default: this.chromeColors.medium,
			selected: this.accentColors.high,
			hover: this.chromeColors.highMedium,
			press: this.accentColors.highMedium
		};
	}

	public get fontFamilies(): IFontFamilies {
		return {
			body: "'Alegreya', serif",
			headers: "'Lato', sans-serif"
		};
	}

	public get fontSizes(): IFontSizes {
		return {
			h1: 48,
			h2: 32,
			h3: 28,
			h4: 24,
			h5: 18,
			h6: 16,
			small: 12,
			body: 1,
			default: 13
		};
	}
}
