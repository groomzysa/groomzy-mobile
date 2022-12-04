import { Dispatch, SetStateAction } from "react";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../../api/graphql/api.schema";
import { IupdateServiceHandlerParams } from "./types";

export const useUpdateServiceHandlers = () => {
  const durationUnitMinHandler = (
    setDurationUnit: Dispatch<SetStateAction<DurationUnitType | undefined>>
  ) => {
    setDurationUnit(DurationUnitType.Min);
  };

  const durationUnitHrsHandler = (
    setDurationUnit: Dispatch<SetStateAction<DurationUnitType | undefined>>
  ) => {
    setDurationUnit(DurationUnitType.Hrs);
  };

  const categoryBarberHandler = (
    setCategory: Dispatch<SetStateAction<CategoryType | undefined>>
  ) => {
    setCategory(CategoryType.Barber);
  };

  const categoryHairdresserHandler = (
    setCategory: Dispatch<SetStateAction<CategoryType | undefined>>
  ) => {
    setCategory(CategoryType.Hairdresser);
  };

  const categoryMakeupArtistHandler = (
    setCategory: Dispatch<SetStateAction<CategoryType | undefined>>
  ) => {
    setCategory(CategoryType.MakeupArtist);
  };

  const categoryNailTechnicianHandler = (
    setCategory: Dispatch<SetStateAction<CategoryType | undefined>>
  ) => {
    setCategory(CategoryType.NailTechnician);
  };

  const categorySpaHandler = (
    setCategory: Dispatch<SetStateAction<CategoryType | undefined>>
  ) => {
    setCategory(CategoryType.Spa);
  };

  const updateServiceHandler = ({
    serviceId,
    updateServiceTrigger,
    category,
    description,
    duration,
    durationUnit,
    name,
    price,
  }: IupdateServiceHandlerParams) => {
    const arbortAddService =
      !name ||
      !description ||
      !price ||
      !duration ||
      !durationUnit ||
      !category;

    updateServiceTrigger({
      serviceId,
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
