import { take, put } from 'redux-saga/effects';
import { pathOr } from 'ramda';
import { toast } from 'react-toastify';

const INVALID_DATA_STATUS = 422;

export function* watchFailures() {
  while (true) {
    try {
      // @ts-ignore
      const action = yield take(({ type }) => /^.*FAILURE$/.test(type));
      const statusCode = pathOr(null, [
        'payload',
        'error',
        'response',
        'status',
      ])(action);
      const errors = pathOr(
        [],
        ['payload', 'error', 'response', 'data', 'errors']
      )(action);
      // @ts-ignore
      if (statusCode === INVALID_DATA_STATUS && errors) {
        errors.forEach((error) => {
          toast.error(error, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
