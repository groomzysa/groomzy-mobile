import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchProviders } from "../../../../../api/hooks/queries";
import {
  setSearch,
  setSearchTmp,
} from "../../../../../store/slices/homeSlice/homeSlice";
import { RootState } from "../../../../../store/store";

export const useHomeExplorerHandlers = () => {
  /**
   *
   * State
   *
   */
  const {
    home: { search, searchTmp },
  } = useSelector<RootState, Pick<RootState, "home">>((state) => state);
  const [refetchProviders, setRefetchProviders] = useState<boolean>(false);

  const dispatch = useDispatch();

  /**
   *
   * Custom hooks
   *
   */
  const {
    fetchProviders,
    providers,
    providersError,
    providersHasError,
    providersLoading,
  } = useFetchProviders();

  /**
   *
   * Effects
   *
   */
  useEffect(() => {
    fetchProviders({ search });
  }, [search]);

  useEffect(() => {
    if (!refetchProviders) return;

    fetchProviders({ search });

    refetchProvidersHandler(false);
  }, [refetchProviders]);

  /**
   *
   * Handlers
   *
   */
  const delayedSearch = useMemo(
    () =>
      debounce((text: string) => dispatch(setSearch({ search: text })), 800),
    [searchTmp]
  );

  const searchTmpHandler = (text: string) => {
    dispatch(setSearchTmp({ searchTmp: text }));
    delayedSearch(text);
  };

  const refetchProvidersHandler = (refetch: boolean) => {
    setRefetchProviders(refetch);
  };

  return {
    providers,
    providersError,
    providersHasError,
    providersLoading,
    searchTmp,
    refetchProviders,
    refetchProvidersHandler,
    searchTmpHandler,
  };
};
