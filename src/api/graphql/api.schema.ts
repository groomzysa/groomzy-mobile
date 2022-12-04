export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: 'Address';
  areaCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  province?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Booking = {
  __typename?: 'Booking';
  bookingTime?: Maybe<Scalars['String']>;
  client?: Maybe<Client>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inHouse?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Provider>;
  service?: Maybe<Service>;
  status?: Maybe<BookingStatus>;
  updatedAt?: Maybe<Scalars['String']>;
};

export enum BookingStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Deleted = 'DELETED',
  Done = 'DONE',
  Pending = 'PENDING'
}

export enum CategoryType {
  Barber = 'BARBER',
  Hairdresser = 'HAIRDRESSER',
  MakeupArtist = 'MAKEUP_ARTIST',
  NailTechnician = 'NAIL_TECHNICIAN',
  Spa = 'SPA'
}

export type Client = {
  __typename?: 'Client';
  bookings?: Maybe<Array<Booking>>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum DurationUnitType {
  Hrs = 'HRS',
  Min = 'MIN'
}

export type Mutation = {
  __typename?: 'Mutation';
  addProvider: Provider;
  addProviderAddress: Address;
  addService: Service;
  addStaff: Staff;
  addUser: User;
  deleteService: Service;
  deleteStaff: Staff;
  signIn: Token;
  updateProvider: Provider;
  updateProviderAddress: Address;
  updateService: Service;
  updateStaff: Staff;
};


export type MutationAddProviderArgs = {
  logo?: InputMaybe<Scalars['File']>;
  phone: Scalars['String'];
  tradingName: Scalars['String'];
};


export type MutationAddProviderAddressArgs = {
  areaCode: Scalars['String'];
  city: Scalars['String'];
  province: Scalars['String'];
  streetName: Scalars['String'];
  streetNumber: Scalars['String'];
  town: Scalars['String'];
};


export type MutationAddServiceArgs = {
  category: CategoryType;
  description: Scalars['String'];
  duration: Scalars['Float'];
  durationUnit: DurationUnitType;
  inHouse: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Float'];
};


export type MutationAddStaffArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationAddUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
  userImage?: InputMaybe<Scalars['File']>;
};


export type MutationDeleteServiceArgs = {
  serviceId: Scalars['Int'];
};


export type MutationDeleteStaffArgs = {
  staffId: Scalars['Int'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};


export type MutationUpdateProviderArgs = {
  logo?: InputMaybe<Scalars['File']>;
  phone?: InputMaybe<Scalars['String']>;
  providerId: Scalars['Int'];
  tradingName?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProviderAddressArgs = {
  addressId: Scalars['Int'];
  areaCode?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetName?: InputMaybe<Scalars['String']>;
  streetNumber?: InputMaybe<Scalars['String']>;
  town?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateServiceArgs = {
  category?: InputMaybe<CategoryType>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  durationUnit?: InputMaybe<DurationUnitType>;
  inHouse?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  serviceId: Scalars['Int'];
};


export type MutationUpdateStaffArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  staffId: Scalars['Int'];
};

export type Provider = {
  __typename?: 'Provider';
  addresses?: Maybe<Array<Address>>;
  bookings?: Maybe<Array<Booking>>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logoUrl?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Service>>;
  staffs?: Maybe<Array<Staff>>;
  tradingName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  provider?: Maybe<Provider>;
  providers: Array<Provider>;
  services: Array<Service>;
  user?: Maybe<User>;
};

export type Service = {
  __typename?: 'Service';
  category?: Maybe<CategoryType>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  durationUnit?: Maybe<DurationUnitType>;
  id: Scalars['Int'];
  inHouse?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  staffs?: Maybe<Array<Staff>>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Staff = {
  __typename?: 'Staff';
  createdAt?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Service>>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  updateBooking?: Maybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  provider?: Maybe<Provider>;
  role?: Maybe<UserRole>;
  state?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['String']>;
  userImageUrl?: Maybe<Scalars['String']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Provider = 'PROVIDER'
}

export enum UserStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Suspended = 'SUSPENDED'
}

export type AddProviderMutationVariables = Exact<{
  tradingName: Scalars['String'];
  phone: Scalars['String'];
  logo?: InputMaybe<Scalars['File']>;
}>;


export type AddProviderMutation = { __typename?: 'Mutation', addProvider: { __typename?: 'Provider', id: number, tradingName?: string | null, phone?: string | null, logoUrl?: string | null } };

export type AddProviderAddressMutationVariables = Exact<{
  streetNumber: Scalars['String'];
  streetName: Scalars['String'];
  town: Scalars['String'];
  city: Scalars['String'];
  province: Scalars['String'];
  areaCode: Scalars['String'];
}>;


export type AddProviderAddressMutation = { __typename?: 'Mutation', addProviderAddress: { __typename?: 'Address', id: number, streetNumber?: string | null, streetName?: string | null, town?: string | null, city?: string | null, province?: string | null, areaCode?: string | null } };

export type UpdateProviderMutationVariables = Exact<{
  providerId: Scalars['Int'];
  tradingName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['File']>;
}>;


export type UpdateProviderMutation = { __typename?: 'Mutation', updateProvider: { __typename?: 'Provider', id: number, tradingName?: string | null, phone?: string | null, logoUrl?: string | null } };

export type UpdateProviderAddressMutationVariables = Exact<{
  addressId: Scalars['Int'];
  streetNumber?: InputMaybe<Scalars['String']>;
  streetName?: InputMaybe<Scalars['String']>;
  town?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  areaCode?: InputMaybe<Scalars['String']>;
}>;


export type UpdateProviderAddressMutation = { __typename?: 'Mutation', updateProviderAddress: { __typename?: 'Address', id: number, streetNumber?: string | null, streetName?: string | null, town?: string | null, city?: string | null, province?: string | null, areaCode?: string | null } };

export type AddServiceMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  duration: Scalars['Float'];
  durationUnit: DurationUnitType;
  inHouse: Scalars['Boolean'];
  category: CategoryType;
}>;


export type AddServiceMutation = { __typename?: 'Mutation', addService: { __typename?: 'Service', id: number, name?: string | null, description?: string | null, price?: number | null, duration?: number | null, durationUnit?: DurationUnitType | null, inHouse?: boolean | null, category?: CategoryType | null } };

export type DeleteServiceMutationVariables = Exact<{
  serviceId: Scalars['Int'];
}>;


export type DeleteServiceMutation = { __typename?: 'Mutation', deleteService: { __typename?: 'Service', id: number, name?: string | null, description?: string | null, price?: number | null, duration?: number | null, durationUnit?: DurationUnitType | null, inHouse?: boolean | null, category?: CategoryType | null } };

export type UpdateServiceMutationVariables = Exact<{
  serviceId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  duration?: InputMaybe<Scalars['Float']>;
  durationUnit?: InputMaybe<DurationUnitType>;
  inHouse?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<CategoryType>;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutation', updateService: { __typename?: 'Service', id: number, name?: string | null, description?: string | null, price?: number | null, duration?: number | null, durationUnit?: DurationUnitType | null, inHouse?: boolean | null, category?: CategoryType | null } };

export type AddUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
  userImage?: InputMaybe<Scalars['File']>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email?: string | null, role?: UserRole | null, state?: UserStatus | null, userImageUrl?: string | null } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Token', token: string } };

export type ProviderQueryVariables = Exact<{ [key: string]: never; }>;


export type ProviderQuery = { __typename?: 'Query', provider?: { __typename?: 'Provider', id: number, tradingName?: string | null, phone?: string | null, addresses?: Array<{ __typename?: 'Address', id: number, streetNumber?: string | null, streetName?: string | null, town?: string | null, city?: string | null, province?: string | null, areaCode?: string | null }> | null } | null };

export type ProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type ProvidersQuery = { __typename?: 'Query', providers: Array<{ __typename?: 'Provider', id: number, tradingName?: string | null, phone?: string | null, addresses?: Array<{ __typename?: 'Address', id: number, streetNumber?: string | null, streetName?: string | null, town?: string | null, city?: string | null, province?: string | null, areaCode?: string | null }> | null }> };

export type ServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesQuery = { __typename?: 'Query', services: Array<{ __typename?: 'Service', id: number, name?: string | null, description?: string | null, price?: number | null, duration?: number | null, durationUnit?: DurationUnitType | null, inHouse?: boolean | null, category?: CategoryType | null }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email?: string | null, role?: UserRole | null, state?: UserStatus | null } | null };
