import axios from "axios";

export const postsAPI = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
};
