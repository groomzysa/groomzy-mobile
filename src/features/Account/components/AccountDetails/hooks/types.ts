import { Dispatch, SetStateAction } from "react";
import { User } from "../../../../../api/graphql/api.schema";

export interface IuseAccountDetailsEffects {
  updateAccount?: User;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

export interface IupdateAccounDetailstHandler {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  passwordError: string;
  isProvider: boolean;
  setFirstNameError: Dispatch<SetStateAction<string>>;
  setLastNameError: Dispatch<SetStateAction<string>>;
  setEmailError: Dispatch<SetStateAction<string>>;
  setPasswordError: Dispatch<SetStateAction<string>>;
}

export interface IshowPasswordHandler {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
}
