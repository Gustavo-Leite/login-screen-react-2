import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#f40612',
        dark: '#333',
        light: '#9E99FF',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#111',
        dark: '#222',
        light: '#F4B1CE',
        contrastText: '#FFFFFF',
      },
      background: {
        paper: '#FFFFFF',
        default: '#F6F5F5',
      },
    }
  });