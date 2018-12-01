import {
	IFontFamilies,
	IFontSizes,
	ILayoutBreakpoints,
	IMonochromaticColors,
	INotificationColors,
	IPointerEventColors
} from "@theme";

export interface ITheme {
	fontFamilies: IFontFamilies;
	fontSizes: IFontSizes;
	layoutBreakpoints: ILayoutBreakpoints;
	chromeColors: IMonochromaticColors;
	baseColors: IMonochromaticColors;
	accentColors: IMonochromaticColors;
	iconColors: IPointerEventColors;
	notificationColors: INotificationColors;
}
