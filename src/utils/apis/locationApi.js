import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kadircolak.com/Konum/JSON/API/",
  }),
  endpoints: (builder) => ({
    getShowAllCity: builder.query({
      query: () => `ShowAllCity`,
    }),
    getDistrictsById: builder.query({
      query: (cityId) => `ShowDistrict?PLATE=${cityId}`,
    }),
    getTownById: builder.query({
      query: ({ cityId, district }) =>
        `ShowTown?PLATE=${cityId}&DISTRICT=${district}`,
    }),
    addLocation: builder.mutation({
      query: (data) => ({
        url: "/addLocation",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const {
  useGetShowAllCityQuery,
  useGetDistrictsByIdQuery,
  useGetTownByIdQuery,
} = locationApi;