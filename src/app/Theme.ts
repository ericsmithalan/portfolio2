import { IBreakPoints, IColorScheme, IStateColors, IStatusColors, ITheme, ITypography } from "@core";

export class Theme implements ITheme {
	public get breakpoints(): IBreakPoints {
		return {
			xsmall: 320,
			small: 600,
			medium: 960,
			large: 1280,
			xlarge: 1920
		};
	}

	public get chromeColors(): IColorScheme {
		return {
			high: "#f2f2f2",
			highMedium: "#e5e5e5",
			medium: "#cccccc",
			lowMedium: "#999999",
			low: "#666666"
		};
	}

	public get baseColors(): IColorScheme {
		return {
			high: "#0d0d0d",
			highMedium: "#1a1a1a",
			medium: "#262626",
			lowMedium: "#333333",
			low: "#666666"
		};
	}

	public get accentColors(): IColorScheme {
		return {
			high: "#126ef5",
			highMedium: "#3885f7",
			medium: "#5e9cf9",
			lowMedium: "#83b3fa",
			low: "#a9cafc"
		};
	}

	public get statusColors(): IStatusColors {
		return {
			warning: "#bcb34f",
			success: "#4fbc7b",
			danger: "#e94b35",
			error: "#bc4f4f"
		};
	}

	public get iconColors(): IStateColors {
		return {
			normal: this.chromeColors.medium,
			hover: this.chromeColors.medium,
			press: this.accentColors.highMedium
		};
	}

	public get typography(): ITypography {
		return {
			familyBody: "'Alegreya', serif",
			familyHeading: "'Lato', sans-serif",
			sizeBody: "100%",
			sizeH1: 48,
			sizeH2: 32,
			sizeH3: 28,
			sizeH4: 24,
			sizeH5: 18,
			sizeH6: 16,
			sizeSmall: 12
		};
	}
}
