import { Dispatch, SetStateAction } from "react";

export interface IshowViewDialogHandlerParams {
  setViewDialogVisible: Dispatch<SetStateAction<boolean>>;
}

export interface IhideViewDialogHandlerParams {
  setViewDialogVisible: Dispatch<SetStateAction<boolean>>;
}
