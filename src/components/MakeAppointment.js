import React, { useState } from "react";
import axios from "../services/api";
import "../CSS/MakeAppointments.css";

function MakeAppointment() {
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDateTime, setAppointmentDateTime] = useState("");
  const [reason, setReason] = useState("");

  const handleAppointmentSubmission = async () => {
    const data = { doctorId, appointmentDateTime, reason };
    try {
      await axios.post("/patient/book-appointment", data);
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <div className="make-appointment">
      <h2>Make Appointment</h2>
      <form className="appointment-form">
        <label>Doctor ID:</label>
        <input
          type="text"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          placeholder="Enter Doctor ID"
        />
        <label>Appointment Date & Time:</label>
        <input
          type="datetime-local"
          value={appointmentDateTime}
          onChange={(e) => setAppointmentDateTime(e.target.value)}
        />
        <label>Reason:</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason"
        ></textarea>
        <button type="button" onClick={handleAppointmentSubmission}>
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default MakeAppointment;
