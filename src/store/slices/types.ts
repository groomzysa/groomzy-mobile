import { User } from "../../api/graphql/api.schema";

export interface IAppSliceState {
  token?: string;
  user?: User;
}

export interface IAppSliceSetTokenAction {
  type: string;
  payload: {
    token?: string;
  };
}

export interface IAppSliceSetUserAction {
  type: string;
  payload: {
    user?: User;
  };
}
