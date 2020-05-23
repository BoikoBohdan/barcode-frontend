import { takeLatest, put } from 'redux-saga/effects';
import { signUpActions } from './redux/actions';
import apiClient from '../../utils/apiClient';

function* signUp({ payload: { data, history } }: any) {
  try {
    yield put(signUpActions.signUp.request());
    const response = yield apiClient.post({
      url: '/auth/sign-up',
      data,
      requireAuth: false,
    });
    localStorage.setItem('token', response.token);
    history.push('/');
    yield put(signUpActions.signUp.success(response));
  } catch (error) {
    yield put(signUpActions.signUp.failure({ error }));
  } finally {
    yield put(signUpActions.signUp.fullfil());
  }
}

function* signUpSaga() {
  yield takeLatest(signUpActions.signUp.trigger, signUp);
}

export { signUpSaga };
