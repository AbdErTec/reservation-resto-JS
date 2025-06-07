// src/context/UserContext.js
import React, { createContext, useState, useContext } from "react";

// Crée un contexte pour l'utilisateur
const UserContext = createContext();

// Crée un hook personnalisé pour utiliser le UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// Crée un fournisseur (provider) pour envelopper l'application
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // stocke l'utilisateur (peut être un objet ou un ID)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
