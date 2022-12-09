import { useDeleteService } from "../../../../../../api/hooks/mutations";
import { IdeleteServiceHandlersParams } from "./types";

export const useDeleteServiceHandlers = () => {
  const {
    deleteServiceTrigger,
    deleteService,
    deleteServiceLoading,
    deleteServiceHasError,
    deleteServiceError,
  } = useDeleteService();

  const deleteServiceHandler = ({
    serviceId,
  }: IdeleteServiceHandlersParams) => {
    deleteServiceTrigger({
      serviceId,
    });
  };

  return {
    deleteServiceHandler,
    deleteService,
    deleteServiceLoading,
    deleteServiceHasError,
    deleteServiceError,
  };
};
