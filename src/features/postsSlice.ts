import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { fetchGetPosts } from "./thunks/fetchGetPosts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface StateOfPosts {
  posts: Post[];
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
    editPost: (state, action) => {
      const statePost = [...state.posts];
      const editIndex = statePost.findIndex(
        (post) => post.id === action.payload.id
      );

      const newPost = {
        ...statePost[editIndex],
        body: action.payload.body,
      };
      statePost[editIndex] = newPost;
      state.posts = statePost;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      localStorage.setItem("Id from deleted post: ", action.payload.id)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(fetchGetPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { editPost, deletePost } = postsSlice.actions;
export const posts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
