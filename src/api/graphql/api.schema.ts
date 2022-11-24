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
  areaCode?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  province?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  streetNumber?: Maybe<Scalars["String"]>;
  town?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Booking = {
  __typename?: "Booking";
  bookingTime?: Maybe<Scalars["String"]>;
  client?: Maybe<Client>;
  createdAt?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  inHouse?: Maybe<Scalars["Boolean"]>;
  provider?: Maybe<Provider>;
  service?: Maybe<Service>;
  status?: Maybe<BookingStatus>;
  updatedAt?: Maybe<Scalars["String"]>;
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
  address?: Maybe<Address>;
  createdAt?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  logoUrl?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  tradingName?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
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
  bookings?: Maybe<Array<Booking>>;
  createdAt?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  phone?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export enum DurationUnitType {
  Hr = "HR",
  Min = "MIN",
}

export type Mutation = {
  __typename?: "Mutation";
  addProvider: Provider;
  addService: Service;
  addUser: User;
  signIn: Token;
  updateProvider: Provider;
};

export type MutationAddProviderArgs = {
  areaCode: Scalars["String"];
  city: Scalars["String"];
  logo?: InputMaybe<Scalars["File"]>;
  phone: Scalars["String"];
  province: Scalars["String"];
  streetName: Scalars["String"];
  streetNumber: Scalars["String"];
  town: Scalars["String"];
  tradingName: Scalars["String"];
};

export type MutationAddServiceArgs = {
  category: CategoryType;
  description: Scalars["String"];
  duration: Scalars["Float"];
  durationUnit: DurationUnitType;
  inHouse: Scalars["Boolean"];
  name: Scalars["String"];
  price: Scalars["Float"];
};

export type MutationAddUserArgs = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
  userImage?: InputMaybe<Scalars["File"]>;
};

export type MutationSignInArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
};

export type MutationUpdateProviderArgs = {
  areaCode?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["File"]>;
  phone?: InputMaybe<Scalars["String"]>;
  providerId: Scalars["Int"];
  province?: InputMaybe<Scalars["String"]>;
  streetName?: InputMaybe<Scalars["String"]>;
  streetNumber?: InputMaybe<Scalars["String"]>;
  town?: InputMaybe<Scalars["String"]>;
  tradingName?: InputMaybe<Scalars["String"]>;
};

export type Provider = {
  __typename?: "Provider";
  bookings?: Maybe<Array<Booking>>;
  createdAt?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  profile?: Maybe<BusinessProfile>;
  updatedAt?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type Query = {
  __typename?: "Query";
  providers: Array<Provider>;
  services: Array<Service>;
  user?: Maybe<User>;
};

export type Service = {
  __typename?: "Service";
  category?: Maybe<CategoryType>;
  createdAt?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  durationUnit?: Maybe<DurationUnitType>;
  id: Scalars["Int"];
  inHouse?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  price?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  updateBooking?: Maybe<Scalars["String"]>;
};

export type Token = {
  __typename?: "Token";
  token: Scalars["String"];
};

export type User = {
  __typename?: "User";
  address?: Maybe<Address>;
  createdAt?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  lastName?: Maybe<Scalars["String"]>;
  provider?: Maybe<Provider>;
  role?: Maybe<UserRole>;
  state?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars["String"]>;
  userImageUrl?: Maybe<Scalars["String"]>;
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

export type AddProviderMutationVariables = Exact<{
  tradingName: Scalars["String"];
  streetNumber: Scalars["String"];
  streetName: Scalars["String"];
  town: Scalars["String"];
  city: Scalars["String"];
  province: Scalars["String"];
  areaCode: Scalars["String"];
  phone: Scalars["String"];
  logo?: InputMaybe<Scalars["File"]>;
}>;

export type AddProviderMutation = {
  __typename?: "Mutation";
  addProvider: {
    __typename?: "Provider";
    id: number;
    profile?: {
      __typename?: "BusinessProfile";
      id: number;
      tradingName?: string | null;
      phone?: string | null;
      logoUrl?: string | null;
      address?: {
        __typename?: "Address";
        id: number;
        streetNumber?: string | null;
        streetName?: string | null;
        town?: string | null;
        city?: string | null;
        province?: string | null;
        areaCode?: string | null;
      } | null;
    } | null;
  };
};

export type UpdateProviderMutationVariables = Exact<{
  providerId: Scalars["Int"];
  tradingName?: InputMaybe<Scalars["String"]>;
  streetNumber?: InputMaybe<Scalars["String"]>;
  streetName?: InputMaybe<Scalars["String"]>;
  town?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  province?: InputMaybe<Scalars["String"]>;
  areaCode?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["File"]>;
}>;

export type UpdateProviderMutation = {
  __typename?: "Mutation";
  updateProvider: {
    __typename?: "Provider";
    id: number;
    profile?: {
      __typename?: "BusinessProfile";
      id: number;
      tradingName?: string | null;
      phone?: string | null;
      logoUrl?: string | null;
      address?: {
        __typename?: "Address";
        id: number;
        streetNumber?: string | null;
        streetName?: string | null;
        town?: string | null;
        city?: string | null;
        province?: string | null;
        areaCode?: string | null;
      } | null;
    } | null;
  };
};

export type AddServiceMutationVariables = Exact<{
  name: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Float"];
  duration: Scalars["Float"];
  durationUnit: DurationUnitType;
  inHouse: Scalars["Boolean"];
  category: CategoryType;
}>;

export type AddServiceMutation = {
  __typename?: "Mutation";
  addService: {
    __typename?: "Service";
    id: number;
    name: string;
    description?: string | null;
    price?: number | null;
    duration?: number | null;
    durationUnit?: DurationUnitType | null;
    inHouse?: boolean | null;
    category?: CategoryType | null;
  };
};

export type AddUserMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
  userImage?: InputMaybe<Scalars["File"]>;
}>;

export type AddUserMutation = {
  __typename?: "Mutation";
  addUser: {
    __typename?: "User";
    id: number;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    role?: UserRole | null;
    state?: UserStatus | null;
    userImageUrl?: string | null;
  };
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn: { __typename?: "Token"; token: string };
};

export type ProvidersQueryVariables = Exact<{ [key: string]: never }>;

export type ProvidersQuery = {
  __typename?: "Query";
  providers: Array<{
    __typename?: "Provider";
    id: number;
    user?: {
      __typename?: "User";
      id: number;
      firstName?: string | null;
      lastName?: string | null;
      email?: string | null;
      role?: UserRole | null;
      state?: UserStatus | null;
      address?: {
        __typename?: "Address";
        id: number;
        streetNumber?: string | null;
        streetName?: string | null;
        town?: string | null;
        city?: string | null;
        province?: string | null;
        areaCode?: string | null;
      } | null;
    } | null;
    profile?: {
      __typename?: "BusinessProfile";
      id: number;
      tradingName?: string | null;
      phone?: string | null;
      logoUrl?: string | null;
      address?: {
        __typename?: "Address";
        id: number;
        streetNumber?: string | null;
        streetName?: string | null;
        town?: string | null;
        city?: string | null;
        province?: string | null;
        areaCode?: string | null;
      } | null;
    } | null;
  }>;
};

export type ServicesQueryVariables = Exact<{ [key: string]: never }>;

export type ServicesQuery = {
  __typename?: "Query";
  services: Array<{
    __typename?: "Service";
    id: number;
    name: string;
    description?: string | null;
    price?: number | null;
    duration?: number | null;
    durationUnit?: DurationUnitType | null;
    inHouse?: boolean | null;
  }>;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: number;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    role?: UserRole | null;
    state?: UserStatus | null;
    provider?: {
      __typename?: "Provider";
      id: number;
      profile?: {
        __typename?: "BusinessProfile";
        id: number;
        tradingName?: string | null;
        phone?: string | null;
        logoUrl?: string | null;
        address?: {
          __typename?: "Address";
          id: number;
          streetNumber?: string | null;
          streetName?: string | null;
          town?: string | null;
          city?: string | null;
          province?: string | null;
          areaCode?: string | null;
        } | null;
      } | null;
    } | null;
  } | null;
};
