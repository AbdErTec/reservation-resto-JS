import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sandwiches.css";

const Sandwiches = () => {
  const sandwiches = [
    {
      name: "Classic Chicken Sandwich",
      description: "Grilled chicken, fresh lettuce, and a savory sauce.",
      price: "80 MAD", // Updated price to MAD
      image: "src/assets/images/Coronation chicken and mango piccalilli sandwich recipe _ Sainsbury`s Magazine.jpg",
    },
    {
      name: "Veggie Delight",
      description: "A healthy mix of fresh vegetables and hummus.",
      price: "65 MAD", // Updated price to MAD
      image: "src/assets/images/Delicious Grilled Vegetable Sandwich Recipe.jpg",
    },
    {
      name: "Fish Finger Sandwich",
      description: "A Fish Finger Sandwich is a classic comfort food featuring crispy, golden-brown fish fingers nestled between two slices of soft, toasted bread.",
      price: "90 MAD", // Updated price to MAD
      image: "src/assets/images/Fish finger sandwich recipe _ Sainsbury`s Magazine.jpg",
    },
    {
      name: "Chicken Parmesan Sandwich",
      description: "Breaded chicken, marinara sauce, and melted cheese.",
      price: "95 MAD", // Updated price to MAD
      image: "src/assets/images/Chicken Parmesan Sub.jpg",
    },
    // Add more sandwiches as needed
  ];

  return (
    <div className="sandwiches-page">
      <h1>Our Delicious Sandwiches</h1>
      <div className="sandwiches-list">
        {sandwiches.map((sandwich, index) => (
          <div key={index} className="sandwich-card">
            <img src={sandwich.image} alt={sandwich.name} className="sandwich-image" />
            <h2 className="sandwich-name">{sandwich.name}</h2>
            <p className="sandwich-description">{sandwich.description}</p>
            <p className="sandwich-price">{sandwich.price}</p>
            <Link to={`/order/${sandwich.name}`} className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandwiches;
