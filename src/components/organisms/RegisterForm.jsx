import React from 'react';
import { H1, Small } from '../atoms/Typography';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/LoginRegisterLayout.css';

export default function RegisterForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Completa todos los campos.');
      return;
    }
    // lógica de registro aquí
    console.log('register', { name, email, password });
    navigate('/login');
  }

  return (
    <form onSubmit={handleSubmit}>
      <H1>Crear cuenta</H1>
      <Small>Regístrate para empezar</Small>

      <div style={{ height: 10 }} />

      <InputGroup label="Nombre" placeholder="Tu nombre" value={name} onChange={e => setName(e.target.value)} />
      <InputGroup label="E-mail" placeholder="tu@correo.com" value={email} onChange={e => setEmail(e.target.value)} />
      <InputGroup label="Contraseña" placeholder="********" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      {error && <div style={{ color: 'crimson', marginBottom: 8 }}>{error}</div>}

      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <Button className="btn-primary" type="submit">Registrarse</Button>
        <Link to="/login" style={{ alignSelf: 'center', marginLeft: 'auto', color: 'var(--primary)', fontWeight: 600 }}>Iniciar sesión</Link>
      </div>
    </form>
  );
}
