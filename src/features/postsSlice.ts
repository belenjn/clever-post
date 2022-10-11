import {createSlice } from "@reduxjs/toolkit";

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
