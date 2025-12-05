import React from 'react';
import RegisterForm from '../organisms/RegisterForm';
import '../styles/LoginRegisterLayout.css';

export default function RegisterTemplate() {
  return (
    <div className="auth-layout">
      <div className="auth-white-side">
        <img src="bias.jpeg" alt="" />
      </div>

      <div className="auth-blue-side">
        <div className="auth-card">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}