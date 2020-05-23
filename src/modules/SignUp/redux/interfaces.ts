export interface ISignUp {
  loading: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IActions {
  login: string | Function;
}
