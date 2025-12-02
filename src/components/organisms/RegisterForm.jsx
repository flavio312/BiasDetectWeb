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

export default function RegisterForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    // --- 1. Validar campos vacíos (incluyendo Nombre) ---
    if (!name || !email || !password) {
      setError('Por favor, completa todos los campos (Nombre, Email y Contraseña).');
      return;
    }

    // --- 2. Validar formato del correo electrónico (@ y .dominio) ---
    if (!validateEmail(email)) {
      setError('El correo electrónico debe ser válido (ej: usuario@dominio.com).');
      return;
    }

    // --- 3. Validar longitud mínima de la contraseña (mínimo 6 caracteres) ---
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Si todas las validaciones pasan
    console.log('register', { name, email, password });
    // Aquí iría tu lógica de registro real (ej. llamada a una API)
    navigate('/');
  }

  return (
    <div className="login-card"> 
      <H1 className="auth-title">Crear cuenta en "name"</H1>
      <Small className="auth-sub">Regístrate para gestionar tu cuenta.</Small>

      <form onSubmit={handleSubmit}>
        <div style={{ height: 10 }} />

        <InputGroup 
          label="Nombre" 
          placeholder="Tu nombre" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        <InputGroup 
          label="Email" 
          placeholder="tu@correo.com" 
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

        <Button className="button-clase" type="submit" style={{ marginTop: '20px' }}>
          Registrarse
        </Button> 
      </form>
    
      <div className="separator">O</div>
      <div className="register-link-container">
        ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
      </div>

    </div>
  );
}