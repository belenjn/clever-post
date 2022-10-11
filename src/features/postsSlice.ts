import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetPosts } from "./thunks/fetchGetPosts";

interface StateOfPosts {
  posts: [];
  status: "" | "loading" | "success" | "failed";
}

const initialState = {
  posts: [],
  status: "",
} as StateOfPosts;

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    editPost: (state, action) => {},
    deletePost: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetPosts.fulfilled, (state, action) => {
        state.status = "success";
        //TODO: arreglar error con el action.payload
        // state.posts = action.payload
      })
      .addCase(fetchGetPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
