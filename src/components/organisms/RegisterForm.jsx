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

export default function RegisterForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('El correo electrónico no es válido.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      const response = await fetch('https://microservices-gamma.vercel.app/auth/register', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || result.error || 'Error desconocido.');
        return;
      }

      navigate('/');

    } catch (err) {
      console.error(err);
      setError('No se pudo conectar con el servidor.');
    }
  }

  return (
    <div className="login-card">
      <H1 className="auth-title">Crear cuenta en "BiasDetect"</H1>
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

        {error && (
          <div style={{
            backgroundColor: '#ffe6e6',
            border: '1px solid #ff4d4d',
            color: '#d10000',
            padding: '8px',
            borderRadius: '6px',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            {error}
          </div>
        )}

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
