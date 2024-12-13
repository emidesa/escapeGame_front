import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../App.css';
import contactService from '../../services/contactService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Gérer les changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;

    try {
      const response = await contactService.sendContact(formData);  

      if (response.status === 200) {
        alert('Message envoyé avec succès');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      alert('Erreur de connexion au serveur');
    }
  };
    
  return (
    <Container className="contact-page">
      <Row>
        <Col>
          <h1 className="text-center">Contacts</h1>
          <p className="text-center">
            Une question ou une énigme à résoudre ? Plongez dans l'univers du mystère et contactez-nous dès maintenant !
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name"  
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Enter your message" 
                    name="message"  
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
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
  );
};

export default ContactPage;
