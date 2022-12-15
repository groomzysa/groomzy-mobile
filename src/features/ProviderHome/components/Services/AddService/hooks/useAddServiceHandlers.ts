import { useState } from "react";
import { useSelector } from "react-redux";
import {
  CategoryType,
  DurationUnitType,
} from "../../../../../../api/graphql/api.schema";
import { useAddService } from "../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../store/store";
import { useAddServiceEffects } from "./useAddServiceEffects";

export const useAddServiceHandlers = (hideDialog: () => void) => {
  /**
   *
   * States
   *
   */
  const {
    homeProvider: { service },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [durationError, setDurationError] = useState<string>("");
  const [durationUnit, setDurationUnit] = useState<DurationUnitType>();
  const [durationUnitError, setDurationUnitError] = useState<string>("");
  const [category, setCategory] = useState<CategoryType>();
  const [categoryError, setCategoryError] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const {
    addServiceTrigger,
    addService,
    addServiceLoading,
    addServiceHasError,
    addServiceError,
  } = useAddService();

  const { successMessage } = useAddServiceEffects({
    addService,
    hideDialog,
    setCategory,
    setDescription,
    setDuration,
    setDurationUnit,
    setName,
    setPrice,
  });

  /**
   *
   * Handlers
   *
   */

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

  const addServiceHandler = () => {
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
    addServiceLoading,
    addServiceHasError,
    addServiceError,
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
    successMessage,
    setName,
    setDescription,
    setPrice,
    setDuration,
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
