import { Theme } from "@core";

export const LightTheme: Theme = {
    breakpoints: {
        xsmall: 320,
        small: 600,
        medium: 960,
        large: 1280,
        xlarge: 1920
    },
    typography: {
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
    },
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
