import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorageFunc,
  setLocalStorageFunc,
} from "../services/localStorage";
import { RootState } from "../store/store";
import { Post } from "../types/posts";
import { fetchGetPosts } from "./thunks/fetchGetPosts";

interface StateOfPosts {
  posts: Post[];
  editedPosts: Post[];
  status: "" | "loading" | "success" | "failed";
}

const initialState: StateOfPosts = {
  posts: [],
  editedPosts: getLocalStorageFunc(),
  status: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    editPost: (state, action): void => {
      const statePost = [...state.posts];
      const editIndex = statePost.findIndex(
        (post) => post.id === action.payload.id
      );

      const newPost = {
        ...statePost[editIndex],
        body: action.payload.descriptionPost,
      };

      statePost[editIndex] = newPost;
      setLocalStorageFunc(newPost);
      state.posts = statePost;
    },
    deletePost: (state, action): void => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      setLocalStorageFunc(state.posts);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetPosts.pending, (state): void => {
        state.status = "loading";
      })
      .addCase(fetchGetPosts.fulfilled, (state, action): void => {
        state.status = "success";

        const editedPosts: Post[] = getLocalStorageFunc();

        action.payload = action.payload.map((post: Post): Post => {
          var item2 = editedPosts.find(function (item2: Post) {
            return item2.id == post.id;
          });
          return item2 ? item2 : post;
        });

        state.posts = action.payload;
      })
      .addCase(fetchGetPosts.rejected, (state): void => {
        state.status = "failed";
      });
  },
});

export const { editPost, deletePost } = postsSlice.actions;
export const posts = (state: RootState) => state.posts.posts;
export const postsEdited = (state: RootState) => state.posts.editedPosts;

export default postsSlice.reducer;
