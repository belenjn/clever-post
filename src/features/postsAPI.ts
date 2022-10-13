import axios from "axios";

export const postsAPI = async (): Promise<any> => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
};
