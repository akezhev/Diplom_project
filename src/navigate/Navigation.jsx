import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';

export const Navigation = () => {
  return (
    <ul className="nav">
      <li><Link to="/" className="nav-link">Главная</Link></li>
      <li><Link to="/about" className="nav-link">Про нас</Link></li>
      <li><Link to="/contacts" className="nav-link">Контакты</Link></li>
      <li><Link to="/register" className="nav-link">Кабинет</Link></li>
    </ul>
  );
};
