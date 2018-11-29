export interface Theme {
    breakpoints: {
        xsmall: number | string;
        small: number | string;
        medium: number | string;
        large: number | string;
        xlarge: number | string;
    };
    typography: {
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
    };
    colorChrome: {
        high: string;
        highMedium: string;
        medium: string;
        lowMedium: string;
        low: string;
    };
    colorBase: {
        high: string;
        highMedium: string;
        medium: string;
        lowMedium: string;
        low: string;
    };
    colorAccent: {
        high: string;
        highMedium: string;
        medium: string;
        lowMedium: string;
        low: string;
    };
    colorStatus: {
        warning: string;
        success: string;
        danger: string;
        error: string;
    };
}
