export interface ILogin {
  login: boolean;
  userId: string;
  loading: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IActions {
  login: string | Function;
}
