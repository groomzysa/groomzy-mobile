import React, { FC, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../api/helpers";
import { useFetchUser } from "../../api/hooks/queries";
import { setToken, setUser } from "../../store/slices/appSlice";
import { IAppSliceState } from "../../store/slices/types";

import { AppNavigator } from "./components";

export const GNavigation: FC = () => {
  const { userFetchTrigger, user, userLoading } = useFetchUser();
  const { token } = useSelector<{ appSlice: IAppSliceState }, IAppSliceState>(
    (state) => state.appSlice
  );
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
