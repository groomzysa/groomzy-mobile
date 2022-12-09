import { validate } from "isemail";
import { UserRole } from "../../../api/graphql/api.schema";
import { useAddUser } from "../../../api/hooks/mutations";
import { IaddUserHandlerParams, IshowPasswordHandlerParams } from "./types";

export const useSignUpHandlers = () => {
  const {
    addUserTrigger,
    addUser,
    addUserLoading,
    addUserHasError,
    addUserError,
  } = useAddUser();

  const addUserhandler = ({
    email,
    firstName,
    isProvider,
    lastName,
    password,
    emailError,
    firstNameError,
    lastNameError,
    passwordError,
    setEmailError,
    setFirstNameError,
    setLastNameError,
    setPasswordError,
  }: IaddUserHandlerParams) => {
    const emailAbort = !email || !validate(email);
    const passwordAbort = !password || password.length < 5;
    const abortSignUp = !firstName || !lastName || emailAbort || passwordAbort;
    if (!firstName) {
      setFirstNameError("First name is required!");
    } else if (firstNameError) {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError("Last name is required!");
    } else if (lastNameError) {
      setLastNameError("");
    }
    if (!validate(email)) {
      setEmailError("Email is invalid.");
    } else if (emailError) {
      setEmailError("");
    }
    if (password.length < 5) {
      setPasswordError("Password is too short!");
    } else if (passwordError) {
      setPasswordError("");
    }

    if (abortSignUp) return;

    addUserTrigger({
      email,
      firstName,
      lastName,
      password,
      role: isProvider ? UserRole.Provider : UserRole.Client,
    });
  };

  const showPasswordHandler = ({
    setShowPassword,
    showPassword,
  }: IshowPasswordHandlerParams) => {
    setShowPassword(!showPassword);
  };

  return {
    addUser,
    addUserLoading,
    addUserHasError,
    addUserError,
    addUserhandler,
    showPasswordHandler,
  };
};
