import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard.js";
import AddPatient from "./components/AddPatient.js";
import MakeAppointment from "./components/MakeAppointement.js";
import ViewAppointment from "./components/ViewAppointment.js";
import CancelAppointment from "./components/CancelAppointment.js";
import UpdateAppointment from "./components/UpdateAppointment.js";
import FindDoctors from "./components/findDoctors.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientDashboard />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/make-appointment" element={<MakeAppointment />} />
        <Route path="/view-appointment" element={<ViewAppointment />} />
        <Route path="/update-appointment" element={<UpdateAppointment />} />
        <Route path="/cancel-appointment" element={<CancelAppointment />} />
        <Route path="/find-doctors" element={<FindDoctors />} />
      </Routes>
    </Router>
  );
}

export default App;
