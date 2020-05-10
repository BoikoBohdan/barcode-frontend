import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './modules/Login';

const reducers = combineReducers({
  login: loginReducer,
});

const store = createStore(reducers, composeWithDevTools());

export { store };
