import React, { useState } from "react";
import { deletePost, Post } from "../features/postsSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { Modal } from "./Modal";

export const GridCard = ({ post }: { post: Post }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const idPhoto: number = post.id;

  const handleClickEdit = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="grid__card">
        {openModal === true ? (
          <Modal post={post} idPhoto={idPhoto} setOpenModal={setOpenModal} />
        ) : (
          ""
        )}
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
            onClick={handleClickEdit}
          />
          <div
            className="grid__card--icons-container-delete"
            onClick={() => dispatch(deletePost(post))}
          />
        </div>
      </div>
    </>
  );
};
