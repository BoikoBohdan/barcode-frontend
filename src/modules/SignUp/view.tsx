import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AuthHeader } from '../Login/components/Header';
import { AuthContainer } from '../Login/components/AuthContainer';
import { SignUpForm } from './components/SignUpForm/LoginForm';

interface ILogin {
  classes: {
    [key: string]: any;
  };
  loading: boolean;
}

export const RegisterView = ({ classes, loading }: ILogin) => {
  return (
    <AuthContainer
      loading={loading}
      children={
        <>
          <AuthHeader title="Sign up" />
          <SignUpForm />
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Link to="/sign-up" className={classes.link}>
                {'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </>
      }
    />
  );
};
