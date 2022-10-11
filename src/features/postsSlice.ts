import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsAPI } from "./postsAPI";

export const fetchGetPosts = createAsyncThunk(
  "fetch posts function",
  async () => {
    return await postsAPI();
  }
);

const initialState: {} = {
  posts: [],
  status: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    editPost: (state, action) => {},
  },
});

export const { editPost } = postsSlice.actions;

export default postsSlice.reducer;
