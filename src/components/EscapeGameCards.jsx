import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import '../App.css';
const EscapeGameCards = ({ games }) => {
    return <>
    <div className="game-cards-section">
      <Row>
        {games.map((game, index) => (
          <Col md={4} key={index}>
            <Card className="game-card">
              <Card.Img src={game.image} alt={game.title} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
              </Card.Body>
              <div className="game-card-button">
                <Button variant="primary" className="btn-pill">
                  Voir plus
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>    
    </>;
}
 
export default EscapeGameCards;
