import React from 'react';

export default function Contacts() {
  return (
    <div className="contacts-container">
      <div className="contacts-content">
        <h1>Контакты</h1>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Адрес</h3>
            <p>ул. Примерная, 123</p>
            <p>Город Примерск</p>
          </div>
          <div className="contact-item">
            <h3>Телефон</h3>
            <p>+7 (999) 123-45-67</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@oi-cho.ru</p>
          </div>
          <div className="contact-item">
            <h3>Режим работы</h3>
            <p>Пн-Пт: 10:00 - 20:00</p>
            <p>Сб-Вс: 11:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
} 