import React, { useState, useEffect } from "react";
import winterCamp from "/assets/images/winter-camp-baner.jpg";
import miniBanner from "/assets/images/schedule-mini-banner.jpg";
import homepage from "/assets/images/activies-homepage.jpg";
import "../styles/gallery.scss";
// import CarouselCard from "../components/carousel";

interface CarouselProps {
  images: string[]; // Array of strings for image URLs
  autoSlide?: boolean; // Optional: Default is true
  slideInterval?: number; // Optional: Default is 3000ms
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlide = true,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next Button
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle Previous Button
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide Logic
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextImage, slideInterval);
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [autoSlide, slideInterval]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        <i className="bx bx-chevron-left"></i>
      </button>
      <figure className="carousel-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </figure>
      <button className="carousel-button next" onClick={nextImage}>
        <i className="bx bx-chevron-right"></i>
      </button>
      <div className="carousel-dots">
        {images.map((_: any, index: any) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const images = [winterCamp, miniBanner, homepage];

  return (
    <section id="gallery-page">
      <h1>Gallery</h1>
      <p>
        Explore the beauty and excitement of Pegasus Ranch through our image
        gallery.
      </p>
      <Carousel images={images}></Carousel>
    </section>
  );
};

export default Gallery;
