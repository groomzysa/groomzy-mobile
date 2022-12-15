import { Dispatch, SetStateAction } from "react";
import { Provider } from "../../../../../../../api/graphql/api.schema";
export interface IuseTradingInfoEffectsParams {
  setTradingName: Dispatch<SetStateAction<string>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  addTradingInfo?: Provider;
  updateTradingInfo?: Provider;
}
