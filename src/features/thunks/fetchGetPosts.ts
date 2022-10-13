import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "../postsAPI";

export const fetchGetPosts: AsyncThunk<any, void, {}> = createAsyncThunk(
  "fetch posts function",
  async () => {
    return await postsAPI();
  }
);
