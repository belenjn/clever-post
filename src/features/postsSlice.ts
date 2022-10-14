import { createSlice } from "@reduxjs/toolkit";
import * as localStorage from "../services/localStorage";

import { RootState } from "../store/store";
import { Post } from "../types/posts";
import { fetchGetPosts } from "./thunks/fetchGetPosts";

enum Status {
  empty,
  loading,
  success,
  failed,
}

export interface StateOfPosts {
  posts: Post[];
  editedPosts: Post[];
  deletedPosts: Post[];
  status: Status;
}

const initialState: StateOfPosts = {
  posts: [],
  editedPosts: localStorage.getEditedPostLocalStorage(),
  deletedPosts: localStorage.getDeletedPostLocalStorage(),
  status: Status.empty,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    editPost: (state, action): void => {
      const statePost = state.posts;
      const editIndex = statePost.findIndex(
        (post) => post.id === action.payload.id
      );

      // TODO: cuando editIndex es -1 gestionar el error.
      if (editIndex === -1) return;

      const newPost = {
        ...statePost[editIndex],
        body: action.payload.descriptionPost,
      };

      statePost[editIndex] = newPost;
      localStorage.setEditedPostsLocalStorage(newPost);
      state.posts = statePost;
    },
    deletePost: (state, action): void => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      localStorage.setDeletedPostLocalStorage(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetPosts.pending, (state): void => {
        state.status = Status.loading;
      })
      .addCase(fetchGetPosts.fulfilled, (state, action): void => {
        state.status = Status.success;

        const editedPosts: Post[] = localStorage.getEditedPostLocalStorage();

        action.payload = action.payload.map((post: Post): Post => {
          let editedPost = editedPosts.find(function (editedPost: Post) {
            return editedPost.id == post.id;
          });
          return editedPost ? editedPost : post;
        });

        const deletedPosts: Post[] = localStorage.getDeletedPostLocalStorage();

        deletedPosts.forEach((deletePost) => {
          action.payload = action.payload.filter(
            (post: Post) => post.id !== deletePost.id
          );
        });

        state.posts = action.payload;
      })
      .addCase(fetchGetPosts.rejected, (state): void => {
        state.status = Status.failed;
      });
  },
});

export const { editPost, deletePost } = postsSlice.actions;
export const posts = (state: RootState) => state.posts.posts;
export const postsEdited = (state: RootState) => state.posts.editedPosts;

export default postsSlice.reducer;
