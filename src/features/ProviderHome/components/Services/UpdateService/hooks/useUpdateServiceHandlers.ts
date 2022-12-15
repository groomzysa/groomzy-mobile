import { useState } from "react";
import { useSelector } from "react-redux";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../../api/graphql/api.schema";
import { useUpdateService } from "../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../store/store";
import { useUpdateServiceEffects } from "./useUpdateServiceEffects";

export const useUpdateServiceHandlers = (hideDialog: () => void) => {
  /**
   *
   * States
   *
   */
  const {
    homeProvider: { service },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [durationUnit, setDurationUnit] = useState<DurationUnitType>();
  const [category, setCategory] = useState<CategoryType>();

  /**
   *
   * Custom hooks
   *
   */
  const {
    updateServiceTrigger,
    updateService,
    updateServiceLoading,
    updateServiceHasError,
    updateServiceError,
  } = useUpdateService();

  const { successMessage } = useUpdateServiceEffects({
    hideDialog,
    setCategory,
    setDescription,
    setDuration,
    setDurationUnit,
    setName,
    setPrice,
    updateService,
  });

  const durationUnitMinHandler = () => {
    setDurationUnit(DurationUnitType.Min);
  };

  const durationUnitHrsHandler = () => {
    setDurationUnit(DurationUnitType.Hrs);
  };

  const categoryBarberHandler = () => {
    setCategory(CategoryType.Barber);
  };

  const categoryHairdresserHandler = () => {
    setCategory(CategoryType.Hairdresser);
  };

  const categoryMakeupArtistHandler = () => {
    setCategory(CategoryType.MakeupArtist);
  };

  const categoryNailTechnicianHandler = () => {
    setCategory(CategoryType.NailTechnician);
  };

  const categorySpaHandler = () => {
    setCategory(CategoryType.Spa);
  };

  const updateServiceHandler = () => {
    if (!service) return;
    updateServiceTrigger({
      serviceId: service.id,
      name,
      description,
      price: Number(price),
      duration: Number(duration),
      durationUnit,
      category,
      inHouse: false,
    });
  };

  return {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    duration,
    setDuration,
    durationUnit,
    category,
    service,
    updateServiceLoading,
    updateServiceHasError,
    updateServiceError,
    successMessage,
    durationUnitMinHandler,
    durationUnitHrsHandler,
    categoryBarberHandler,
    categoryHairdresserHandler,
    categoryMakeupArtistHandler,
    categoryNailTechnicianHandler,
    categorySpaHandler,
    updateServiceHandler,
  };
};
