import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch, useEffect } from "react";
import { StateOfPosts } from "../features/postsSlice";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { Post } from "../types/posts";
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
      <div className="grid animate__animated animate__fadeIn animate__faster">
        <div className="grid__container">
          {postsList.map(
            (post: Post): JSX.Element => (
              <GridCard post={post} key={post.id} />
            )
          )}
        </div>
      </div>
    </>
  );
};
