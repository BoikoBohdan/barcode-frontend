import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LoginFrom } from './components/LoginForm';
import { AuthHeader } from './components/Header';
import { AuthContainer } from './components/AuthContainer';

interface ILogin {
  classes: {
    [key: string]: any;
  };
  loading: boolean;
}

export const LoginView = ({ classes, loading }: ILogin) => {
  return (
    <AuthContainer
      loading={loading}
      children={
        <>
          <AuthHeader title="Login" />
          <LoginFrom />
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs>
              <Link to="/forgot-password" className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up" className={classes.link}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </>
      }
    />
  );
};
