import React from "react";
import { Link } from "react-router-dom";
import "../styles/Desserts.css";

const Desserts = () => {
  const desserts = [
    {
      name: "Chocolate Cake",
      description: "A rich and moist chocolate cake with frosting.",
      price: "35 MAD",
      image: "src/assets/images/🍫🎂 Ina Garten’s Chocolate Cake.jpg",
    },
    {
      name: "Cheesecake",
      description: "Creamy cheesecake with a buttery graham cracker crust.",
      price: "45 MAD",
      image: "src/assets/images/Raspberry Cheesecake 🍰🍇 This creamy and rich….jpg",
    },
    {
      name: "Tiramisu",
      description: "A delicious Italian dessert with layers of coffee-soaked sponge.",
      price: "25 MAD",
      image: "src/assets/images/Egg Free Tiramisu.jpg",
    },
    {
      name: "Fruit Tart",
      description: "A refreshing fruit tart with a buttery crust and custard filling.",
      price: "50 MAD",
      image: "src/assets/images/Classic French Fruit Tart.jpg",
    },
    // Add more desserts as needed
  ];

  return (
    <div className="desserts-page">
      <h1>Our Sweet Desserts</h1>
      <div className="desserts-list">
        {desserts.map((dessert, index) => (
          <div key={index} className="dessert-card">
            <img src={dessert.image} alt={dessert.name} className="dessert-image" />
            <h2 className="dessert-name">{dessert.name}</h2>
            <p className="dessert-description">{dessert.description}</p>
            <p className="dessert-price">{dessert.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desserts;
