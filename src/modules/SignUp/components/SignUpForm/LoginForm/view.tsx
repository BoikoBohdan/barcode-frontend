import React, { useState, ChangeEvent } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const SignUpFormView = ({ classes, signUp }: any) => {
  const history = useHistory();
  const [loginForm, changeLoginForm] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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

  const signUpHandler = () => {
    signUp({ data: loginForm, history });
  };

  return (
    <form className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="userName"
        label="User name"
        type="userName"
        id="userName"
        autoComplete="current-userName"
        value={loginForm.userName}
        onChange={formHandler('userName')}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="firstName"
        label="First name"
        type="firstName"
        id="firstName"
        autoComplete="current-firstName"
        value={loginForm.firstName}
        onChange={formHandler('firstName')}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="lastName"
        label="First name"
        type="lastName"
        id="lastName"
        autoComplete="current-lastName"
        value={loginForm.lastName}
        onChange={formHandler('lastName')}
      />
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
    </form>
  );
};
