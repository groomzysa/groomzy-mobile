import { OperatingTime } from "../../../../../../../../api/graphql/api.schema";

export interface IViewTradingTimeProps {
  operatingTime: OperatingTime;
  visible: boolean;
  hideDialog: () => void;
}
