// App.jsx
import React, { useState } from "react"; // Import de useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Sandwiches from "./pages/Sandwiches";
import Pizzas from "./pages/Pizzas";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserInfo from "./pages/UserInfo";
import ReservationInfo from "./pages/ReservationInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserProvider } from "../context/UserContext"; // Import du UserProvider
import "./index.css";

const App = () => {
  const [user, setUser] = useState(null); // L'état pour stocker les infos de l'utilisateur
  // const handleUserLogin = (user) => {
  //   setUserData(user); // Mettre à jour les données de l'utilisateur après la connexion
  // };
  return (
    <UserProvider>
    <Router>
      <Navbar user={user} /> {/* Passe user à Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/sandwiches" element={<Sandwiches />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/login" element={<Login setUser={setUser} />} /> {/* Passe setUser à Login */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-info" element={<UserInfo  />} />
        <Route path="/reservation-info" element={<ReservationInfo />} />
      </Routes>
      <Footer />
    </Router>
    </UserProvider>
  );
};

export default App;
