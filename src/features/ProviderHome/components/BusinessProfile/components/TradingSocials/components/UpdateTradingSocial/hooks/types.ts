import { Dispatch, SetStateAction } from "react";
import { Social } from "../../../../../../../../../api/graphql/api.schema";

export interface IuseUpdateTradingSocialEffectsparams {
  updateSocial?: Social;
  setName: Dispatch<SetStateAction<string | undefined>>;
  setUsername: Dispatch<SetStateAction<string>>;
  hideDialog: () => void;
}
