import { Service } from "../../../../../../api/graphql/api.schema";

export interface IuseDeleteServiceEffectParams {
  deleteService: Service | undefined;
  hideDialog: () => void;
}
