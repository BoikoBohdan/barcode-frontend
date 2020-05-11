import React from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';

interface ILoading {
  loading: boolean;
  children: JSX.Element;
  classes: {
    [key: string]: any;
  };
}

const styles = {
  spinnerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
};

const WithLoadingView = ({
  loading,
  children,
  classes,
}: ILoading): JSX.Element => {
  return loading ? (
    <div className={classes.spinnerWrapper}>
      <CircularProgress />
    </div>
  ) : (
    children
  );
};

const WithLoading = withStyles(styles)(WithLoadingView);

export { WithLoading };
