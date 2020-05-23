import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthContainer } from './containers/auth';
import './index.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <Provider store={store}>
      <AuthContainer />
      <ToastContainer />
    </Provider>
  );
};

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);
