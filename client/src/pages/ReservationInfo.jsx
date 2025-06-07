import React, { useState, useEffect } from "react";
import "../styles/ReservationInfo.css";

const ReservationInfo = () => {
  const [reservation, setReservation] = useState(null);

  // Example: Load reservation data from local storage or a backend API
  useEffect(() => {
    // Simulating fetching data
    const storedReservation = JSON.parse(localStorage.getItem("reservation"));
    if (storedReservation) {
      setReservation(storedReservation);
    }
  }, []);

  const handleUpdate = () => {
    alert("Redirecting to update reservation...");
    // Redirect to an update reservation page or show a form
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your reservation?")) {
      localStorage.removeItem("reservation"); // Simulate deletion
      setReservation(null);
      alert("Reservation deleted successfully.");
    }
  };

  return (
    <div className="reservation-info-page">
      <h1 className="reservation-info-title">Your Reservation Details</h1>
      {reservation ? (
        <div className="reservation-info-card">
          <p><strong>Name:</strong> {reservation.name}</p>
          <p><strong>Email:</strong> {reservation.email}</p>
          <p><strong>Phone:</strong> {reservation.phone}</p>
          <p><strong>Date:</strong> {reservation.date}</p>
          <p><strong>Time:</strong> {reservation.time}</p>
          <p><strong>Guests:</strong> {reservation.guests}</p>
          <p><strong>Special Requests:</strong> {reservation.specialRequests || "None"}</p>
          <div className="reservation-buttons">
            <button onClick={handleUpdate} className="update-button">Update</button>
            <button onClick={handleDelete} className="delete-button">Delete</button>
          </div>
        </div>
      ) : (
        <p>No reservation found. Please make a reservation.</p>
      )}
    </div>
  );
};

export default ReservationInfo;
