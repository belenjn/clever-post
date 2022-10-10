import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "./postsAPI";

export const fetchGetPosts = createAsyncThunk(
    "fetch posts function",
    async () => {
      return await postsAPI();
    }
  );