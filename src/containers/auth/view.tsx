import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../../modules/Login';
import { Register } from '../../modules/SignUp';

const MenuWrapper = (child: any) => {
  return (
    <div>
      <div>nav</div>
      {child}
    </div>
  );
};

const AuthContainer = () => {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={Register} />
      <Route exact path="/home" component={() => <div>nav</div>} />
      {isLoggedIn && (
        <Switch>
          <Route component={() => <>main</>} />
        </Switch>
      )}
      <Redirect to="/login" />
    </Switch>
  );
};

export { AuthContainer };
