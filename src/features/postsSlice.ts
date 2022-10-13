import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { fetchGetPosts } from "./thunks/fetchGetPosts";

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export interface StateOfPosts {
  posts: Post[];
  editedPosts: Post[];
  status: "" | "loading" | "success" | "failed";
}

//TODO: Arreglar guardado del local en editedPosts y recorrer editedPosts si los hay para que muestre los cambios.

const setLocalStorageFunc = (value: {}) => {
  let values: string = localStorage.getItem("Post") ?? "";
  let listValue = [];
  if (values == "") {
    listValue = [value];
    localStorage.setItem("Post", JSON.stringify(listValue));
    return;
  }
  let newValue = JSON.parse(values);

  newValue instanceof Array
    ? (listValue = [...newValue, value])
    : (listValue = [value]);

  localStorage.setItem("Post", JSON.stringify(listValue));
};

const getLocalStorageFunc = (): Post[] => {
  const getPostsFromLocal = localStorage.getItem("Post");
  console.log(getPostsFromLocal);
  return getPostsFromLocal ? <Post[]>JSON.parse(getPostsFromLocal) : [];
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
      setLocalStorageFunc(newPost);
      state.posts = statePost;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      setLocalStorageFunc(state.posts);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetPosts.fulfilled, (state, action) => {
        state.status = "success";

        const editedPosts: Post[] = getLocalStorageFunc();

        action.payload = action.payload.map((post: Post) => {
          var item2 = editedPosts.find(function (item2: Post) {
            return item2.id == post.id;
          });
          return item2 ? item2 : post;
        });

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
