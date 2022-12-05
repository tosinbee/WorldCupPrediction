import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    button: false,
  };
  return (
    <div className="imageslider">
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
