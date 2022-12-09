import { api } from "./operatingTimes.generated";

export const enhancedOperatingTimesApi = api.enhanceEndpoints({
  addTagTypes: ["OperatingTimes"],
  endpoints: {
    operatingTimes: { providesTags: ["OperatingTimes"] },
  },
});

export const { useLazyOperatingTimesQuery, useOperatingTimesQuery } =
  enhancedOperatingTimesApi;
