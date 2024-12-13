import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../App.css';

const ContactPage = () => {
    return <>




    <Container className="contact-page">
      <Row>
        <Col>
          <h1 className="text-center">Contacts</h1>
          <p className="text-center">Une question ou une énigme à résoudre ? Plongez dans l'univers du mystère et contactez-nous dès maintenant !</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formSurname" className="mt-3">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" placeholder="Enter your surname" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <i className="bi bi-geo-alt" style={{ fontSize: '2rem' }}></i>
        </Col>
      </Row>
    </Container>
  

    
    </>;
}
 
export default ContactPage;