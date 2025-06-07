import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pizzas.css";

const Pizzas = () => {
  const pizzas = [
    {
      name: "Margherita Pizza",
      description: "Classic pizza with mozzarella, tomatoes, and basil.",
      price: "110 MAD", // Updated price to MAD
      image: "src/assets/images/Pizza Margherita Recipe.jpg",
    },
    {
      name: "Pepperoni Pizza",
      description: "Topped with spicy pepperoni and mozzarella.",
      price: "130 MAD", // Updated price to MAD
      image: "src/assets/images/ba0db699-9450-4d80-88d2-26ba7ef5ddb1.jpg",
    },
    {
      name: "BBQ Chicken Pizza",
      description: "BBQ sauce, grilled chicken, and mozzarella cheese.",
      price: "140 MAD", // Updated price to MAD
      image: "src/assets/images/Thin Crust BBQ Chicken Pizza • The Candid Cooks.jpg",
    },
    {
      name: "Vegetarian Pizza",
      description: "Loaded with fresh vegetables and mozzarella.",
      price: "120 MAD", // Updated price to MAD
      image: "src/assets/images/Ultimate Veggie Pizza (+ Toppings Guide).jpg",
    },
    {
      name: "Hawaiian Paradise",
      description: "A sweet and savory mix of ham, pineapple, and mozzarella cheese.",
      price: "120 MAD", // Updated price to MAD
      image: "src/assets/images/Tropical Delight_ Savory Hawaiian Pizza Creation.jpg",
    },
    {
      name: "Four Cheese Fantasy",
      description: "A rich combination of mozzarella, cheddar, parmesan, and blue cheese.",
      price: "140 MAD", // Updated price to MAD
      image: "src/assets/images/Quattro Formaggi Pizza (Four Cheese).jpg",
    },
    {
      name: "Supreme Deluxe",
      description: "A combo of pepperoni, sausage, green peppers, mushrooms, black olives, and mozzarella.",
      price: "135 MAD", // Updated price to MAD
      image: "src/assets/images/Make a Classic Supreme Pizza at Home.jpg",
    },
    {
      name: "Shrimp Scampi Pizza",
      description: "Shrimp, garlic, butter, lemon zest, and mozzarella, with a hint of parsley for a delicious seafood pizza.",
      price: "150 MAD", // Updated price to MAD
      image: "src/assets/images/7215fd16-0b01-46f5-803e-71df52207786.jpg",
    },
    // Add more pizzas as needed
  ];

  return (
    <div className="pizzas-page">
      <h1>Our Delicious Pizzas</h1>
      <div className="pizzas-list">
        {pizzas.map((pizza, index) => (
          <div key={index} className="pizza-card">
            <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            <h2 className="pizza-name">{pizza.name}</h2>
            <p className="pizza-description">{pizza.description}</p>
            <p className="pizza-price">{pizza.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizzas;
