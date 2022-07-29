import { createTheme } from "@mui/material"


export const theme  = createTheme({
    palette:{
        primary:{
            main: "#6C63FF",
            lightGreen: '#A8A4CE',
            grey: '#637381',
            lightGrey: "#F2F3F5",
            black: '#000000',
            white: '#ffffff',
            darkGreen: '#A8A4CE'
        },
        secondary:{
            main: "#6C63FF"
        },
        other:{
            main: "#A8A4CE"
        },

    },
    border:{
        auth: "20px",
        regular: "10px",
        min: '5px',
    },
    fonts:{
        rSmall: "14px",
        small: '15px',
        medium: '20px',
        sm: '24px',
        large: "45px",
        iconFont:'18px',
        sl: '34px',
    }
});