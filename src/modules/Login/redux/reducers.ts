import { ILogin } from './interfaces';
import { loginActions } from './actions';
import { createReducer } from '../../../utils/reducers';

const initialState: ILogin = {
  login: false,
  userId: '',
  loading: false,
};

const loginReducer = createReducer(
  {
    [loginActions.login.trigger]: (state: ILogin, payload: any) => {
      return {};
    },
  },
  initialState
);

export { loginReducer };
