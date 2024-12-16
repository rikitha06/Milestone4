import React, { useState } from "react";
import axios from "../services/api";
import "../CSS/PaymentMethod.css";

const PaymentMethod = ({ appointmentId }) => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axios.post(`/patient/payment`, {
        appointmentId,
        amount,
      });
      alert("Payment successful!");
    } catch (error) {
      alert("Error processing payment.");
    }
  };

  return (
    <div class="payment-container">
      <h3>Payment</h3>
      <p>Make payment for Appointment ID: {appointmentId}</p>
      <label>Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default PaymentMethod;
