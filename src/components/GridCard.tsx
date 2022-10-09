import React from "react";

export const GridCard = () => {
  return (
    <div className="grid__card">
      <div className="grid__card--title-image">
        <h3>
          Sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h3>
        <div className="grid__card--image" />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only.
      </p>

      <div className="grid__card--icons-container">
        <div className="grid__card--icons-container-edit"/>
        <div className="grid__card--icons-container-delete"/>
      </div>
    </div>
  );
};
