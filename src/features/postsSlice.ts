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
  editedPosts: Post[];
  status: "" | "loading" | "success" | "failed";
}

//TODO: Arreglar guardado del local en editedPosts y recorrer editedPosts si los hay para que muestre los cambios.


const setLocalStorageFunc = (value: any) => {
  localStorage.setItem("Post", JSON.stringify(value));
};

const getLocalStorageFunc = () => {
  const getPostsFromLocal = localStorage.getItem("Post");
  return getPostsFromLocal
    ?  JSON.parse(getPostsFromLocal)
    : [];
};

const initialState: StateOfPosts = {
  posts: [],
  editedPosts: getLocalStorageFunc(),
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
        body: action.payload.descriptionPost,
      };
      
      statePost[editIndex] = newPost;
      state.editedPosts = statePost;
      setLocalStorageFunc(state.editedPosts)
    },
    deletePost: (state, action) => {
      state.editedPosts = state.editedPosts.filter((post) => post.id !== action.payload.id);
      setLocalStorageFunc(state.editedPosts);
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
export const postsEdited = (state: RootState) => state.posts.editedPosts;

export default postsSlice.reducer;
