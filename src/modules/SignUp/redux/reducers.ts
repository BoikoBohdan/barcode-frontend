import { ISignUp } from './interfaces';
import { signUpActions } from './actions';
import { createReducer } from '../../../utils/reducers';

const initialState: ISignUp = {
  loading: false,
};

const signUpReducer = createReducer(
  {
    [signUpActions.signUp.trigger]: (state: ISignUp, payload: any) => {
      return {
        ...state,
        loading: true,
      };
    },
    [signUpActions.signUp.fullfil]: (state: ISignUp, payload: any) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
  initialState,
);

export { signUpReducer };
