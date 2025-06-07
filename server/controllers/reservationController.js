const Reservation = require("../models/reservation");
const Tbl = require("../models/table");
const Client = require('../models/client');
const mongoose = require("mongoose");

// Add a reservation
exports.addReservation = async (req, res) => {
  try {
    const { date, Time, email, phone, special_requests, table_id, client_id } = req.body;
   
    // Ensure both client_id and table_id are provided
    if (!client_id || !table_id) {
      return res
        .status(400)
        .json({ error: "Client ID and Table ID are required." });
    }
    const client = await Client.findOne({ client_id });
    const table = await Tbl.findOne({table_id});
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    // Convert the client to ObjectId for saving in reservation
    const client_ObjectId = client._id;
    // Convert the table to ObjectId for saving in reservation
    const table_ObjectId = table._id;
    // Generate a user-friendly reservation_id
    const now = new Date();
    const formattedDate = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const randomSuffix = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    const reservation_id = `RES-${formattedDate}-${randomSuffix}`; // Example: RES-20250102-1234
    // Create a new reservation document
    const reservation = new Reservation({
      reservation_id,
      client_id: client_ObjectId, // Directly store ObjectId reference to Client
      email,
      phone,
      date,
      table_id: table_ObjectId, // Directly store ObjectId reference to Table
      special_requests,
    });

    // Save the reservation and populate related client and table data
    const savedReservation = await reservation.save();
    const populatedReservation = await Reservation.findById(
      savedReservation._id
    )
      .populate("client_id") // Populate client data
      .populate("table_id"); // Populate table data

    // Return the populated reservation data
    res
      .status(201)
      .json({
        message: "Reservation added successfully",
        reservation: populatedReservation,
      });
  } catch (error) {
    res
      .status(400)
      .json({
        message: "Error while adding the reservation",
        error: error.message,
      });
  }
};

// Get all reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate("client_id")
      .populate("table_id");
    res.status(200).json(reservations);
  } catch (error) {
    res.status(400).json({ message: "Error fetching reservations", error: error.message });
  }
};

// Get reservation by ID
exports.getReservationById = async (req, res) => {
  try {
    const { reservation_id } = req.params;
    const reservation = await Reservation.findById({reservation_id})
      .populate("client_id") // Populate client details
      .populate("table_id"); // Populate table details

    if (reservation) {
      res.status(200).json(reservation);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error fetching reservation", error: error.message });
  }
};

// Delete reservation by ID
exports.deleteReservation = async (req, res) => {
  try {
    const { reservation_id } = req.params;
    const reservation = await Reservation.findOneAndDelete({reservation_id});

    if (reservation) {
      res.status(200).json({ message: "Reservation deleted successfully" });
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error deleting reservation", error: error.message });
  }
};
