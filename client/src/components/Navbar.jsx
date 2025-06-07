// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Ensure your CSS path is correct
import { useUserContext } from "../../context/UserContext";

const Navbar = () => {
  const { user } = useUserContext();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">My Restaurant</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
          <li>
            <Link to="/pizzas">Pizzas</Link>
          </li>
          <li>
            <Link to="/desserts">Desserts</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/reservation-info">Voir Reservation Infos</Link>
          </li>
          <li>
            <Link to="/user-info">User Info</Link>
          </li>

          {/* Si l'utilisateur est connecté, afficher son prénom, sinon afficher "Login" */}
          <li>
            {user ? (
              <span>Bienvenue, {user.firstname}</span> // Affiche le prénom de l'utilisateur
            ) : (
              <Link to="/login">Login</Link> // Affiche "Login" si l'utilisateur n'est pas connecté
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
