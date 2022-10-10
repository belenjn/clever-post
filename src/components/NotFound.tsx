import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Oops!</h1>
      <p>The page you were looking for does not exist</p>
      <div className="notFound__image" />
      <button className="notFound__button">
        <Link to="/">Go home</Link>
      </button>
    </div>
  );
};
