import { Dispatch, SetStateAction } from "react";
import { Message } from "../../../api/graphql/api.schema";

export interface IuseContactMailEffects {
  contactMail?: Message;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setSubject: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}
