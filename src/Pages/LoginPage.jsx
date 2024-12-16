import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import '../App.css';
import customerService from '../../services/customerService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupFirstName, setSignupFirstName] = useState('');
    const [signupLastName, setSignupLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupTel, setSignupTel] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const addCustomer = async (e) => {
        e.preventDefault();
        try {
            const response = await customerService.addCustomer({ 
                first_name: signupFirstName, 
                last_name: signupLastName, 
                email: signupEmail, 
                password: signupPassword, 
                phone: signupTel
            });
            console.log('Utilisateur créé avec succès :', response.data);
            navigate('/login');
        } catch (err) {
            console.error('Erreur lors de la création de l\'utilisateur', err.response || err.message);
            setError(err.response?.data?.message || 'Une erreur est survenue lors de la création du compte');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            console.log('Tentative de connexion avec:', loginEmail);
            const response = await customerService.login(loginEmail, loginPassword);
            console.log('Connexion réussie', response.data);
            if (response.data && response.data.token && response.data.userId) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId.toString());
                console.log('Token stocké:', response.data.token);
                console.log('ID utilisateur stocké:', response.data.userId);
                navigate('/');
            } else {
                throw new Error('Données de connexion invalides');
            }
        } catch (err) {
            console.error('Erreur lors de la connexion', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Une erreur est survenue lors de la connexion');
        }
    };

    return (
        <div className="login-page">
            <Container className="text-center py-5">
                <h1 className="mb-2">Connexion</h1>
                <p className='mb-4'>Connectez-vous pour entrer dans l'univers mystérieux et résoudre les énigmes les plus captivantes !</p>
                
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Row className="justify-content-center align-items-center mt-5">
                    <Col md={4} className="text-start">
                        <h3 className="form-title">Connexion</h3>
                        <Form className="login-form" onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formLoginEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Entrez votre email" 
                                    value={loginEmail} 
                                    onChange={(e) => setLoginEmail(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLoginPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Entrez votre Mot de passe" 
                                    value={loginPassword} 
                                    onChange={(e) => setLoginPassword(e.target.value)} 
                                />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="w-100">
                                Connexion
                            </Button>
                        </Form>
                    </Col>

                    <Col md={1} className="text-center separator">
                        <div className="vertical-line"></div>
                    </Col>

                    <Col md={4} className="text-start">
                        <h3 className="form-title">Créer son compte</h3>
                        <Form className="signup-form" onSubmit={addCustomer}>
                            <Form.Group className="mb-3" controlId="formSignupFirstName">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Entrez votre nom" 
                                    value={signupFirstName} 
                                    onChange={(e) => setSignupFirstName(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSignupLastName">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Entrez votre Prénom" 
                                    value={signupLastName} 
                                    onChange={(e) => setSignupLastName(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSignupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Entrez votre email" 
                                    value={signupEmail} 
                                    onChange={(e) => setSignupEmail(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSignupTel">
                                <Form.Label>Téléphone</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Entrez votre Numéro" 
                                    value={signupTel} 
                                    onChange={(e) => setSignupTel(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSignupPassword">
                                <Form.Label>Mot de Passe</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Entrez votre Mot de Passe" 
                                    value={signupPassword} 
                                    onChange={(e) => setSignupPassword(e.target.value)} 
                                />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="w-100">
                                Inscription
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;

