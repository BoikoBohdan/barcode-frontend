import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Login } from '../../modules/Login';

const MenuWrapper = (child: any) => {
  return (
    <div>
      <div>nav</div>
      {child}
    </div>
  );
};

const AuthContainer = () => {
  const isLoggedIn = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={() => <div>nav</div>} />
        {isLoggedIn && (
          <Switch>
            <Route component={() => <>main</>} />
          </Switch>
        )}
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export { AuthContainer };
