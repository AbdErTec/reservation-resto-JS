import React from "react";
import { Link } from "react-router-dom";
import "../styles/Drinks.css";

const Drinks = () => {
  const drinks = [
    {
      name: "Moroccan Mint Tea",
      description: "A traditional and aromatic drink made with green tea, fresh mint leaves, and a generous amount of sugar.",
      price: "35 MAD",
      image: "src/assets/images/How to Make Moroccan Mint Tea.jpg",
    },
    {
      name: "Coca-Cola",
      description: "Classic soda with a refreshing taste.",
      price: "15 MAD",
      image: "src/assets/images/🍹🧊 Refreshing 𝗖𝗨𝗕𝗔 𝗟𝗜𝗕𝗥𝗘.jpg",
    },
    {
      name: "Lemonade",
      description: "Freshly squeezed lemonade for a tangy experience.",
      price: "15 MAD",
      image: "src/assets/images/Gluten-Free Levain Chocolate Chip Cookies.jpg",
    },
    {
      name: "Iced Tea",
      description: "Cool and refreshing iced tea with a hint of lemon.",
      price: "25 MAD",
      image: "src/assets/images/7 Healthy Iced Tea Recipes for Summer (that make a gallon!).jpg",
    },
    {
      name: "Orange Juice",
      description: "Freshly squeezed orange juice to start your day.",
      price: "15 MAD",
      image: "src/assets/images/Orange Crush Cocktail Recipe.jpg",
    },
    {
      name: "Classic Mojito",
      description: "A refreshing cocktail made with rum, lime, mint leaves, sugar, and soda water, offering a perfect balance of sweetness and citrus.",
      price: "20 MAD",
      image: "src/assets/images/Mojito Extra Twist for Cocktails.jpg",
    },
    {
      name: "Mango Smoothie",
      description: "A creamy blend of fresh mangoes, yogurt, and a touch of honey, creating a tropical, sweet drink",
      price: "25 MAD",
      image: "src/assets/images/Mango Milkshake.jpg",
    },
    {
      name: "Iced Latte",
      description: "A chilled coffee drink made with espresso and cold milk, served over ice",
      price: "30 MAD",
      image: "src/assets/images/Iced Salted Caramel Latte - Splenda®.jpg",
    },
   
    // Add more drinks as needed
  ];

  return (
    <div className="drinks-page">
      <h1>Our Refreshing Drinks</h1>
      <div className="drinks-list">
        {drinks.map((drink, index) => (
          <div key={index} className="drink-card">
            <img src={drink.image} alt={drink.name} className="drink-image" />
            <h2 className="drink-name">{drink.name}</h2>
            <p className="drink-description">{drink.description}</p>
            <p className="drink-price">{drink.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
