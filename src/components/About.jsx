import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>О нас</h1>
        <p>Мы - магазин стильной одежды Ой-чО, предлагающий уникальные дизайнерские решения.</p>
        <p>Наша миссия - создавать качественную одежду, которая подчеркнет вашу индивидуальность.</p>
        <div className="about-features">
          <div className="feature">
            <h3>Качество</h3>
            <p>Используем только лучшие материалы</p>
          </div>
          <div className="feature">
            <h3>Стиль</h3>
            <p>Следим за последними трендами</p>
          </div>
          <div className="feature">
            <h3>Цена</h3>
            <p>Предлагаем доступные цены</p>
          </div>
        </div>
      </div>
    </div>
  );
} 