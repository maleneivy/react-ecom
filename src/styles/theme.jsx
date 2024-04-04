import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        red: 'var(--color-red)',
        light: 'var(--color-light',
    },
    font: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
    },
    borderRadius: {
        smooth: '9px',
        smoothTop: '9px 9px 0 0',
    },
};

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme; 
