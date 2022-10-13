import { Post } from "../types/posts";

const postListKey: string = "postsListKey";

export const setPostLocalStorage = (value: {}): void => {
  let localPostsList = getPostLocalStorage();

  localStorage.setItem(postListKey, JSON.stringify([...localPostsList, value]));
};

export const getPostLocalStorage = (): Post[] | [] => {
  const getPostsFromLocal = localStorage.getItem(postListKey);
  return getPostsFromLocal ? <Post[]>JSON.parse(getPostsFromLocal) : [];
};
