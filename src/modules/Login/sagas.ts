import { takeLatest, put } from 'redux-saga/effects';
import { loginActions } from './redux/actions';
import apiClient from '../../utils/apiClient';

function* login({ payload: { data, history } }: any) {
  try {
    yield put(loginActions.login.request());
    const response = yield apiClient.post({
      url: '/auth/login',
      data,
      requireAuth: false,
    });
    localStorage.setItem('token', response.token);
    history.push('/');
    yield put(loginActions.login.success(response));
  } catch (error) {
    yield put(loginActions.login.failure({ error }));
  } finally {
    yield put(loginActions.login.fullfil());
  }
}

function* loginSaga() {
  yield takeLatest(loginActions.login.trigger, login);
}

export { loginSaga };
