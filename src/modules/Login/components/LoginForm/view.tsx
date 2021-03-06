import React, { useState, ChangeEvent } from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const LoginFormView = ({ classes, login }: any) => {
  const history = useHistory();
  const [loginForm, changeLoginForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const formHandler = (name: string) => (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value, checked } = event.target;
    const isCheckbox = event.target.type === 'checkbox';
    const newForm = { ...loginForm, [name]: isCheckbox ? checked : value };
    changeLoginForm(newForm);
  };

  const isSignUpButtonDisabled = !loginForm.email || !loginForm.password;

  const loginHandler = () => {
    login({ data: loginForm, history });
  };

  return (
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
        onClick={loginHandler}
      >
        Sign In
      </Button>
    </form>
  );
};
