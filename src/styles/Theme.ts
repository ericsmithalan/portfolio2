type Typography = {
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

type Colors = {
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
};

type BreakPoints = {
    xsmall: number | string;
    small: number | string;
    medium: number | string;
    large: number | string;
    xlarge: number | string;
};

export class Theme {
    private readonly _breakpoints: BreakPoints;
    private readonly _colors: Colors;
    private readonly _typography: Typography;

    public constructor(theme: "light" | "dark") {
        this._breakpoints = {
            xsmall: 320,
            small: 600,
            medium: 960,
            large: 1280,
            xlarge: 1920
        };

        this._typography = {
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

        this._colors = {
            colorChrome: {
                high: "#f2f2f2",
                highMedium: "#e5e5e5",
                medium: "#cccccc",
                lowMedium: "#999999",
                low: "#666666"
            },
            colorBase: {
                high: "#0d0d0d",
                highMedium: "#1a1a1a",
                medium: "#262626",
                lowMedium: "#333333",
                low: "#666666"
            },
            colorAccent: {
                high: "#126ef5",
                highMedium: "#3885f7",
                medium: "#5e9cf9",
                lowMedium: "#83b3fa",
                low: "#a9cafc"
            },
            colorStatus: {
                warning: "#bcb34f",
                success: "#4fbc7b",
                danger: "#e94b35",
                error: "#bc4f4f"
            }
        };
    }

    public get breakpoints() {
        return this._breakpoints;
    }

    public get colors() {
        return this._colors;
    }

    public get typography() {
        return this._typography;
    }
}
