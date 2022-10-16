import { useState } from "react";
import Swal from "sweetalert2";
import { deletePost } from "../features/postsSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { Post } from "../types/posts";
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
      {openModal === true ? (
        <Modal post={post} idPhoto={idPhoto} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
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
            data-cy="edit-button"
            className="grid__card--icons-container-edit"
            onClick={handleClickEdit}
          />
          <div
            data-cy="delete-button"
            className="grid__card--icons-container-delete"
            onClick={(): {} =>
              Swal.fire({
                icon: "question",
                title: "Do you want to delete this post?",
                showCancelButton: true,
                confirmButtonText: `Yes`,
                denyButtonText: `No`,
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(deletePost(post)),
                    Swal.fire("Deleted!", "", "success");
                } 
              })
            }
          />
        </div>
      </div>
    </>
  );
};
