import React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
} from '@material-ui/core';
import BarcodeSearchImg from '../../icons/barcode_search.jpg';
import { Copyright } from './components/CopyRight';

interface ILogin {
  classes: {
    [key: string]: any;
  };
}

export const LoginView = ({ classes }: ILogin) => {
  return (
    <Container component="main" className={classes.loginRoot}>
      <CssBaseline />
      <div className={classes.loginImage}></div>
      <div className={classes.loginWrapper}>
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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
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
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
};
