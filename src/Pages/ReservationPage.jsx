import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import reservationService from '../../services/reservationService';
import "../App.css";
import gameService from '../../services/GameService';

const ReservationPage = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPlayers: 1,
    escapeGameId: '',
  });
  const [reservations, setReservations] = useState([]);
  const [escapeGames, setEscapeGames] = useState([]);

  const availableTimes = ['10:00', '12:00', '14:00', '16:00', '18:00'];

  useEffect(() => {
    fetchReservations();
    fetchEscapeGames();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await reservationService.getAllReservations();
      setReservations(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des réservations:", error);
    }
  };

  const fetchEscapeGames = async () => {
    try {
      const response = await gameService.getAllGames();
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        setEscapeGames(response.data);
        setFormData((prev) => ({ ...prev, escapeGameId: response.data[0].id_escapeGame }));
      } else {
        console.error("Aucun escape game n'a été trouvé");
        setEscapeGames([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des escape games:", error);
      setEscapeGames([]);
    }
  };

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
    setSelectedSlot(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
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

  const createReservation = async (reservationDate, reservationTime, numberOfPlayers, totalPrice, escapeGameId) => {
    const customerId = localStorage.getItem('userId'); // Assurez-vous que 'userId' est bien stocké dans localStorage lors de la connexion

    if (!customerId) {
      console.error('Aucun utilisateur connecté. Impossible de créer une réservation.');
      return;
    }

    const reservationData = {
      reservation_date: reservationDate,
      reservation_time: reservationTime,
      number_of_players: numberOfPlayers,
      total_price: totalPrice,
      status: 'confirmed',
      customer_id: customerId, // Utiliser l'ID de l'utilisateur ici
      escape_game_id: escapeGameId
    };

    try {
      const response = await reservationService.addReservation(reservationData); // Vous pouvez également remplacer cela par axios si vous préférez
      console.log('Réservation créée avec succès:', response.data);
      return response;
    } catch (error) {
      console.error('Erreur lors de la création de la réservation:', error);
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.escapeGameId) {
      alert('Veuillez sélectionner un escape game.');
      return;
    }

    const selectedEscapeGame = escapeGames.find(game => game.id_escapeGame === parseInt(formData.escapeGameId));

    if (!selectedEscapeGame) {
      alert('L\'escape game sélectionné n\'est pas valide. Veuillez réessayer.');
      return;
    }

    const total_price = selectedEscapeGame.price_per_person * formData.numberOfPlayers;

    if (selectedSlot && selectedTime && formData.name && formData.email && formData.phone) {
      try {
        await createReservation(selectedSlot, selectedTime, formData.numberOfPlayers, total_price, formData.escapeGameId);
        alert('Réservation confirmée !');
        setFormData({ name: '', email: '', phone: '', numberOfPlayers: 1, escapeGameId: escapeGames[0]?.id_escapeGame || '' });
        setSelectedSlot(null);
        setSelectedTime('');
        fetchReservations(); // Rafraîchir les réservations
        navigate('/profil'); // Redirect to profile page after successful reservation
      } catch (error) {
        alert('Créneau horaire indisponible. Veuillez réessayer.');
      }
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  };

  const isSlotAvailable = (day, time) => {
    const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return !reservations.some(
      (r) => r.reservation_date === date && r.reservation_time === time
    );
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < startDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = selectedSlot === `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasAvailableSlot = availableTimes.some(time => isSlotAvailable(day, time));
      days.push(
        <div
          key={`day-${day}`}
          className={`calendar-cell ${isSelected ? 'selected' : ''} ${!hasAvailableSlot ? 'unavailable' : ''}`}
          onClick={() => hasAvailableSlot && handleSlotSelect(day)}
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
        <div className="calendar-cell header-cell">Dim</div>
        <div className="calendar-cell header-cell">Lun</div>
        <div className="calendar-cell header-cell">Mar</div>
        <div className="calendar-cell header-cell">Mer</div>
        <div className="calendar-cell header-cell">Jeu</div>
        <div className="calendar-cell header-cell">Ven</div>
        <div className="calendar-cell header-cell">Sam</div>
        {renderDays()}
      </div>
      {selectedSlot && (
        <form className="reservation-form" onSubmit={handleFormSubmit}>
          <h3>Réserver pour {selectedSlot}</h3>
          <div>
            <label htmlFor="escapeGameId">Escape Game :</label>
            <select
              id="escapeGameId"
              name="escapeGameId"
              value={formData.escapeGameId}
              onChange={handleInputChange}
              required
            >
              <option value="">Sélectionnez un escape game</option>
              {escapeGames.length > 0 ? (
                escapeGames.map((game) => (
                  <option key={game.id_escapeGame} value={game.id_escapeGame}>
                    {game.name}
                  </option>
                ))
              ) : (
                <option disabled>Aucun escape game disponible</option>
              )}
            </select>
          </div>
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
                <option
                key={idx}
                value={time}
                disabled={!isSlotAvailable(new Date(selectedSlot).getDate(), time)}

                className={!isSlotAvailable(selectedSlot.split('-')[2], time) ? 'option-disabled' : ''}
              >
                {time} {!isSlotAvailable(selectedSlot.split('-')[2], time) ? '(Indisponible)' : ''}
              </option>
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
            type="number"
            name="numberOfPlayers"
            value={formData.numberOfPlayers}
            placeholder="Nombre de joueurs"
            onChange={handleInputChange}
            min="2"
            max="10"
            required
          />
          <button type="submit">Confirmer</button>
        </form>
      )}
    </div>
  );
};

export default ReservationPage;

