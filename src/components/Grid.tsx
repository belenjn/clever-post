import { useEffect } from "react";
import { posts } from "../features/postsSlice";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { Footer } from "./Footer";
import { GridCard } from "./GridCard";

export const Grid = () => {


  const dispatch = useAppDispatch;
  // const postList = useAppSelector(posts);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);

  return (
    <>
      <div className="grid">
        <div className="grid__container">
         <GridCard/>
         <GridCard/>
         <GridCard/>
         <GridCard/>
         <GridCard/>
         <GridCard/>
         <GridCard/>
         <GridCard/>
         <GridCard/>
         <GridCard/>
        </div>
      </div>
      <Footer />
    </>
  );
};
