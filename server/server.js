const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require('cors');
// const routeClient = require('./routes/clientRoutes');

// const ap = require('./app');
const app = express();

// app.use(session({
//     secret: 'monSecret',  // Un secret pour signer le cookie de session
//     resave: false,        // Ne pas sauvegarder la session si rien n'a changé
//     saveUninitialized: true,  // Créer la session même si elle n'a pas de données
//     cookie: { secure: false }  // Ne pas forcer HTTPS (utile en développement)
// }));

// Connexion à MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/restauDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB:", error);
  });

//cors
app.use(cors());
// Middleware
app.use(express.json());

// app.use(bodyParser.json());
// Définition des routes
// app.use('/api/client', routeClient);

const clientRoutes = require("./routes/clientRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const tableRoutes = require("./routes/tableRoutes");

app.use("/api/reservations", reservationRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/clients", clientRoutes);

// Démarrage du serveur
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
