import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/Home.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "src/assets/images/4812.jpg_wh860.jpg",
    "src/assets/images/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246059.avif",
    "src/assets/images/6055.jpg_wh860.jpg",
  ];

  return (
    <div className="home-container">
      <Slider {...sliderSettings} className="hero-slider">
        {images.map((img, index) => (
          <div key={index} className="slider-image">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="hero-content">
        <h1 className="hero-title">The Best Tasting Experience!</h1>
        <p className="hero-subtitle">
          We offer awesome recipes and the most talented chefs in town!
        </p>
        <Link to="/reservation" className="hero-button">
          Get a Reservation Now
        </Link>
        {/* Add additional navigation links here */}
        <Link to="/about" className="hero-button">
          Learn More About Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
