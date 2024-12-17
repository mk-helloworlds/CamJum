import {extendTheme} from '@chakra-ui/react';

const breakpoints = {
    // sm: "320px",
    // md: "768px",
    // lg: "960px",
    // xl: "1200px",
    // "2xl": "1536px",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
};

const camjumTheme = extendTheme({
    colors: {
        primary: '#201D29',
    },
    breakpoints: breakpoints,
    fonts: {
        heading: "Poppins, Kantumruy",
        body: "Poppins, Kantumruy",
    },
});

export default camjumTheme;