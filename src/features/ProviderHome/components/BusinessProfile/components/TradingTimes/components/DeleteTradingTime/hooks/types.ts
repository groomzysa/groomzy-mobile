import { OperatingTime } from "../../../../../../../../../api/graphql/api.schema";

export interface IuseDeleteTradingTimeEffectsparams {
  deleteOperatingTime?: OperatingTime;
  hideDialog: () => void;
}
