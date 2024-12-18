import React from "react";
import "../BookingPanel.css";

const BookingPanel = () => {
  return (
    <div className="booking-panel">
      <h3>Vous souhaitez réserver ?</h3>
      <p>Consultez les disponibilités dès maintenant et réservez en cliquant ci-dessous.</p>
      <button className="booking-button">Réservez ici !</button>
    </div>
  );
};

export default BookingPanel;

