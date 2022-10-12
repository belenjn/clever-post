import React from "react";
import { Post } from "../features/postsSlice";
import { ShowGridCard } from "./ShowGridCard";
import { usersImages } from "../assets/usersImages";

export const GridCard = ({ post }: { post: Post }) => {
  
  function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  // const handleClickEdit = () => {
  // }

  return (
    <>
      <div className="grid__card">
        <div className="grid__card--title-image">
          <h3>{post.title}</h3>
          <img
            className="grid__card--image"
            src={usersImages[getRandomNumber(10)]}
          />
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
