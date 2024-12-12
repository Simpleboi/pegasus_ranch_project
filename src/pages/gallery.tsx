import React from "react";
import "../styles/gallery.scss";
import CarouselCard from "../components/carousel";

const Gallery: React.FC = () => {
  return (
    <section id="gallery-page">
      <h1>Gallery</h1>
      <p>Explore the beauty and excitement of Pegasus Ranch through our image gallery.</p>
      <CarouselCard />
    </section>
  );
};

export default Gallery;
