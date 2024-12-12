import React from "react";
import "../styles/card.scss";

interface AcitvitiesCardProps {
  name: string;
  image: string;
}

export const ActivitiesCard: React.FC<AcitvitiesCardProps> = (props) => {
  return (
    <div className="card-container">
      <h2 className="card-header">{props.name}</h2>
      <figure className="card-image">
        <img
          src={props.image}
          alt={props.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </figure>
    </div>
  );
};
