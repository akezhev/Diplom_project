import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout({ orders, totalPrice, clearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    alert('Заказ успешно оформлен!');
    clearCart(); // Очищаем корзину
    navigate('/'); // Возвращаемся на главную
  };

  return (
    <div className="checkout-container">
      <h2>Оформление заказа</h2>
      <div className="checkout-content">
        <div className="order-summary">
          <h3>Ваш заказ</h3>
          {orders.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={`./img/${item.img}`} alt={item.title} />
              <div className="checkout-item-info">
                <h4>{item.title}</h4>
                <p>Количество: {item.quantity}</p>
                <p className="price">{(item.price * item.quantity).toLocaleString()}₽</p>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Итого: {totalPrice.toLocaleString()}₽</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Способ оплаты</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="card">Банковская карта</option>
              <option value="cash">Наличные при получении</option>
            </select>
          </div>

          <button type="submit" className="checkout-button">
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  );
} 