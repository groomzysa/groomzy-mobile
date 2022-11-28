import { Provider } from "../../../api/graphql/api.schema";

/**
 * 
 * States
 * 
 */

export interface IExplorerSliceState {
  provider?: Provider;
}

/**
 * 
 * Actions
 * 
 */

export interface IExplorerSliceSetProviderAction {
  type: string;
  payload: {
    provider?: Provider;
  };
}
