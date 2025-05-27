<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/">Про нас</Link>
      <Link to="/">Контакты</Link>
      <Link to="/">Личный кабинет</Link>
    </nav>
>>>>>>> 36df7236b02d77c994298f3e3b1d645d2a87d2a3
  );
};
