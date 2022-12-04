import {
  IshowAddressDetailsHandlerParams,
  IshowBusinessDetailsHandlerParams,
} from "./types";

export const useBusinessProfileHandlers = () => {
  const showBusinessDetailsHandler = ({
    setShowAddressDetails,
    setShowBusinessDetails,
  }: IshowBusinessDetailsHandlerParams) => {
    setShowBusinessDetails(true);
    setShowAddressDetails(false);
  };

  const showAddressDetailsHandler = ({
    setShowAddressDetails,
    setShowBusinessDetails,
  }: IshowAddressDetailsHandlerParams) => {
    setShowAddressDetails(true);
    setShowBusinessDetails(false);
  };

  return {
    showBusinessDetailsHandler,
    showAddressDetailsHandler,
  };
};
