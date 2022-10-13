import { useEffect } from "react";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { GridCard } from "./GridCard";

export const Grid = () => {
  const dispatch = useAppDispatch();

  const postsList = useAppSelector((state) => state.posts.posts);
  const postsEdited = useAppSelector((state) => state.posts.editedPosts);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  return (
    <>
      <div className="grid">
        <div className="grid__container">
          {postsEdited.length
            ? postsEdited.map((post) => <GridCard post={post} key={post.id} />)
            : postsList.map((post) => <GridCard post={post} key={post.id} />)}
        </div>
      </div>
    </>
  );
};
