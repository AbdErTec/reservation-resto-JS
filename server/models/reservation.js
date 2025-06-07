const mongoose = require("mongoose");
const shortid = require('shortid');

const reservationSchema = new mongoose.Schema({
  reservation_id: {
    type: String,
    default: shortid.generate,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // Time: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Email invalide"], // Regex pour valider l'email
  },
  special_requests: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: true,
    min: 1000000000,
  },
  table_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tbl",
    required: true,
  }, // Updated to ObjectId
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  }, // Updated to ObjectId
});

module.exports = mongoose.model("Reservation", reservationSchema);
