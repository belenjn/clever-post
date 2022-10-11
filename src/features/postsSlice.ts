import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetPosts } from "./thunks/fetchGetPosts";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface StateOfPosts {
  posts: Array<Post>;
  status: "" | "loading" | "success" | "failed";
}

const initialState: StateOfPosts = {
  posts: [],
  status: "",
};

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
        // state.status = "success";
        // state.posts = action.payload
        //TODO: arreglar error con el action.payload
      })
      .addCase(fetchGetPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
