import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { loginReducer } from './modules/Login';
import { fork } from 'redux-saga/effects';
import { loginSaga } from './modules/Login/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  login: loginReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield fork(loginSaga);
}
sagaMiddleware.run(rootSaga);

export { store };
