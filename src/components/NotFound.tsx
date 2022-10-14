import { Link } from "react-router-dom";
import { STRINGS } from "../utils/strings";

export const NotFound = () => {
  return (
    <div className="notFound">
      <h1>{STRINGS.notFoundFirstTitle}</h1>
      <p>{STRINGS.notFoundSecondTitle}</p>
      <div className="notFound__image" />
      <button className="notFound__button">
        <Link to="/">{STRINGS.notFoundButton}</Link>
      </button>
    </div>
  );
};
