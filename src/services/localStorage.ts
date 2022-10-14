import { Post } from "../types/posts";


export const postEditedListKey: string = "postsEditedListKey";
export const postDeletedListKey: string = "postsDeletedListKey";


//Update

export const setEditedPosts = (value: {}): void => {
  let localPostsList = getEditedPosts();

  localStorage.setItem(
    postEditedListKey,
    JSON.stringify([...localPostsList, value])
  );
};

export const getEditedPosts = (): Post[] | [] => {
  const getPostsFromLocal = localStorage.getItem(postEditedListKey);
  return getPostsFromLocal ? <Post[]>JSON.parse(getPostsFromLocal) : [];
};

//Delete

export const setDeletedPosts = (value: {}): void => {
  let localPostsList = getDeletedPosts();

  localStorage.setItem(
    postDeletedListKey,
    JSON.stringify([...localPostsList, value])
  );
};

export const getDeletedPosts = (): Post[] | [] => {
  const getPostsFromLocal = localStorage.getItem(postDeletedListKey);
  return getPostsFromLocal ? <Post[]>JSON.parse(getPostsFromLocal) : [];
};
