import React from "react";
import "../styles/document.scss";



interface DocumentCardProps {
    url: string
    image: string
}

export const DocumentCard = () => {
  return (
    <div className="document-card">
      <figure className="document-image">
        <img src="#" alt="#" />
      </figure>
      <a href="#">Download</a>
    </div>
  );
};

export const Document: React.FC = () => {
  return (
    <section id="document" className="document">
    </section>
  );
};
