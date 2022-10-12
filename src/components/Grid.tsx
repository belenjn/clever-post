import { useEffect } from "react";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { GridCard } from "./GridCard";

export const Grid = () => {
  const dispatch = useAppDispatch();

  const postsList = useAppSelector((state) => state.posts.posts);
  // const postsEdited = useAppSelector((state) => state.posts.editedPosts);

  // function postsEditedFilter() {
  //   if (postsEdited.length) {
  //     return postsEdited;
  //   } else {
  //     return postsList;
  //   }
  // }

  // const posts = postsEditedFilter();

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);

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
