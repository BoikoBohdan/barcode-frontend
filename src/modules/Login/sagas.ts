import { takeLatest } from 'redux-saga/effects';
import { loginActions } from './redux/actions';

function* login(payload: any) {
  console.log(payload);
}

function* loginSaga() {
  yield takeLatest(loginActions.login.trigger, login);
}

export { loginSaga };
