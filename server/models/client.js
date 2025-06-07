const mongoose = require("mongoose");
const shortid = require("shortid");

const clientschema = new mongoose.Schema({
  client_id: {
    type: String,
    default: shortid.generate,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Email invalide"], // Regex pour valider l'email
  },
  // numero: {
  //   type: Number,
  //   required: true,
  //   min: 1000000000,
  // },
  mdp: { type: String, required: true },
});

module.exports = mongoose.model("Client", clientschema);
