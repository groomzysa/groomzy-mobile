import { Provider } from "../../../api/graphql/api.schema";

/**
 *
 * States
 *
 */

export interface IHomeSliceState {
  provider?: Provider;
}

/**
 *
 * Actions
 *
 */

export interface ISetProviderAction {
  type: string;
  payload: {
    provider?: Provider;
  };
}
