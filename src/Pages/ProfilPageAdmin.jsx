import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import customerService from "../../services/customerService";
import contactService from "../../services/contactService";
import gameService from "../../services/gameService";
import reservationService from "../../services/reservationService";
import "../App.css";
import adminService from "../../services/adminService";

const AdminPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [contactMessages, setContactMessages] = useState([]);
  const [escapeGames, setEscapeGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeTab, setActiveTab] = useState("users");
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    console.log("Token récupéré :", adminToken);

    const isAdmin = localStorage.getItem("isAdmin");

    if (!adminToken || isAdmin !== "true") {
      console.error("Token admin manquant ou accès non autorisé");
      navigate("/AdminLogin");
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      await Promise.all([
        fetchUsers(),
        fetchContactMessages(),
        fetchEscapeGames(),
        fetchReservations(),
      ]);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      handleError(error);
    }
  };

  const fetchUsers = async () => {
    const adminToken = localStorage.getItem("adminToken");
    console.log("Token récupéré du localStorage :", adminToken);

    if (!adminToken) {
      console.error("Token admin manquant");
      navigate("/AdminLogin");
      return;
    }

    try {
      console.log("Envoi de la requête avec le token :", adminToken);

      const response = await adminService.getAllCustomers();
      console.log("Réponse de l'API :", response);
      console.log("Utilisateurs récupérés:", response);

      if (Array.isArray(response)) {
        setUsers(response);
      } else {
        console.error("La réponse n'est pas un tableau:", response);
        setUsers([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
      setUsers([]);
      handleError(error);
    }
  };

  const fetchContactMessages = async () => {
    try {
      const response = await contactService.getAllMessages();
      setContactMessages(response.data || []);
    } catch (error) {
      handleError(error);
    }
  };

  const fetchEscapeGames = async () => {
    try {
      const response = await gameService.getAllGames();
      setEscapeGames(response.data || []);
    } catch (error) {
      handleError(error);
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await reservationService.getAllReservations();
      setReservations(response.data || []);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    console.error("Erreur :", error);
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("isAdmin");
        navigate("/AdminLogin");
      }
    }
  };

  const handleUserUpdate = async () => {
    if (!selectedUser) return;
    try {
      await customerService.updateCustomer(
        selectedUser.id_customer,
        selectedUser
      );
      alert("Utilisateur modifié avec succès !");
      fetchUsers();
      setSelectedUser(null);
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
      alert("Une erreur est survenue lors de la modification.");
    }
  };

  const handleUserDelete = async (id_customer) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")
    ) {
      try {
        await customerService.deleteCustomer(id_customer);
        alert("Utilisateur supprimé avec succès !");
        fetchUsers();
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        alert("Une erreur est survenue lors de la suppression.");
      }
    }
  };

  const handleMessageDelete = async (messageId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce message ?")) {
      try {
        await contactService.deleteMessage(messageId);
        alert("Message supprimé avec succès !");
        fetchContactMessages();
      } catch (error) {
        console.error("Erreur lors de la suppression du message :", error);
        alert("Une erreur est survenue lors de la suppression.");
      }
    }
  };

  const handleGameUpdate = async () => {
    if (!selectedGame) return;
    try {
      await gameService.updateGame(selectedGame.id_escapeGame, selectedGame);
      alert("Escape game modifié avec succès !");
      fetchEscapeGames();
      setSelectedGame(null);
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
      alert("Une erreur est survenue lors de la modification.");
    }
  };

  const handleGameDelete = async (id_escapeGame) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cet escape game ?")
    ) {
      try {
        await gameService.deleteGame(id_escapeGame);
        alert("Escape game supprimé avec succès !");
        fetchEscapeGames();
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        alert("Une erreur est survenue lors de la suppression.");
      }
    }
  };

  const handleGameAdd = async () => {
    const newGame = {
      name: "Nouveau jeu",
      description: "Description du nouveau jeu",
      goal: "Objectif du jeu",
      duration: 60,
      max_players: 6,
      price_per_person: 25,
      category_id: 1,
    };
    try {
      await gameService.addGame(newGame);
      alert("Nouvel escape game ajouté avec succès !");
      fetchEscapeGames();
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
      alert("Une erreur est survenue lors de l'ajout.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#9F8FBF",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{ textAlign: "center", color: "#29205E", marginBottom: "40px" }}
      >
        Page d'administration
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setActiveTab("users")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "users" ? "#6A2C9B" : "#29205E",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Utilisateurs
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "messages" ? "#6A2C9B" : "#29205E",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Messages
        </button>
        <button
          onClick={() => setActiveTab("games")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "games" ? "#6A2C9B" : "#29205E",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Escape Games
        </button>
        <button
          onClick={() => setActiveTab("reservations")}
          style={{
            padding: "10px 20px",
            backgroundColor:
              activeTab === "reservations" ? "#6A2C9B" : "#29205E",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Réservations
        </button>
      </div>

      {activeTab === "users" && (
        <div>
          <h2 style={{ color: "#29205E" }}>Gestion des utilisateurs</h2>
          {users.length === 0 ? (
            <p>Aucun utilisateur trouvé.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {users.map((user) => (
                <li
                  key={user.id_customer}
                  style={{
                    padding: "10px",
                    margin: "5px 0",
                    backgroundColor: "#4A2B8C",
                    color: "white",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>
                    {user.first_name} {user.last_name} - {user.email}
                  </span>
                  <div>
                    <button
                      onClick={() => setSelectedUser(user)}
                      style={{
                        padding: "5px 10px",
                        marginRight: "5px",
                        backgroundColor: "#6A2C9B",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleUserDelete(user.id_customer)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#29205E",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {selectedUser && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "#4A2B8C",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <h3>Modifier l'utilisateur</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserUpdate();
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <label>Nom</label>
                  <input
                    type="text"
                    value={selectedUser.last_name}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        last_name: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Prénom</label>
                  <input
                    type="text"
                    value={selectedUser.first_name}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        first_name: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={selectedUser.email}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Téléphone</label>
                  <input
                    type="text"
                    value={selectedUser.phone}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        phone: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#6A2C9B",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {activeTab === "messages" && (
        <div>
          <h2 style={{ color: "#29205E" }}>Messages de contact</h2>
          {contactMessages.length === 0 ? (
            <p>Aucun message trouvé.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {contactMessages.map((message) => (
                <li
                  key={message.id_contact}
                  style={{
                    padding: "10px",
                    margin: "5px 0",
                    backgroundColor: "#4A2B8C",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    <strong>De :</strong> {message.name} ({message.email})
                  </p>
                  <p>
                    <strong>Date :</strong>{" "}
                    {new Date(message.created_at).toLocaleString()}
                  </p>
                  <p>
                    <strong>Message :</strong> {message.message}
                  </p>
                  <button
                    onClick={() => handleMessageDelete(message.id_contact)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#29205E",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === "games" && (
        <div>
          <h2 style={{ color: "#29205E" }}>Gestion des Escape Games</h2>
          <button
            onClick={handleGameAdd}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6A2C9B",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            Ajouter un nouveau jeu
          </button>
          {escapeGames.length === 0 ? (
            <p>Aucun escape game trouvé.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {escapeGames.map((game) => (
                <li
                  key={game.id_escapeGame}
                  style={{
                    padding: "10px",
                    margin: "5px 0",
                    backgroundColor: "#4A2B8C",
                    color: "white",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{game.name}</span>
                  <div>
                    <button
                      onClick={() => setSelectedGame(game)}
                      style={{
                        padding: "5px 10px",
                        marginRight: "5px",
                        backgroundColor: "#6A2C9B",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleGameDelete(game.id_escapeGame)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#29205E",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {selectedGame && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "#4A2B8C",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <h3>Modifier l'Escape Game</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleGameUpdate();
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <label>Nom</label>
                  <input
                    type="text"
                    value={selectedGame.name}
                    onChange={(e) =>
                      setSelectedGame({ ...selectedGame, name: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Description</label>
                  <textarea
                    value={selectedGame.description}
                    onChange={(e) =>
                      setSelectedGame({
                        ...selectedGame,
                        description: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                      minHeight: "100px",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label>Objectif</label>
                  <input
                    type="text"
                    value={selectedGame.goal}
                    onChange={(e) =>
                      setSelectedGame({ ...selectedGame, goal: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Prix par personne</label>
                  <input
                    type="number"
                    value={selectedGame.price_per_person}
                    onChange={(e) =>
                      setSelectedGame({
                        ...selectedGame,
                        price_per_person: parseFloat(e.target.value),
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Nombre maximum de joueurs</label>
                  <input
                    type="number"
                    value={selectedGame.max_players}
                    onChange={(e) =>
                      setSelectedGame({
                        ...selectedGame,
                        max_players: parseInt(e.target.value),
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Durée (en minutes)</label>
                  <input
                    type="number"
                    value={selectedGame.duration}
                    onChange={(e) =>
                      setSelectedGame({
                        ...selectedGame,
                        duration: parseInt(e.target.value),
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#6A2C9B",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {activeTab === "reservations" && (
        <div>
          <h2 style={{ color: "#29205E" }}>Réservations</h2>
          {reservations.length === 0 ? (
            <p>Aucune réservation trouvée.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {reservations.map((reservation) => (
                <li
                  key={reservation.id_reservation}
                  style={{
                    padding: "10px",
                    margin: "5px 0",
                    backgroundColor: "#4A2B8C",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    <strong>Client :</strong> {reservation.customer_id}
                  </p>
                  <p>
                    <strong>Escape Game :</strong>{" "}
                    {reservation.escape_game_name}
                  </p>
                  <p>
                    <strong>Date :</strong>{" "}
                    {new Date(
                      reservation.reservation_date
                    ).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Heure :</strong> {reservation.reservation_time}
                  </p>
                  <p>
                    <strong>Nombre de joueurs :</strong>{" "}
                    {reservation.number_of_players}
                  </p>
                  <p>
                    <strong>Prix total :</strong> {reservation.total_price}€
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
