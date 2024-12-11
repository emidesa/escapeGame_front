import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';

const LoginPage = () => {
    return <>
    
    <div className="login-page">
      <Container className="text-center py-5">
        <h1 className="mb-3">Connexion</h1>
        <p>Connectez-vous pour entrer dans l'univers mystérieux et résoudre les énigmes les plus captivantes !</p>
        
        <Row className="justify-content-center align-items-center mt-5">
          {/* Formulaire de connexion */}
          <Col md={4} className="text-start">
            <h3 className="form-title">Connexion</h3>
            <Form className="login-form">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Sign In
              </Button>
            </Form>
          </Col>

          {/* Ligne de séparation */}
          <Col md={1} className="text-center separator">
            <div className="vertical-line"></div>
          </Col>

          {/* Formulaire de création de compte */}
          <Col md={4} className="text-start">
            <h3 className="form-title">Créer son compte</h3>
            <Form className="signup-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter your surname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmailSignup">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPasswordSignup">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    
    </>;
}
 
export default LoginPage;