import {
  IhideViewDialogHandlerParams,
  IshowViewDialogHandlerParams,
} from "./types";

export const useServiceHandlers = () => {
  const showViewDialogHandler = ({
    setViewDialogVisible,
  }: IshowViewDialogHandlerParams) => setViewDialogVisible(true);

  const hideViewDialogHandler = ({
    setViewDialogVisible,
  }: IhideViewDialogHandlerParams) => setViewDialogVisible(false);

  return {
    showViewDialogHandler,
    hideViewDialogHandler,
  };
};
