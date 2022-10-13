import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch, useEffect } from "react";
import { Post, StateOfPosts } from "../features/postsSlice";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { GridCard } from "./GridCard";

export const Grid = () => {
  const dispatch: ThunkDispatch<{ posts: StateOfPosts }, undefined, AnyAction> &
    Dispatch<AnyAction> = useAppDispatch();

  const postsList: Post[] = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  return (
    <>
      <div className="grid">
        <div className="grid__container">
          {postsList.map((post) => (
            <GridCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
};
