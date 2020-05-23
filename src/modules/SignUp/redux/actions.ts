import { createActions } from '../../../utils/actions';

const signUpActions = createActions({
  signUp: {
    trigger: undefined,
    request: undefined,
    success: undefined,
    failure: undefined,
    fullfil: undefined,
  },
});

export { signUpActions };
