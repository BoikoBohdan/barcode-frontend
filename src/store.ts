import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { loginReducer } from './modules/Login';
import { fork, all } from 'redux-saga/effects';
import { loginSaga } from './modules/Login/sagas';
import { watchFailures } from './modules/Notification/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  login: loginReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

function* rootSaga() {
  yield all([fork(loginSaga), fork(watchFailures)]);
}
sagaMiddleware.run(rootSaga);

export { store };
