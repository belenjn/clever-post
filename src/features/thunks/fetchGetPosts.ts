import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "../postsAPI";

export const fetchGetPosts: AsyncThunk<any, void, {}> = createAsyncThunk(
  "fetch posts function",
  async () => {
    try {
      return await postsAPI();
    } catch (error: undefined | any) {
      throw new Error("Error: ", error);
    }
  }
);
