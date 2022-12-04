import { IdeleteServiceHandlersParams } from "./types";

export const useDeleteServiceHandlers = () => {
  const deleteServiceHandler = ({
    deleteServiceTrigger,
    serviceId,
  }: IdeleteServiceHandlersParams) => {
    deleteServiceTrigger({
      serviceId,
    });
  };

  return {
    deleteServiceHandler,
  };
};
