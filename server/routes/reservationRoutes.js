const express = require("express");
const reservationController = require("../controllers/reservationController");
const router = express.Router();

// Add a reservation
router.post("/addReservation", reservationController.addReservation);

// Get all reservations
router.get("/getAllReservations", reservationController.getAllReservations);

// Get reservation by ID
router.get("/getReservationById/:reservation_id", reservationController.getReservationById);

// Delete reservation
router.delete(
  "/deleteReservation/:reservation_id",
  reservationController.deleteReservation
);

module.exports = router;
