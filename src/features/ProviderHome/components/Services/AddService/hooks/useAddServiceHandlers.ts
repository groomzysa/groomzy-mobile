import { Dispatch, SetStateAction } from "react";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../../api/graphql/api.schema";
import { useAddService } from "../../../../../../api/hooks/mutations";
import { IaddServiceHandlerParams } from "./types";

export const useAddServiceHandlers = () => {
  const {
    addServiceTrigger,
    addService,
    addServiceLoading,
    addServiceHasError,
    addServiceError,
  } = useAddService();

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

  const addServiceHandler = ({
    category,
    categoryError,
    description,
    descriptionError,
    duration,
    durationError,
    durationUnit,
    durationUnitError,
    name,
    nameError,
    price,
    priceError,
    setCategoryError,
    setDescriptionError,
    setDurationError,
    setDurationUnitError,
    setNameError,
    setPriceError,
  }: IaddServiceHandlerParams) => {
    const arbortAddService =
      !name ||
      !description ||
      !price ||
      !duration ||
      !durationUnit ||
      !category;

    if (!name) {
      setNameError("Name is required!");
    } else if (nameError) {
      setNameError("");
    }
    if (!description) {
      setDescriptionError("Description is required!");
    } else if (descriptionError) {
      setDescriptionError("");
    }
    if (!price) {
      setPriceError("Price is required!");
    } else if (priceError) {
      setPriceError("");
    }
    if (!duration) {
      setDurationError("Duration is required!");
    } else if (durationError) {
      setDurationError("");
    }
    if (!durationUnit) {
      setDurationUnitError("Duration unit is required!");
    } else if (durationUnitError) {
      setDurationUnitError("");
    }
    if (!category) {
      setCategoryError("Category is required!");
    } else if (categoryError) {
      setCategoryError("");
    }

    if (arbortAddService) return;

    addServiceTrigger({
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
    addService,
    addServiceLoading,
    addServiceHasError,
    addServiceError,
    durationUnitMinHandler,
    durationUnitHrsHandler,
    categoryBarberHandler,
    categoryHairdresserHandler,
    categoryMakeupArtistHandler,
    categoryNailTechnicianHandler,
    categorySpaHandler,
    addServiceHandler,
  };
};
