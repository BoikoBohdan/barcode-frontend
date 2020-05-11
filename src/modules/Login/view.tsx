import React, { useState, ChangeEvent } from 'react';
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
} from '@material-ui/core';
import BarcodeSearchImg from '../../icons/barcode_search.jpg';
import { Copyright } from './components/CopyRight';
import { WithLoading } from '../../components/Spinner';

interface ILogin {
  classes: {
    [key: string]: any;
  };
  loading: boolean;
  login: Function;
}

export const LoginView = ({ classes, loading, login }: ILogin) => {
  const [loginForm, changeLoginForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const formHandler = (name: string) => (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, checked } = event.target;
    const isString = typeof value === 'string';
    const newForm = { ...loginForm, [name]: isString ? value : checked };
    changeLoginForm(newForm);
  };

  const signUpHandler = () => {
    login(loginForm);
  };

  const isSignUpButtonDisabled = !loginForm.email || !loginForm.password;

  return (
    <Container component="main" className={classes.loginRoot}>
      <CssBaseline />
      <div className={classes.loginImage}></div>
      <div className={classes.loginWrapper}>
        <WithLoading loading={loading}>
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
                value={loginForm.email}
                onChange={formHandler('email')}
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
                value={loginForm.password}
                onChange={formHandler('password')}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    checked={loginForm.remember}
                    onChange={formHandler('remember')}
                  />
                }
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSignUpButtonDisabled}
                className={classes.submit}
                onClick={signUpHandler}
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
        </WithLoading>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
};
