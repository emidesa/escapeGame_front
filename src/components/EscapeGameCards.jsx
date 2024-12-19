import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../App.css';

const EscapeGameCards = ({ games }) => {
    const navigate = useNavigate();   

    const handleClick = (path) => {
        navigate(path);
    };

    return <>
        <div className="game-cards-section">
            <Row>
                {games.map((game, index) => (
                    <Col md={4} key={index} className="d-flex justify-content-center">
                        <div className="game-card-wrapper">
                            <div
                                className="game-card"
                                style={{ backgroundImage: `url(${game.image})` }}
                            >
                                <div className="game-card-overlay">
                                    <h3 className="game-card-title">{game.title}</h3>
                                </div>
                            </div>
                            <div className="game-card-button">
                                <Button
                                    variant="primary"
                                    className="btn-pill"
                                    onClick={() => handleClick(game.path)}
                                >
                                    Je découvre !
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    </>;
};

export default EscapeGameCards;
