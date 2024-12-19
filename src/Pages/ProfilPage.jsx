import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import customerService from "../../services/customerService";
import reservationService from "../../services/reservationService";
import "../App.css";

const ProfilPage = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [reservations, setReservations] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("ID utilisateur non trouvé. Veuillez vous reconnecter.");
        navigate("/login");
        return;
      }
      const response = await customerService.getCustomer(userId);
      setUser(response.data);
      fetchUserReservations(userId);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
      } else {
        setError(
          "Une erreur est survenue lors de la récupération de vos données."
        );
      }
    }
  };

  const fetchUserReservations = async (userId) => {
    try {
      const response = await reservationService.getReservation(userId);
      setReservations(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des réservations", error);
    }
  };

  const checkTokenValidity = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token manquant. Veuillez vous reconnecter.");
      navigate("/login");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (checkTokenValidity()) {
      fetchUserData();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("ID utilisateur non trouvé. Veuillez vous reconnecter.");
        return;
      }
      await customerService.updateCustomer(userId, user);
      setIsEditing(false);
      alert("Profil mis à jour avec succès");
    } catch (error) {
      alert("Erreur lors de la mise à jour du profil");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    fetchUserData();
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible."
      )
    ) {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setError("ID utilisateur non trouvé. Veuillez vous reconnecter.");
          return;
        }
        await customerService.deleteCustomer(userId);
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        navigate("/login");
      } catch (error) {
        alert("Erreur lors de la suppression du compte");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleCancelReservation = async (reservationId) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir annuler cette réservation ?")
    ) {
      try {
        await reservationService.deleteReservation(reservationId);
        alert("Réservation annulée avec succès");
        fetchUserReservations(localStorage.getItem("userId"));
      } catch (error) {
        alert("Erreur lors de l'annulation de la réservation");
      }
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#9F8FBF",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{ textAlign: "center", color: "#29205E", marginBottom: "60px" }}
      >
        Votre profil
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#29205E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "2rem",
            marginBottom: "-40px",
            marginRight: "260px",
            border: "2px solid black",
            boxShadow: "15px -15px 4px 0px rgba(0, 0, 0, 0.25)",
            position: "absolute",
            top: "-20px",
          }}
        >
          {user.first_name[0]}
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#4A2B8C",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "15px -15px 4px 0px rgba(0, 0, 0, 0.25)",
            width: "320px",
            marginTop: "40px",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ color: "white", display: "block", marginBottom: "5px" }}
            >
              Nom
            </label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleInputChange}
              disabled={!isEditing}
              style={{
                width: "100%",
                padding: "8px 15px",
                borderRadius: "20px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ color: "white", display: "block", marginBottom: "5px" }}
            >
              Prénom
            </label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleInputChange}
              disabled={!isEditing}
              style={{
                width: "100%",
                padding: "8px 15px",
                borderRadius: "20px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ color: "white", display: "block", marginBottom: "5px" }}
            >
              Téléphone
            </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              style={{
                width: "100%",
                padding: "8px 15px",
                borderRadius: "20px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ color: "white", display: "block", marginBottom: "5px" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              style={{
                width: "100%",
                padding: "8px 15px",
                borderRadius: "20px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            {isEditing ? (
              <>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#6A2C9B",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#29205E",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Annuler
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEditing(true);
                  }}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#6A2C9B",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#29205E",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Supprimer
                </button>
                <button
                  onClick={handleLogout}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#29205E",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    position: "absolute",
                    top: "30px",
                    right: "30px",
                  }}
                >
                  Déconnexion
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      {/* Reservations Section */}
      <div
        style={{
          backgroundColor: "#4A2B8C",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "15px -15px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "80%",
          maxWidth: "600px",
          margin: "40px auto",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "20px" }}>
          Vos Réservations
        </h2>
        {reservations.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {reservations.map((reservation) => (
              <li
                key={reservation.id_reservation}
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <p>
                  <strong>Escape Game:</strong> {reservation.escape_game_name}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(reservation.reservation_date).toLocaleDateString(
                    "fr-FR"
                  )}
                </p>
                <p>
                  <strong>Heure:</strong> {reservation.reservation_time}
                </p>
                <p>
                  <strong>Nombre de joueurs:</strong>{" "}
                  {reservation.number_of_players}
                </p>
                <p>
                  <strong>Prix total:</strong> {reservation.total_price}€
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <button
                    onClick={() =>
                      handleCancelReservation(reservation.id_reservation)
                    }
                    style={{
                      padding: "8px 15px",
                      backgroundColor: "#29205E",
                      color: "white",
                      borderRadius: "20px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Annuler
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "white" }}>
            Vous n'avez pas encore de réservations.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfilPage;
