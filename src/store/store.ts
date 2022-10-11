import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
