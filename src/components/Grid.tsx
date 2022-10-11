import { useEffect } from "react";
import { fetchGetPosts } from "../features/thunks/fetchGetPosts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { Footer } from "./Footer";
import { GridCard } from "./GridCard";

export const Grid = () => {

  const dispatch = useAppDispatch;
  // const postsList = useAppSelector()


  useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);

  return (
    <>
      <div className="grid">
        <div className="grid__container">
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
        </div>
      </div>
      <Footer />
    </>
  );
};
