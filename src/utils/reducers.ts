/*
    input params:
    1)
      {
        a: () => {},
      }
    2) 
      initState
    where a is action name and () => is reducer for this actions name
    output
      (state, action) => {
        const reducers = {
          a: () => {}
        }
        const reducer = R.propOr(null, action.type, reducers)
        return reducer ? reducer(state, action.payload) : state:
      }
*/

interface IAnyObj {
  [key: string]: any;
}

interface IAction {
  type: string;
  payload: undefined | any;
}

const createReducer = (reducerHash: IAnyObj, initState: IAnyObj) => {
  return (state: IAnyObj, action: IAction) => {
    const reducer = reducerHash[action.type];
    if (reducer) {
      return reducer(state, action.payload);
    }
    return state || initState;
  };
};

export { createReducer };
