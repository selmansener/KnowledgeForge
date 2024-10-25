import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/500.css'; // Medium
import '@fontsource/poppins/600.css'; // Semi-Bold
import '@fontsource/poppins/700.css'; // Bold

import { createTheme, responsiveFontSizes } from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import React from "react";

export const LinkBehavior = React.forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
    const { href, ...other } = props;
    return <RouterLink ref={ref} to={href} {...other} />;
});

declare module '@mui/material/styles' {
    interface Components {
        MuiPickersDay?: {
            styleOverrides?: {
                root?: {
                    // Add any other properties you want to override
                    '&.Mui-disabled'?: React.CSSProperties;
                };
            };
        };
    }
}

const shadows = [
    'none', // level 0
    '0px 1px 3px rgba(0, 0, 0, 0.1)', // level 1
    '0px 2px 4px rgba(0, 0, 0, 0.15)', // level 2
    '0px 3px 6px rgba(0, 0, 0, 0.2)', // level 3
    '0px 4px 8px rgba(0, 0, 0, 0.25)', // level 4
    '0px 5px 10px rgba(0, 0, 0, 0.3)', // level 5
    '0px 6px 12px rgba(0, 0, 0, 0.35)', // level 6
    '0px 7px 14px rgba(0, 0, 0, 0.4)', // level 7
    '0px 8px 16px rgba(0, 0, 0, 0.45)', // level 8
    '0px 9px 18px rgba(0, 0, 0, 0.5)', // level 9
    '0px 10px 20px rgba(0, 0, 0, 0.55)', // level 10
    '0px 11px 22px rgba(0, 0, 0, 0.6)', // level 11
    '0px 12px 24px rgba(0, 0, 0, 0.65)', // level 12
    '0px 13px 26px rgba(0, 0, 0, 0.7)', // level 13
    '0px 14px 28px rgba(0, 0, 0, 0.75)', // level 14
    '0px 15px 30px rgba(0, 0, 0, 0.8)', // level 15
    '0px 16px 32px rgba(0, 0, 0, 0.85)', // level 16
    '0px 17px 34px rgba(0, 0, 0, 0.9)', // level 17
    '0px 18px 36px rgba(0, 0, 0, 0.95)', // level 18
    '0px 19px 38px rgba(0, 0, 0, 1)', // level 19
    '0px 20px 40px rgba(0, 0, 0, 1)', // level 20
    '0px 21px 42px rgba(0, 0, 0, 1)', // level 21
    '0px 22px 44px rgba(0, 0, 0, 1)', // level 22
    '0px 23px 46px rgba(0, 0, 0, 1)', // level 23
    '0px 24px 48px rgba(0, 0, 0, 1)', // level 24
  ];

const mdTheme = createTheme({
    colorSchemes: { 
        light: true, 
        dark: true 
    },
    cssVariables: {
        colorSchemeSelector: 'class'
    },
    typography: {
        // Define global font family
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',

        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2.25rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.4,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.6,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.35,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
        },

    },
    shadows: shadows as any
});

export const defaultTheme = responsiveFontSizes(mdTheme, {
    factor: 4
});