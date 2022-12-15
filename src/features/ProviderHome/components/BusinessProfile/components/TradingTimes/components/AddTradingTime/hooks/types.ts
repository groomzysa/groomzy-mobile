import { Dispatch, SetStateAction } from "react";
import {
  DayType,
  OperatingTime,
} from "../../../../../../../../../api/graphql/api.schema";

export interface IuseAddTradingTimeEffectsparams {
  addOperatingTime?: OperatingTime;
  showOpens: boolean;
  showCloses: boolean;
  setShowOpens: Dispatch<SetStateAction<boolean>>;
  setShowCloses: Dispatch<SetStateAction<boolean>>;
  setDay: Dispatch<SetStateAction<DayType | undefined>>;
  setOpens: Dispatch<SetStateAction<string>>;
  setCloses: Dispatch<SetStateAction<string>>;
  hideDialog: () => void;
}
