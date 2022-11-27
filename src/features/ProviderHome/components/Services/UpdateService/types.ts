import { Service } from "../../../../../api/graphql/api.schema";

export interface IUpdateServiceProps {
  service: Service;
  visible: boolean;
  hideDialog: () => void;
}