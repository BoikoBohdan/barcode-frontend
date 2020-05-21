import { takeLatest } from 'redux-saga/effects';
import { loginActions } from './redux/actions';
import apiClient from '../../utils/apiClient';

function* login({ payload }: any) {
  try {
    console.log('???');
    const response = yield apiClient.post({
      url: '/auth/login',
      data: payload,
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

function* loginSaga() {
  yield takeLatest(loginActions.login.trigger, login);
}

export { loginSaga };
