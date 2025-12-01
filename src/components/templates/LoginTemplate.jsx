import React from 'react';
import LoginForm from '../organisms/LoginForm';
import '../styles/LoginRegisterLayout.css';

export default function LoginTemplate() {
  return (
    <div className="auth-layout">
      <div className="auth-blue-side">
        <div className="auth-card">
          <LoginForm />
        </div>
      </div>

      <div className="auth-white-side">
        {/* Espacio para tu imagen (opción D: vacío para que subas la tuya) */}
      </div>
    </div>
  );
}
