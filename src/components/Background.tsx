import { Grid } from '@mui/material';
import BackgroundNetflix from '../assets/background.jpg';

export const Background = () => {
  return(
    <Grid container>
      <img src={BackgroundNetflix} style={{ width: '100%', height: '100%' }} />
    </Grid>
  )
}