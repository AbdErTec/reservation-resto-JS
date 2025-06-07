import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserInfo.css";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../../context/UserContext";

const UserInfo = () => {
  const { setUser } = useUserContext(); // Utilisation du setUser du contexte
  const { user } = useUserContext();
  const [userData, setUserData] = useState(null);  // Initialisation avec null au lieu de {} 
  const [errorMessage, setErrorMessage] = useState(""); // Pour afficher les erreurs
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      // Make the DELETE request to the backend
      await axios.delete(`http://localhost:3000/api/clients/deleteClient/${user.client_id}`);
      // Optionally clear the user context after deleting the account
      setUser(null); // Set user to null, or reset the user context to log the user out
      // Redirect the user to the home page
      navigate("/");
    } catch (error) {
      console.error("Error deleting account:", error.response?.data || error.message);
      setErrorMessage("Failed to delete your account. Please try again later.");
    }
  };

  useEffect(() => {
    console.log("User in UserInfo:", user); // Vérifie que 'user' est défini
    if (user && user.firstname) {  // Vérifier que 'user' et 'client_id' existent
      const fetchUserData = async () => {
        try {
          // Utiliser le client_id de l'utilisateur du contexte pour faire la requête
          const response = await axios.get(`http://localhost:3000/api/clients/getClientByName/${user.firstname}`);
          console.log("Response from API:", response.data);  // Affiche la réponse API
          // console.log(`http://localhost:3000/api/client/getClientById/${user.client_id}`);
          // console.log(response);
          setUserData(response.data); // Mettez à jour les données de l'utilisateur
        } catch (error) {
          console.error("Error fetching user data:", error.response?.data || error.message);
          setErrorMessage("Failed to load user data. Please try again later.");
        }
      };

      fetchUserData();  // Appel de la fonction pour récupérer les données utilisateur
    } else {
      setErrorMessage("No client_id found.");
    }
  }, [user]);  // Effect se déclenche chaque fois que 'user' change

  // Afficher un message d'erreur si aucune donnée utilisateur n'est disponible
  if (!user) {
    return <p>You must be logged in to view your profile.</p>;
  }

  // Affichage de l'écran de chargement si userData est null
  if (!userData) {
    return <p>Loading your profile...</p>;
  }

  return (
    <div className="user-info-page">
      <div className="user-card">
        <h1 className="user-title">Your Profile</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="user-details">
          <p><strong>ID:</strong> {userData.client_id}</p>
          <p><strong>First Name:</strong> {userData.firstname}</p>
          <p><strong>Last Name:</strong> {userData.lastname}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
        <div className="user-buttons">
          {/* <button className="update-button">Update Info</button> */}
          <button className="delete-button" onClick={handleDelete}>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
