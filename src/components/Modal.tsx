import { ChangeEvent, FormEvent, useState } from "react";
import { editPost, Post } from "../features/postsSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Swal from 'sweetalert2';

//TODO: Añadir animaciones, notificación de que se ha guardado y arreglar el problema de estilos desde scss
//TODO: Hacer el responsive del modal una vez estén arreglados los estilos desde scss

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

  const handleClickSaveDescription = (id: number) => {
    dispatch(editPost({ id, descriptionPost }));
    setEdit(false);
    setOpenModal(false);

    Swal.fire(
        'Good job!',
        'Saved changes!',
        'success'
      )
  };

  const handleChangeOfDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionPost(e.currentTarget.value);
  };

  return (
    <div
      className="modal__background"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#9d9bad67",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: 600,
          width: 600,
        }}
      >
        <img
          style={{
            alignSelf: "center",
            borderRadius: 500,
            height: 150,
            width: 150,
          }}
          src={`https://i.pravatar.cc/150?u=${idPhoto}`}
          alt="User icon"
        />
        <h3
          style={{
            fontSize: 22,
            marginTop: 30,
            textAlign: "center",
          }}
        >
          {post.title}
        </h3>
        <textarea
          style={{
            fontWeight: 100,
            alignSelf: "center",
            textAlign: "justify",
            lineHeight: 2,
            marginTop: 30,
            height: 100,
            width: 400,
          }}
          value={descriptionPost}
          onChange={(e) => handleChangeOfDescription(e)}
        />

        <button
          style={{
            border: "none",
            borderRadius: 8,
            backgroundColor: "#00b25c",
            color: "white",
            fontWeight: 100,
            alignSelf: "center",
            textAlign: "center",
            fontSize: 25,
            marginTop: 30,
            width: 300,
            height: 60,
          }}
          onClick={() => handleClickSaveDescription(post.id)}
        >
          Save
        </button>
      </div>
    </div>
  );
};
