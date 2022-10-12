import { Post } from "../features/postsSlice";

export const ShowGridCard = ({ post }: { post: Post }) => {
  return (
    <div className="showGridCard__background">
      <div className="showGridCard__container">
        <div className="showGridCard__container--title-image">
          <h3>{post.title}</h3>
          <div className="showGridCard__container--image" />
        </div>
        <p>{post.body}</p>

        <button className="showGridCard__container--button">Save</button>
      </div>
    </div>
  );
};
