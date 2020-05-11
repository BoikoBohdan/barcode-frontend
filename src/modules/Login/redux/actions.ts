import { createActions } from '../../../utils/actions';

const loginActions = createActions({
  login: {
    trigger: undefined,
    success: undefined,
    failure: undefined,
  },
});

export { loginActions };
