import { ThemeProvider } from '@mui/material';
import { LoginScreen } from './pages/LoginScreen';
import { LightTheme } from './shared/theme';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <LoginScreen />
    </ThemeProvider>
  );
};