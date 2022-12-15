import { Dispatch, SetStateAction } from "react";
import { Address } from "../../../../../api/graphql/api.schema";

export interface IuseAccountgAddressEffects {
  addAccountAddress?: Address;
  setStreetNumber: Dispatch<SetStateAction<string>>;
  setStreetName: Dispatch<SetStateAction<string>>;
  setTownName: Dispatch<SetStateAction<string>>;
  setCityName: Dispatch<SetStateAction<string>>;
  setProvinceName: Dispatch<SetStateAction<string>>;
  setAreaCode: Dispatch<SetStateAction<string>>;
  updateAccountAddress?: Address;
}
