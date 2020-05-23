import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import BarcodeSearchImg from '../../../icons/barcode_search.jpg';

interface IHeaderAuth {
  classes: {
    [key: string]: any;
  };
  title: string;
}

const styles = {
  paper: {
    marginTop: 9,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  loginImageWrapper: {
    display: 'block',
    margin: '0 auto',
    width: 200,
    height: 200,
  },
  barcodeImg: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
};

const AuthHeaderVew = ({ classes, title }: IHeaderAuth) => (
  <div className={classes.paper}>
    <div className={classes.loginImageWrapper}>
      <img
        src={BarcodeSearchImg}
        className={classes.barcodeImg}
        alt="Barcode Search"
      />
    </div>
    <Typography component="h1" variant="h5">
      {title}
    </Typography>
  </div>
);

export const AuthHeader = withStyles(styles)(AuthHeaderVew);
