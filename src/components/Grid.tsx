import { useEffect } from "react";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { Post } from "../types/posts";
import { GridCard } from "./GridCard";

export const Grid = () => {
  
  const dispatch = useAppDispatch();

  const postsList: Post[] = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  return (
    <>
      <div 
      className="grid animate__animated animate__fadeIn animate__faster"
      role="grid"
      >
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
