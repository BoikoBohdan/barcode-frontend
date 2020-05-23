import React from 'react';
import { CssBaseline, Grid, Box, Container } from '@material-ui/core';
import { Copyright } from '../CopyRight';
import { WithLoading } from '../../../../components/Spinner';

interface ILogin {
  classes: {
    [key: string]: any;
  };
  loading: boolean;
  children: any;
}

export const AuthContainerView = ({ classes, loading, children }: ILogin) => {
  return (
    <Container component="main" className={classes.loginRoot} maxWidth={false}>
      <CssBaseline />
      <div className={classes.loginImage}></div>
      <div className={classes.loginWrapper}>
        <WithLoading loading={loading}>
          <>
            {children}
            <Box mt={8}>
              <Copyright />
            </Box>
          </>
        </WithLoading>
      </div>
    </Container>
  );
};
