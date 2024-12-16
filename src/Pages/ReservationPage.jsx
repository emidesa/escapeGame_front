import React, { useState } from 'react';
import "../App.css";

const Reservation = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [reservations, setReservations] = useState([]);

  const availableTimes = ['10:00', '12:00', '14:00', '16:00', '18:00'];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const startDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  const handleSlotSelect = (day) => {
    setSelectedSlot(`${currentYear}-${currentMonth + 1}-${day}`);
    setSelectedTime('');
  };

  const handleTimeSelect = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedSlot && selectedTime && formData.name && formData.email && formData.phone) {
      const newReservation = { ...formData, date: selectedSlot, time: selectedTime };
      setReservations((prev) => [...prev, newReservation]);
      alert('Réservation confirmée !');
      setFormData({ name: '', email: '', phone: '', address: '' });
      setSelectedSlot(null);
      setSelectedTime('');
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < startDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = selectedSlot === `${currentYear}-${currentMonth + 1}-${day}`;
      days.push(
        <div
          key={`day-${day}`}
          className={`calendar-cell ${isSelected ? 'selected' : ''}`}
          onClick={() => handleSlotSelect(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="nav-button">❮</button>
        <h2>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h2>
        <button onClick={handleNextMonth} className="nav-button">❯</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-cell header-cell">Sun</div>
        <div className="calendar-cell header-cell">Mon</div>
        <div className="calendar-cell header-cell">Tue</div>
        <div className="calendar-cell header-cell">Wed</div>
        <div className="calendar-cell header-cell">Thu</div>
        <div className="calendar-cell header-cell">Fri</div>
        <div className="calendar-cell header-cell">Sat</div>
        {renderDays()}
      </div>
      {selectedSlot && (
        <form className="reservation-form" onSubmit={handleFormSubmit}>
          <h3>Réserver pour {selectedSlot}</h3>
          <div>
            <label htmlFor="time">Créneau horaire :</label>
            <select
              id="time"
              value={selectedTime}
              onChange={handleTimeSelect}
              required
            >
              <option value="" disabled>Sélectionnez un créneau</option>
              {availableTimes.map((time, idx) => (
                <option key={idx} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Nom complet"
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Adresse email"
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Numéro de téléphone"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Adresse complète"
            onChange={handleInputChange}
          />
          <button type="submit">Confirmer</button>
        </form>
      )}
      <div className="reservations-list">
        <h3>Réservations :</h3>
        {reservations.map((res, idx) => (
          <div key={idx} className="reservation-item">
            <p>Date : {res.date}</p>
            <p>Heure : {res.time}</p>
            <p>Nom : {res.name}</p>
            <p>Email : {res.email}</p>
            <p>Téléphone : {res.phone}</p>
            <p>Adresse : {res.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservation;