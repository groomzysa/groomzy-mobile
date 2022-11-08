export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  File: any;
};

export type Address = {
  __typename?: "Address";
  areaCode: Scalars["String"];
  city: Scalars["String"];
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  province: Scalars["String"];
  streetName: Scalars["String"];
  streetNumber: Scalars["String"];
  town: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type Booking = {
  __typename?: "Booking";
  bookingTime: Scalars["String"];
  client: Client;
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  inHouse: Scalars["Boolean"];
  provider: Provider;
  service: Service;
  status: BookingStatus;
  updatedAt: Scalars["String"];
};

export enum BookingStatus {
  Active = "ACTIVE",
  Cancelled = "CANCELLED",
  Deleted = "DELETED",
  Done = "DONE",
  Pending = "PENDING",
}

export type BusinessProfile = {
  __typename?: "BusinessProfile";
  address: Address;
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  updatedAt: Scalars["String"];
};

export type Category = {
  __typename?: "Category";
  category: CategoryType;
  createdAt: Scalars["String"];
  id: Scalars["Int"];
  services: Array<Service>;
  updatedAt: Scalars["String"];
};

export enum CategoryType {
  Barber = "BARBER",
  Hairdresser = "HAIRDRESSER",
  MakeupArtist = "MAKEUP_ARTIST",
  NailTechnician = "NAIL_TECHNICIAN",
  Spa = "SPA",
}

export type Client = {
  __typename?: "Client";
  bookings: Array<Booking>;
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  phone?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["String"];
  user: User;
};

export enum DurationUnitType {
  Hr = "HR",
  Min = "MIN",
}

export type Mutation = {
  __typename?: "Mutation";
  addUser: User;
};

export type MutationAddUserArgs = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
};

export type Provider = {
  __typename?: "Provider";
  bookings: Array<Booking>;
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  phone: Scalars["String"];
  profile: BusinessProfile;
  updatedAt: Scalars["String"];
  user: User;
};

export type Query = {
  __typename?: "Query";
  providers: Array<Provider>;
};

export type Service = {
  __typename?: "Service";
  category: Category;
  createdAt: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Float"];
  durationUnit: DurationUnitType;
  id: Scalars["ID"];
  inHouse: Scalars["Boolean"];
  name: Scalars["String"];
  price: Scalars["Float"];
  updatedAt: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  updateBooking?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  address?: Maybe<Address>;
  createdAt: Scalars["String"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  role: UserRole;
  state: UserStatus;
  updatedAt: Scalars["String"];
};

export enum UserRole {
  Admin = "ADMIN",
  Client = "CLIENT",
  Provider = "PROVIDER",
}

export enum UserStatus {
  Active = "ACTIVE",
  Deleted = "DELETED",
  Inactive = "INACTIVE",
  Pending = "PENDING",
  Suspended = "SUSPENDED",
}

export type AddUserMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
}>;

export type AddUserMutation = {
  __typename?: "Mutation";
  addUser: {
    __typename?: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    state: UserStatus;
  };
};

export type ProvidersQueryVariables = Exact<{ [key: string]: never }>;

export type ProvidersQuery = {
  __typename?: "Query";
  providers: Array<{
    __typename?: "Provider";
    id: string;
    phone: string;
    user: {
      __typename?: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: UserRole;
      state: UserStatus;
      address?: {
        __typename?: "Address";
        id: string;
        streetNumber: string;
        streetName: string;
        town: string;
        city: string;
        province: string;
        areaCode: string;
      } | null;
    };
    profile: {
      __typename?: "BusinessProfile";
      address: {
        __typename?: "Address";
        id: string;
        streetNumber: string;
        streetName: string;
        town: string;
        city: string;
        province: string;
        areaCode: string;
      };
    };
  }>;
};
