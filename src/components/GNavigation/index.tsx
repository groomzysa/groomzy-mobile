import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../api/helpers";
import { useFetchUser } from "../../api/hooks/queries";
import { setToken, setUser } from "../../store/slices/appSlice/appSlice";
import { RootState } from "../../store/store";

import { AppNavigator } from "./components";

export const GNavigation: FC = () => {
  const { userFetchTrigger, user } = useFetchUser();
  const {
    app: { token },
  } = useSelector<RootState, Pick<RootState, "app">>((state) => state);
  const dispatch = useDispatch();

  /**
   *
   * Effects
   *
   */

  useEffect(() => {
    async function getStoredToken() {
      const token = await getToken();
      dispatch(setToken({ token }));

      userFetchTrigger();
    }

    getStoredToken();
  }, [token]);

  useEffect(() => {
    dispatch(setUser({ user: user ?? undefined }));
  }, [user]);

  return <AppNavigator />;
};
