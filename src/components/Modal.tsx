import { ChangeEvent, useState } from "react";
import { Post } from "../types/posts";
import { useAppDispatch } from "../hooks/redux-hooks";
import Swal from "sweetalert2";
import { STRINGS } from "../utils/strings";
import { editPost } from "../features/postsSlice";

export const Modal = ({
  post,
  idPhoto,
  setOpenModal,
}: {
  post: Post;
  idPhoto: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState<boolean>(false);
  const [descriptionPost, setDescriptionPost] = useState<string>("");

  const handleClickSaveDescription = (id: number): void => {
    dispatch(editPost({ id, descriptionPost }));
    setEdit(false);
    setOpenModal(false);

    Swal.fire(
      "Good job!",
      "Your changes have been saved successfully",
      "success"
    );
  };

  const handleChangeOfDescription = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescriptionPost(e.currentTarget.value);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };

  return (
    <div className="modal__background">
      <div className="modal animate__animated animate__fadeIn animate__faster">
        <div className="modal__close" onClick={handleCloseModal} />
        <img src={`https://i.pravatar.cc/150?u=${idPhoto}`} alt="User icon" />
        <h3>{post.title}</h3>
        <textarea
          data-cy="textarea"
          placeholder="Max 200 characters"
          maxLength={200}
          value={descriptionPost}
          onChange={(e) => handleChangeOfDescription(e)}
        />

        <button
          data-cy="save-button"
          onClick={() => handleClickSaveDescription(post.id)}
        >
          {STRINGS.modalButton}
        </button>
      </div>
    </div>
  );
};
