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
};

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme; 
