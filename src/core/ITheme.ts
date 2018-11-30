export interface ITypography {
    familyBody: string;
    familyHeading: string;
    sizeBody: number | string;
    sizeH1: number | string;
    sizeH2: number | string;
    sizeH3: number | string;
    sizeH4: number | string;
    sizeH5: number | string;
    sizeH6: number | string;
    sizeSmall: number | string;
}

export interface IColorScheme {
    high: string;
    highMedium: string;
    medium: string;
    lowMedium: string;
    low: string;
}

export interface IStatusColors {
    warning: string;
    success: string;
    danger: string;
    error: string;
}
export interface IStateColors {
    normal: string;
    hover: string;
    press: string;
}

export interface IBreakPoints {
    xsmall: number | string;
    small: number | string;
    medium: number | string;
    large: number | string;
    xlarge: number | string;
}

export interface ITheme {
    typography: ITypography;
    chromeColors: IColorScheme;
    baseColors: IColorScheme;
    accentColors: IColorScheme;
    statusColors: IStatusColors;
    iconColors: IStateColors;
}
