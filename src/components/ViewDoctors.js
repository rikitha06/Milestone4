import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/ViewDoctors.css"; // Ensure this matches your CSS import path

const API_BASE_URL = "http://localhost:8080/api/patient";

function ViewDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [specialization, setSpecialization] = useState("");
  const [availabilityDate, setAvailabilityDate] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const params = {};
      if (specialization) params.specialization = specialization;
      if (availabilityDate) params.date = availabilityDate;

      const response = await axios.get(`${API_BASE_URL}/findDoctors`, {
        params,
      });
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  return (
    <div className="view-doctors">
      {/* Page Header */}
      <h2>Find & View Doctors</h2>

      {/* Search Filters Section */}
      <div className="find-doctors">
        <label>Specialization</label>
        <br></br>
        <input
          type="text"
          placeholder="Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="specialization-input"
        />
        <br></br>
        <label>AvailabilityDate</label>
        <br></br>
        <input
          type="date"
          value={availabilityDate}
          onChange={(e) => setAvailabilityDate(e.target.value)}
          className="date-input"
        />
        <button onClick={fetchDoctors} className="search-button">
          Search
        </button>
      </div>

      {/* List of Doctors */}
      <ul className="doctors-list">
        {doctors.length === 0 ? (
          <li className="no-doctors">
            No doctors found. Try refining your search.
          </li>
        ) : (
          doctors.map((doctor) => (
            <li key={doctor.id} className="doctor-card">
              <p className="doctor-name">Name: {doctor.name}</p>
              <p className="doctor-specialization">
                Specialization: {doctor.specialization}
              </p>
              <p className="doctor-availability">
                Availability: {doctor.availability || "N/A"}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ViewDoctors;
