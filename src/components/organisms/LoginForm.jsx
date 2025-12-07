import React from 'react';
import { H1, Small } from '../atoms/Typography';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginRegisterLayout.css';

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email);
};

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('El correo electrónico debe ser válido (ej: usuario@dominio.com).');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try{
      const response = await fetch('https://microservices-gamma.vercel.app/auth/access', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }
      console.log('Login exitoso');
      navigate('/home');
    }catch(error){
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      return;
    }
  }

  return (
    <div className="login-card">
      <H1 className="auth-title">Iniciar sesión en "BiasDetect"</H1>
      <Small className="auth-sub">Inicie sesión para gestionar su cuenta.</Small>

      <form onSubmit={handleSubmit}>
        <div style={{ height: 10 }} />

        <InputGroup 
          label="Email" 
          placeholder="web@plumweb.ru" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <InputGroup 
          label="Contraseña" 
          placeholder="••••••••" 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && <div style={{ color: 'crimson', marginBottom: 8, fontWeight: 'bold' }}>{error}</div>}

        <Button className="button-clase" type="submit">Iniciar sesión</Button> 
      </form>
      
      <div className="separator">O</div>

      <div className="register-link-container">
        ¿No tiene una cuenta? <Link to="/register">Regístrese</Link>
      </div>
    </div>
  );
}