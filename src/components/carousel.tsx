import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./caroUelImage";
import "../styles/carousel.scss";
import winterCamp from "../../public/assets/images/winter-camp-baner.jpg";
import miniBanner from "../../public/assets/images/schedule-mini-banner.jpg";
import homepage from "../../public/assets/images/activies-homepage.jpg";

function CarouselCard() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <CarouselImage text="First slide" url={winterCamp} />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" url={miniBanner}/>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" url={homepage}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCard;
