import { OperatingTime } from "../../../../../../../../api/graphql/api.schema";

export interface IAddTradingTimeProps {
  operatingTime: OperatingTime;
  visible: boolean;
  hideDialog: () => void;
}
