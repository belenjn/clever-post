import axios from "axios";

export const postsAPI = async (): Promise<any> => {
  try {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  } catch (error) {
    console.error(error);
    throw new Error("Something bad happened");
  }
};
