import React, { useState } from "react";
import { Post } from "../features/postsSlice";
import { ShowGridCard } from "./ShowGridCard";

export const GridCard = ({ post }: { post: Post }) => {
  const [editPost, setEditPost] = useState(false);

  const idPhoto: number = post.id;

  // const handleClickEdit = () => {
  //   !editPost ? <ShowGridCard post={post} /> : "";
  // };

  return (
    <>
      <div className="grid__card">
        <div className="grid__card--title-image">
          <h3>{post.title}</h3>
          <img
            className="grid__card--image"
            src={`https://i.pravatar.cc/150?u=${idPhoto}`}
            alt="User icon"
          />
        </div>
        <p>{post.body}</p>

        <div className="grid__card--icons-container">
          <div
            className="grid__card--icons-container-edit"
            // onClick={handleClickEdit}
          />
          <div className="grid__card--icons-container-delete" />
        </div>
      </div>
    </>
  );
};
