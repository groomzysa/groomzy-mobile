import { OperatingTime } from "../../../../../../../../api/graphql/api.schema";

export interface IDeleteTradingTimeProps {
  operatingTime: OperatingTime;
  visible: boolean;
  hideDialog: () => void;
}
