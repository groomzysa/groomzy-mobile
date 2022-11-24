import { Service } from "../../../../../api/graphql/api.schema";

export interface IViewServiceProps {
  service: Service;
  visible: boolean;
  hideDialog: () => void;
}
