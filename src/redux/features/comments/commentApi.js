import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://factsbackend-1.onrender.com/api/",
    credentials: "include",
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentData) => ({
        url: "/comment/add",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Comment", id: postId },
      ],
    }),
    getComments: builder.query({
      query: () => ({
        url: "/comment/all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCommentsQuery, usePostCommentMutation } = commentApi;

export default commentApi;
