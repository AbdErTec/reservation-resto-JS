import React, { useState } from "react";
import "../styles/Reservation.css";
import axios from "axios";
const Reservation = () => {
  const [formData, setFormData] = useState({
    client_id: "",
    email: "",
    phone: "",
    date: "",
    // time: "",
    table_id: "",
    special_requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Reservation submitted! We'll contact you shortly.");
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     date: "",
  //     time: "",
  //     tables: "",
  //     specialRequests: "",
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/reservations/addReservation", formData);
      alert("Reservation submitted! we'll contact you shortly. ");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding reservation:", error.response.data);
    }
  };

  return (
    <div className="reservation-page">
      <h1 className="reservation-title">Make a Reservation</h1>
      <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-group">
  <label htmlFor="client_id">Client ID:</label>
  <input
    type="text"
    id="client_id"
    name="client_id"
    value={formData.client_id}
    onChange={handleChange}
    required
  />
</div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="Time"
            name="Time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="table_id">Table Number:</label>
          <input
            type="number"
            id="table_id"
            name="table_id"
            value={formData.table_id}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests:</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.special_requests}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Reservation
        </button>
      </form>
    </div>
  );
};

export default Reservation;
