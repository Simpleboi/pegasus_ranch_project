import React from 'react';

interface CarouselImageProps {
  text: string;
  url: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ text, url }) => {
  return (
    <div className="carousel-image-container">
      <img 
        src={url} 
        alt={text} 
      />
    </div>
  );
};

export default CarouselImage;
