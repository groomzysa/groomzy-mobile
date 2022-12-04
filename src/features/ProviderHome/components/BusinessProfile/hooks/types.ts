import { Dispatch, SetStateAction } from "react";

export interface IshowBusinessDetailsHandlerParams {
  setShowBusinessDetails: Dispatch<SetStateAction<boolean>>;
  setShowAddressDetails: Dispatch<SetStateAction<boolean>>;
}

export interface IshowAddressDetailsHandlerParams {
  setShowBusinessDetails: Dispatch<SetStateAction<boolean>>;
  setShowAddressDetails: Dispatch<SetStateAction<boolean>>;
}
