import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthContainer } from './containers/auth';
import './index.css';

const Root = () => {
  return (
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
