import { Post } from "../types/posts";

export const setLocalStorageFunc = (value: {}): void => {
    let values: string = localStorage.getItem("Post") ?? "";
    let listValue = [];
    if (values == "") {
      listValue = [value];
      localStorage.setItem("Post", JSON.stringify(listValue));
      return;
    }
    let newValue = JSON.parse(values);
  
    newValue instanceof Array
      ? (listValue = [...newValue, value])
      : (listValue = [value]);
  
    localStorage.setItem("Post", JSON.stringify(listValue));
  };
  
  export const getLocalStorageFunc = (): Post[] => {
    const getPostsFromLocal = localStorage.getItem("Post");
    console.log(getPostsFromLocal);
    return getPostsFromLocal ? <Post[]>JSON.parse(getPostsFromLocal) : [];
  };