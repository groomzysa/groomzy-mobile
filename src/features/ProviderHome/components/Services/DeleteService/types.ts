import { Service } from "../../../../../api/graphql/api.schema";

export interface IDeleteServiceProps {
  service: Service;
  visible: boolean;
  hideDialog: () => void;
}
