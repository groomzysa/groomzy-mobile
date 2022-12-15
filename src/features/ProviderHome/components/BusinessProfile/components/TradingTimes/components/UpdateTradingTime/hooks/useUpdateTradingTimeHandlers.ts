import { useState } from "react";
import { useSelector } from "react-redux";
import { DayType } from "../../../../../../../../../api/graphql/api.schema";
import { useUpdateOperatingTime } from "../../../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../../../store/store";
import { useUpdateTradingTimeEffects } from "./useUpdateTradingTimeEffects";

export const useUpdateTradingTimeHandlers = (hideDialog: () => void) => {
  /**
   *
   * States
   *
   */
  const {
    homeProvider: { dayOptions, operatingTime },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  const [day, setDay] = useState<DayType | undefined>(
    operatingTime?.day as DayType
  );
  const [opens, setOpens] = useState<string>(operatingTime?.opens as string);
  const [closes, setCloses] = useState<string>(operatingTime?.closes as string);
  const [showOpens, setShowOpens] = useState<boolean>(false);
  const [showCloses, setShowCloses] = useState<boolean>(false);

  /**
   *
   * Custom hooks
   *
   */
  const {
    updateOperatingTime,
    updateOperatingTimeError,
    updateOperatingTimeHasError,
    updateOperatingTimeLoading,
    updateOperatingTimeTrigger,
  } = useUpdateOperatingTime();

  const { successMessage } = useUpdateTradingTimeEffects({
    hideDialog,
    setCloses,
    setDay,
    setOpens,
    setShowCloses,
    setShowOpens,
    showCloses,
    showOpens,
    updateOperatingTime,
  });

  /**
   *
   * Handlers
   *
   */
  const updateOperatingTimeHandler = () => {
    if (!operatingTime) return;

    updateOperatingTimeTrigger({
      operatingTimeId: operatingTime.id,
      day,
      opens,
      closes,
    });
  };

  return {
    operatingTime,
    dayOptions,
    day,
    opens,
    closes,
    successMessage,
    setShowOpens,
    setShowCloses,
    setDay,
    updateOperatingTimeError,
    updateOperatingTimeHasError,
    updateOperatingTimeLoading,
    updateOperatingTimeHandler,
  };
};
