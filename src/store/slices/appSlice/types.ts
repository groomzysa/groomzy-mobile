import { User } from "../../../api/graphql/api.schema";

/**
 *
 * States
 *
 */
export interface IAppSliceState {
  token?: string;
  user?: User;
  hideDrawerHeader?: boolean;
}

/**
 *
 * Actions
 *
 */
export interface ISetTokenAction {
  type: string;
  payload: {
    token?: string;
  };
}

export interface ISetUserAction {
  type: string;
  payload: {
    user?: User;
  };
}

export interface IHideDrawerHeaderAction {
  type: string;
  payload: {
    hideDrawerHeader?: boolean;
  };
}
