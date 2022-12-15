import { Dispatch, SetStateAction } from "react";
import { Address } from "../../../../../../../api/graphql/api.schema";

export interface IuseTradingAddressEffectsParams {
  addTradingAddress?: Address;
  setStreetNumber: Dispatch<SetStateAction<string>>;
  setStreetName: Dispatch<SetStateAction<string>>;
  setTownName: Dispatch<SetStateAction<string>>;
  setCityName: Dispatch<SetStateAction<string>>;
  setProvinceName: Dispatch<SetStateAction<string>>;
  setAreaCode: Dispatch<SetStateAction<string>>;
  updateTradingAddress?: Address;
}

export interface IupdateTradingAddresshandlerParams {
  addressId?: number;
}
