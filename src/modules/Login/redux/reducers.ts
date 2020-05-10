import { propOr } from 'ramda';
import { ILogin, IAction } from './interfaces';
import { loginActions } from './actions';

const initialState: ILogin = {
  login: false,
  userId: '',
  loading: false,
};

const loginReducer = (state: ILogin = initialState, action: IAction) => {
  const actionHash = {
    [loginActions.login as any]: (state: ILogin) => {
      return {};
    },
  };
  const reducerFn: Function | null = propOr(null, action.type, actionHash);
  return reducerFn ? reducerFn(state) : state;
};

export { loginReducer };
