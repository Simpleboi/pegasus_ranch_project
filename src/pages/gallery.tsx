import React, { useState, useEffect } from "react";
import "../styles/gallery.scss";
import imageOne from "/assets/images/gallery-banner-one.jpg";
import imageTwo from "/assets/images/gallery-banner-two.png";
import imageThree from "/assets/images/gallery-banner-three.png";
import imageFour from "/assets/images/gallery-banner-four.png";
import imageFive from "/assets/images/gallery-banner-five.png";
// import imageSix from "/assets/images/gallery-banner-six.png";
import imageSeven from "/assets/images/gallery-banner-seven.png";
import imageEight from "/assets/images/gallery-banner-eight.png";
import imageNine from "/assets/images/gallery-banner-nine.png";
import imageTen from "/assets/images/gallery-banner-ten.png";
import imageEleven from "/assets/images/gallery-banner-eleven.png";
import imageTwelve from "/assets/images/gallery-banner-twelve.png";
import imageThirteen from "/assets/images/gallery-banner-thirteen.png";
import imageFourteen from "/assets/images/gallery-banner-fourteen.png";
import imageSixteen from "/assets/images/gallery-banner-sixteen.png";
import imageSeventeen from "/assets/images/gallery-banner-seventeen.png";


// import CarouselCard from "../components/carousel";

interface CarouselProps {
  images: string[]; // Array of strings for image URLs
  autoSlide?: boolean; // Optional: Default is true
  slideInterval?: number; // Optional: Default is 3000ms
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlide = false,
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
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <figure key={index} className="carousel-image-wrapper">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </figure>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextImage}>
        <i className="bx bx-chevron-right"></i>
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
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
  const images = [
    imageOne,
    imageTwo, 
    imageThree,
    imageFour,
    imageFive,
    imageSeven,
    imageEight,
    imageNine,
    imageTen,
    imageEleven,
    imageTwelve,
    imageThirteen,
    imageFourteen,
    imageSixteen,
    imageSeventeen
  ]

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
