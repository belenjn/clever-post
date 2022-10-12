import { useEffect } from "react";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { GridCard } from "./GridCard";

export const Grid = () => {

  const dispatch = useAppDispatch();

  const postsList = useAppSelector((state) => state.posts.posts);

   useEffect(() => {
     dispatch(fetchGetPosts());
   }, []);


  return (
    <>
      <div className="grid">
        <div className="grid__container">
         {
          postsList.map(post => (
            <GridCard post={post} key={post.id}/>
          ))
         }
        </div>
      </div>
    </>
  );
};
