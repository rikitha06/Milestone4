import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import MakeAppointment from "./components/MakeAppointment";
import UpdateAppointment from "./components/UpdateAppointment";
import CancelAppointment from "./components/CancelAppointment";
import AddPatient from "./components/AddPatient";
import ViewDoctors from "./components/ViewDoctors";
import PaymentMethod from "./components/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientDashboard />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/view-doctors" element={<ViewDoctors />} />
        <Route path="/make-appointment" element={<MakeAppointment />} />
        <Route path="/update-appointment" element={<UpdateAppointment />} />
        <Route path="/cancel-appointment" element={<CancelAppointment />} />
        <Route path="/payments" element={<PaymentMethod />} />
      </Routes>
    </Router>
  );
}

export default App;
