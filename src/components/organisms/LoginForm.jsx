import React from 'react';
import { H1, Small } from '../atoms/Typography';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginRegisterLayout.css';

// Función de utilidad para validar el formato del correo electrónico
// Debe contener un @ y terminar con un punto seguido de 2 o más caracteres (dominio)
const validateEmail = (email) => {
  // Expresión regular para un formato de correo simple
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email);
};

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    // --- 1. Validar campos vacíos ---
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // --- 2. Validar formato del correo electrónico ---
    if (!validateEmail(email)) {
      setError('El correo electrónico debe ser válido (ej: usuario@dominio.com).');
      return;
    }

    // --- 3. Validar longitud mínima de la contraseña ---
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Si todas las validaciones pasan
    console.log('Iniciando sesión con:', { email, password });
    // Aquí iría tu lógica de autenticación real (ej. llamada a una API)
    navigate('/home');
  }

  return (
    <div className="login-card">
      <H1 className="auth-title">Iniciar sesión en "name"</H1>
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