import { Link } from "react-router-dom";
import { strings } from "../utils/strings";

export const NotFound = () => {
  return (
    <div className="notFound">
      <h1>{strings.notFoundFirstTitle}</h1>
      <p>{strings.notFoundSecondTitle}</p>
      <div className="notFound__image" />
      <button className="notFound__button">
        <Link to="/">{strings.notFoundButton}</Link>
      </button>
    </div>
  );
};
