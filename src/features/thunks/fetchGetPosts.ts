import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "../postsAPI";

//TODO: añadir try catch para gestionar el error

export const fetchGetPosts: AsyncThunk<any, void, {}> = createAsyncThunk(
  "fetch posts function",
  async () => {
    return await postsAPI();
  }
);
