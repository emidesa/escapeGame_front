import React from "react";
import { useNavigate } from "react-router-dom";
import "../BookingPanel.css";

const BookingPanel = () => {
  const navigate = useNavigate();
  return (
    <div className="booking-panel">
      <h3>Vous souhaitez réserver ?</h3>
      <p>Consultez les disponibilités dès maintenant et réservez en cliquant ci-dessous.</p>
      <button className="booking-button" onClick={() => navigate('/reservation')}> Réservez ici !</button>
    </div>
  );
};

export default BookingPanel;

