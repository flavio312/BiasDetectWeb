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
        <img src="public/bias.jpeg" alt="" />
      </div>
    </div>
  );
}
