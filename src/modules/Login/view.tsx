import React from 'react';
import {
  CssBaseline,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import BarcodeSearchImg from '../../icons/barcode_search.jpg';
import { Copyright } from './components/CopyRight';
import { WithLoading } from '../../components/Spinner';
import { LoginFrom } from './components/LoginForm';

interface ILogin {
  classes: {
    [key: string]: any;
  };
  loading: boolean;
}

export const LoginView = ({ classes, loading }: ILogin) => {
  return (
    <Container component="main" className={classes.loginRoot} maxWidth={false}>
      <CssBaseline />
      <div className={classes.loginImage}></div>
      <div className={classes.loginWrapper}>
        <WithLoading loading={loading}>
          <>
            <div className={classes.paper}>
              <div className={classes.loginImageWrapper}>
                <img
                  src={BarcodeSearchImg}
                  className={classes.barcodeImg}
                  alt="Barcode Search"
                />
              </div>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </div>
            <LoginFrom />
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={8}>
              <Copyright />
            </Box>
          </>
        </WithLoading>
      </div>
    </Container>
  );
};
