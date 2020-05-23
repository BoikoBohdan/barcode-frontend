import { takeLatest, put } from 'redux-saga/effects';
import { loginActions } from './redux/actions';
import apiClient from '../../utils/apiClient';

function* login({ payload }: any) {
  try {
    yield put(loginActions.login.request());
    const response = yield apiClient.post({
      url: '/auth/login',
      data: payload,
      requireAuth: false,
    });
    yield put(loginActions.login.success(response));
  } catch (error) {
    yield put(loginActions.login.failure({ error }));
  }
}

function* loginSaga() {
  yield takeLatest(loginActions.login.trigger, login);
}

export { loginSaga };
