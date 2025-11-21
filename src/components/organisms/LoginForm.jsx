import React from 'react';
import { H1, Small } from '../atoms/Typography';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/LoginRegisterLayout.css';

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    // ejemplo simple: validar
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    // Aquí pondrías tu lógica de autenticación
    console.log('login', { email, password });
    // redirigir demo
    navigate('/'); // cambiar según tu routing
  }

  return (
    <form onSubmit={handleSubmit}>
      <H1>Bienvenido</H1>
      <Small>Inicia sesión en tu cuenta</Small>

      <div style={{ height: 10 }} />

      <InputGroup label="E-mail" placeholder="tu@correo.com" value={email} onChange={e => setEmail(e.target.value)} />
      <InputGroup label="Contraseña" placeholder="********" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      {error && <div style={{ color: 'crimson', marginBottom: 8 }}>{error}</div>}

      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <Button className="btn-primary" type="submit">Entrar</Button>
        <Link to="/register" style={{ alignSelf: 'center', marginLeft: 'auto', color: 'var(--primary)', fontWeight: 600 }}>Crear cuenta</Link>
      </div>

      <div style={{ height: 10 }} />
      <div className="small" style={{ marginTop: 8 }}>
        ¿Olvidaste tu contraseña? <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Recuperar</a>
      </div>
    </form>
  );
}
