import {
  Grid,
  Button,
  useTheme,
  TextField,
  InputAdornment,
  Divider
} from '@mui/material';


import { AccountCircle, LockRounded } from '@mui/icons-material';

import BackgroundNetflix from '../assets/background.jpg';
import { Logo } from '../components/Logo';

export const LoginScreen = () => {
  const theme = useTheme();
  return (
    <Grid container bgcolor='#333' style={{ minHeight: '100vh' }}>
      <Grid container xs={12} sm={6}>
        <img src={BackgroundNetflix} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='background' />
      </Grid>
      <Grid
        container
        xs={12}
        sm={6}
        direction={'column'}
        justifyContent={'center'}
        alignContent={'center'}
        bgcolor={'/'}>
        <Grid container sm={4} justifyContent={'center'}>
          <Grid item marginBottom={5}>
            <Logo />
          </Grid>
          <Grid container sm={12} justifyContent={'center'}>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
            <TextField
              type="password"
              label="Password"
              margin="normal"
              InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
            <Grid
              container
              marginTop={3}
              gap={1}
              justifyContent={'center'}>
              <Button
                color='primary'
                variant='contained'
                sx={{ width: '100%' }}>
                Log in
              </Button>
              <Button
                variant="text"
              >
                Forgot password?
              </Button>
            </Grid>
            <Divider sx={{ border: '1px solid gray', width: '100%', margin: 5 }} />
          </Grid>
          <Grid container>
            <Button
              variant='outlined' sx={{ width: '100%' }}
            >
              Sing up
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};