import axios from "axios";

export const postsAPI = async (): Promise<any> => {

  //TODO: throw new Error('Something bad happened');
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data)
    .catch(error => console.log(error))
};
