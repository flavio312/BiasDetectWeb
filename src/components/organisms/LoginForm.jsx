import React from 'react';
import { H1, Small } from '../atoms/Typography';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginRegisterLayout.css';

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    console.log('login', { email, password });
    navigate('/');
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

        {error && <div style={{ color: 'crimson', marginBottom: 8 }}>{error}</div>}

        <Button className="button-clase" type="submit">Iniciar sesión</Button> 
      </form>
      
      <div className="separator">O</div>

      <div className="register-link-container">
        ¿No tiene una cuenta? <Link to="/register">Regístrese</Link>
      </div>
    </div>
  );
}