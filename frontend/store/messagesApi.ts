import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  tagTypes: ["Messages"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/messages",
  }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => "/",
      providesTags: ["Messages"],
    }),
    getMessageById: builder.query({
      query: (id) => `/${id}`,
    }),
    createMessage: builder.mutation({
      query: (message) => ({
        url: "/",
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["Messages"],
    }),
    updateMessage: builder.mutation({
      query: ({ id, message }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: { message },
      }),
      invalidatesTags: ["Messages"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Messages"],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useCreateMessageMutation,
  useUpdateMessageMutation,
  useGetMessageByIdQuery,
  useDeleteMessageMutation,
} = messagesApi;
