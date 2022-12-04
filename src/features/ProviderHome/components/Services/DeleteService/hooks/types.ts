import { MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import { Exact, Service } from "../../../../../../api/graphql/api.schema";
import { DeleteServiceMutationResult } from "../../../../../../api/graphql/mutations/service/deleteService.generated";

export interface IuseDeleteServiceEffectParams {
  deleteService: Service | undefined;
  successMessage: string;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
  hideDialog: () => void;
}

export interface IdeleteServiceHandlersParams {
  serviceId: number;
  deleteServiceTrigger: MutationTrigger<
    MutationDefinition<
      Exact<{
        serviceId: number;
      }>,
      any,
      "Services",
      DeleteServiceMutationResult,
      "api"
    >
  >;
}
