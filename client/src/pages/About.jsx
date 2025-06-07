import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-hero-title">Welcome to Our Restaurant!</h1>
        <p className="about-hero-subtitle">
          Discover our rich history, flavors, and the passion behind our cooking.
        </p>
      </div>

      {/* Restaurant Information Section */}
      <div className="restaurant-info">
        <div className="restaurant-location">
          <h2>Location</h2>
          <p>1234 Tasty St., Flavor City, 5678</p>
        </div>
        <div className="restaurant-rating">
          <h2>Rating</h2>
          <div className="stars">
            <span>⭐⭐⭐⭐⭐</span> {/* 5 stars for example */}
          </div>
        </div>
        <div className="restaurant-hours">
          <h2>Opening Hours</h2>
          <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Established in 2005, our restaurant has been serving delicious meals
          to food lovers in Flavor City. We are passionate about providing high
          quality food made with fresh ingredients and expert cooking. Our chefs
          specialize in a variety of cuisines, from classic Italian pasta to
          gourmet burgers. Our goal is to bring people together through great
          food and a welcoming atmosphere.
        </p>
      </div>
    </div>
  );
};

export default About;
