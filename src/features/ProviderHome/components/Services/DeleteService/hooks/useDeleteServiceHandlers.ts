import { useSelector } from "react-redux";
import { useDeleteService } from "../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../store/store";
import { useDeleteServiceEffects } from "./useDeleteServiceEffects";

export const useDeleteServiceHandlers = (hideDialog: () => void) => {
  /**
   *
   * States
   *
   */
  const {
    homeProvider: { service },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  /**
   *
   * Custom hooks
   *
   */
  const {
    deleteServiceTrigger,
    deleteService,
    deleteServiceLoading,
    deleteServiceHasError,
    deleteServiceError,
  } = useDeleteService();

  useDeleteServiceEffects({
    deleteService,
    hideDialog,
  });

  /**
   *
   * Handlers
   *
   */

  const deleteServiceHandler = () => {
    if (!service) return;

    deleteServiceTrigger({
      serviceId: service.id,
    });
  };

  return {
    deleteServiceHandler,
    deleteServiceLoading,
    deleteServiceHasError,
    deleteServiceError,
  };
};
