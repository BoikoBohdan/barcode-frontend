import * as R from 'ramda';

/*
  const objExample = {
    'action1': {
      'action2: undefined
    }
  }
*/

interface IAnyObj {
  [key: string]: any;
}

const createAction = (
  actionName: string,
  additionalProps: IAnyObj
): IAnyObj => {
  const upperCaseActionName = actionName.toUpperCase();
  const actionCreator = (args: any) => {
    return { type: upperCaseActionName, payload: args };
  };
  actionCreator.toString = () => upperCaseActionName;
  Object.entries(additionalProps).forEach(([key, prop]: [string, any]) => {
    // @ts-ignore: Unreachable code error
    actionCreator[key] = prop;
  });
  return actionCreator;
};

const createActions = (treeNode: IAnyObj, defaultName: string = ''): IAnyObj =>
  R.compose(
    R.reduce((acc: IAnyObj, key: string) => {
      let dependedActions = {};
      const value = R.prop(key, treeNode);
      const fullActionName = defaultName.length ? `${defaultName}/${key}` : key;
      if (value && typeof value === 'object') {
        dependedActions = createActions(value, fullActionName);
      }
      const action = createAction(fullActionName, dependedActions);
      return { ...acc, [key]: action };
    }, {}),
    R.keys
  )(treeNode);

export { createActions, createAction };
