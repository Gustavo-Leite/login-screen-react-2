import { Grid } from '@mui/material';
import LogoNetflix from '../assets/logo-netflix.png';

export const Logo = () => {
  return(
    <Grid container>
      <img src={LogoNetflix} style={{ width: '200px', height: '70px' }} />
    </Grid>
  )
}