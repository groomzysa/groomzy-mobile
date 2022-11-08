import { Address } from "../../api/graphql/api.schema";

export const fullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const addressName = (address: Address) => {
  const { streetNumber, streetName, town, city, province, areaCode } = address;
  return `${streetNumber} ${streetName}, ${town}, ${city}, ${province}, ${areaCode}`;
};
