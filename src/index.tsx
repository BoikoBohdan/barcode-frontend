import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthContainer } from './containers/auth';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const history = createBrowserHistory();

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <AuthContainer />
      </Router>
      <ToastContainer />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
