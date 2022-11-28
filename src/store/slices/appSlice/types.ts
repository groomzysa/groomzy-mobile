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

export interface IAppSliceSetHideDrawerHeaderAction {
  type: string;
  payload: {
    hideDrawerHeader?: boolean;
  };
}
