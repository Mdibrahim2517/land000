export default function themePalette(theme) {
    return {
        mode: theme?.customization?.navType,
        common: {
            black: theme.colors?.darkPaper
        },
        primary: {
            light: theme.colors?.primaryLight,
            main: theme.colors?.primaryMain,
            dark: theme.colors?.primaryDark,
            200: theme.colors?.primary200,
            800: theme.colors?.primary800
        },
        secondary: {
            light: theme.colors?.secondaryLight,
            main: theme.colors?.secondaryMain,
            dark: theme.colors?.secondaryDark,
            200: theme.colors?.secondary200,
            800: theme.colors?.secondary800
        },
        error: {
            light: theme.colors?.errorLight,
            main: theme.colors?.errorMain,
            dark: theme.colors?.errorDark
        },
        orange: {
            light: theme.colors?.orangeLight,
            main: theme.colors?.orangeMain,
            dark: theme.colors?.orangeDark
        },
        warning: {
            light: theme.colors?.warningLight,
            main: theme.colors?.warningMain,
            dark: theme.colors?.warningDark
        },
        success: {
            light: theme.colors?.successLight,
            200: theme.colors?.success200,
            main: theme.colors?.successMain,
            dark: theme.colors?.successDark
        },
        grey: {
            50: theme.colors?.grey50,
            100: theme.colors?.grey100,
            500: theme.darkTextSecondary,
            700: theme.colors?.grey700,
            // 700: theme.darkTextPrimary,
            900: theme.textDark
        },
        dark: {
            light: theme.colors?.darkTextPrimary,
            main: theme.colors?.darkLevel1,
            dark: theme.colors?.darkLevel2,
            800: theme.colors?.darkBackground,
            900: theme.colors?.darkPaper
        },
        text: {
            primary: theme.darkTextPrimary,
            secondary: theme.darkTextSecondary,
            dark: theme.textDark,
            hint: theme.colors?.grey100
        },
        background: {
            paper: theme.paper,
            default: theme.backgroundDefault
        },
        facebook: '#000',
        instagram: '#323',
        youtube: '#dsd323',
        alphabet: {
            a: '#EF5350',
            b: '#C62828',
            c: '#E91E63',
            d: '#880E4F',
            e: '#9C27B0',
            f: '#4A148C',
            g: '#673AB7',
            h: '#311B92',
            i: '#3F51B5',
            j: '#1A237E',
            k: '#2196F3',
            l: '#0D47A1',
            m: '#FF1744',
            n: '#C51162',
            o: '#AA00FF',
            p: '#006064',
            q: '#004D40',
            r: '#33691E',
            s: '#607D8B',
            t: '#4E342E',
            u: '#FF5722',
            v: '#8BC34A',
            w: '#4CAF50',
            x: '#009688',
            y: '#00BCD4',
            z: '#03A9F4',
        }
    };
}
