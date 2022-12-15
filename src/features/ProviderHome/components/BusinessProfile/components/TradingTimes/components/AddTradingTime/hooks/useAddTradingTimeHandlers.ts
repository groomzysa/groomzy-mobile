import { useState } from "react";
import { useSelector } from "react-redux";
import { DayType } from "../../../../../../../../../api/graphql/api.schema";
import { useAddOperatingTime } from "../../../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../../../store/store";
import { useAddTradingTimeEffects } from "./useAddTradingTimeEffects";

export const useAddTradingTimeHandlers = (hideDialog: () => void) => {
  /**
   *
   * State
   *
   */
  const {
    homeProvider: { dayOptions },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  const [day, setDay] = useState<DayType>();
  const [dayError, setDayError] = useState<string>("");
  const [opens, setOpens] = useState<string>("");
  const [opensError, setOpensError] = useState<string>("");
  const [closes, setCloses] = useState<string>("");
  const [closesError, setClosesError] = useState<string>("");
  const [showOpens, setShowOpens] = useState<boolean>(false);
  const [showCloses, setShowCloses] = useState<boolean>(false);

  /**
   *
   * Custom hooks
   *
   */

  const {
    addOperatingTime,
    addOperatingTimeError,
    addOperatingTimeHasError,
    addOperatingTimeLoading,
    addOperatingTimeTrigger,
  } = useAddOperatingTime();

  const { successMessage } = useAddTradingTimeEffects({
    hideDialog,
    setCloses,
    setDay,
    setOpens,
    setShowCloses,
    setShowOpens,
    showCloses,
    showOpens,
    addOperatingTime,
  });

  const addOperatingTimeHandler = () => {
    const arbortAddOperatingTime = !day || !opens || !closes;

    if (!day) {
      setDayError("Day is required!");
    } else if (dayError) {
      setDayError("");
    }
    if (!opens) {
      setOpensError("Opening time is required!");
    } else if (opensError) {
      setOpensError("");
    }
    if (!closes) {
      setClosesError("Closing time is required!");
    } else if (closesError) {
      setClosesError("");
    }

    if (arbortAddOperatingTime) return;

    addOperatingTimeTrigger({
      day,
      opens,
      closes,
    });
  };

  return {
    dayOptions,
    day,
    dayError,
    opens,
    opensError,
    closes,
    closesError,
    setDay,
    setShowCloses,
    setShowOpens,
    addOperatingTimeError,
    addOperatingTimeHasError,
    addOperatingTimeLoading,
    successMessage,
    addOperatingTimeHandler,
  };
};
