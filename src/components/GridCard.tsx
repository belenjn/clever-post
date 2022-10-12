import React from "react";
import { Post } from "../features/postsSlice";
import { ShowGridCard } from "./ShowGridCard";

export const GridCard = ({ post }: { post: Post }) => {
  // const handleClickEdit = () => {
  // }

  return (
    <>
      <div className="grid__card">
        <div className="grid__card--title-image">
          <h3>{post.title}</h3>
          <div className="grid__card--image" />
        </div>
        <p>{post.body}</p>

        <div className="grid__card--icons-container">
          <div className="grid__card--icons-container-edit" />
          <div className="grid__card--icons-container-delete" />
        </div>
      </div>
    </>
  );
};
