import { Post } from "../types/posts";

const postEditedListKey: string = "postsEditedListKey";
const postDeletedListKey: string = "postsDeletedListKey";

//Update

export const setEditedPostsLocalStorage = (value: {}): void => {
  let localPostsList = getEditedPostLocalStorage();

  localStorage.setItem(
    postEditedListKey,
    JSON.stringify([...localPostsList, value])
  );
};

export const getEditedPostLocalStorage = (): Post[] | [] => {
  const getPostsFromLocal = localStorage.getItem(postEditedListKey);
  return getPostsFromLocal ? <Post[]>JSON.parse(getPostsFromLocal) : [];
};

//Delete

export const setDeletedPostLocalStorage = (value: {}): void => {
  let localPostsList = getDeletedPostLocalStorage();

  localStorage.setItem(
    postDeletedListKey,
    JSON.stringify([...localPostsList, value])
  );
};

export const getDeletedPostLocalStorage = (): Post[] | [] => {
  const getPostsFromLocal = localStorage.getItem(postDeletedListKey);
  return getPostsFromLocal ? <Post[]>JSON.parse(getPostsFromLocal) : [];
};
