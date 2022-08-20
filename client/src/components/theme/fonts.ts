// import {palette} from './palette';

const antiAliasing = {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
};

const font = {
    primary: {
        light: {
            fontFamily: 'Roboto',
            fontWeight: 300,
            ...antiAliasing,
        },
        regular: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            ...antiAliasing,
        },
        medium: {
            fontFamily: 'Roboto',
            fontWeight: 500,
            ...antiAliasing,
        },
        bold: {
            fontFamily: 'Roboto',
            fontWeight: 700,
            ...antiAliasing,
        },
    },
    secondary: {
        regular: {
            fontFamily: 'Poppins',
            fontWeight: 400,
            ...antiAliasing,
        },
        medium: {
            fontFamily: 'Poppins',
            fontWeight: 500,
            ...antiAliasing,
        },
        bold: {
            fontFamily: 'Poppins',
            fontWeight: 700,
            ...antiAliasing,
        },
    },
    third: {
        regular: {
            fontFamily: 'Merriweather',
            fontWeight: 400,
            ...antiAliasing,
        },
        medium: {
            fontFamily: 'Merriweather',
            fontWeight: 500,
            ...antiAliasing,
        },
        bold: {
            fontFamily: 'Merriweather',
            fontWeight: 700,
            ...antiAliasing,
        },
    },
    anton: {
        regular: {
            fontFamily: 'Anton',
            fontWeight: 400,
            ...antiAliasing,
        },
        medium: {
            fontFamily: 'Anton',
            fontWeight: 500,
            ...antiAliasing,
        },
        bold: {
            fontFamily: 'Anton',
            fontWeight: 700,
            ...antiAliasing,
        },
    },
    DMSans: {
        regular: {
            fontFamily: 'DMSans',
            fontWeight: 400,
            ...antiAliasing,
        },
        medium: {
            fontFamily: 'DMSans',
            fontWeight: 500,
            ...antiAliasing,
        },
        bold: {
            fontFamily: 'DMSans',
            fontWeight: 700,
            ...antiAliasing,
        },
    },
};

export const mixins = {
    font,
};
