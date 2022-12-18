import { Dispatch, SetStateAction } from "react";
import { Social } from "../../../../../../../../../api/graphql/api.schema";

export interface IuseAddTradingSocialEffectsparams {
  addSocial?: Social;
  setName: Dispatch<SetStateAction<string | undefined>>;
  setUsername: Dispatch<SetStateAction<string>>;
  hideDialog: () => void;
}
