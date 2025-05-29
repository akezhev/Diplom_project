import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { FaUser, FaShoppingBag, FaTruck, FaCog, FaSignOutAlt, FaHeart } from 'react-icons/fa';

export default function Profile({ userData, orders, favorites, toggleFavorite, updateUserData }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    phone: '',
    deliveryType: 'courier',
    comment: ''
  });

  useEffect(() => {
    if (!userData) {
      navigate('/register');
    }
  }, [navigate, userData]);

  /**
   * Обработчик отправки формы доставки
   * @param {Event} e - Событие отправки формы
   */
  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    console.log('Оформление заказа:', deliveryInfo);
  };

  /**
   * Обработчик выхода из системы
   * Очищает данные пользователя
   */
  const handleLogout = () => {
    updateUserData(null);
  };

  /**
   * Отображает список заказов пользователя
   * @returns {JSX.Element} Компонент со списком заказов
   */
  const renderOrders = () => {
    if (orders.length === 0) {
      return (
        <div className="empty-orders">
          <h3>У вас пока нет заказов</h3>
          <p>Перейдите в каталог, чтобы сделать первый заказ</p>
        </div>
      );
    }

    return (
      <div className="profile-orders">
        {orders.map(order => (
          <div key={order.id} className="profile-order-item">
            <div className="order-image">
              <img src={`./img/${order.img}`} alt={order.title} />
            </div>
            <div className="order-details">
              <h3>{order.title}</h3>
              <p>{order.desc}</p>
              <div className="order-info">
                <span className="quantity">Количество: {order.quantity}</span>
                <span className="price">{(order.price * order.quantity).toLocaleString()}₽</span>
              </div>
            </div>
          </div>
        ))}
        <div className="orders-summary">
          <h3>Общая сумма заказов: {orders.reduce((sum, order) => sum + order.price * order.quantity, 0).toLocaleString()}₽</h3>
        </div>
      </div>
    );
  };

  const renderFavorites = () => {
    if (favorites.length === 0) {
      return (
        <div className="empty-favorites">
          <h3>У вас пока нет избранных товаров</h3>
          <p>Добавляйте товары в корзину, и они автоматически появятся здесь</p>
        </div>
      );
    }

    return (
      <div className="profile-favorites">
        {favorites.map(item => (
          <div key={item.id} className="profile-favorite-item">
            <div className="favorite-image">
              <img src={`./img/${item.img}`} alt={item.title} />
            </div>
            <div className="favorite-details">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="favorite-info">
                <span className="price">{Number(item.price).toLocaleString()}₽</span>
                <button 
                  className="remove-favorite"
                  onClick={() => toggleFavorite(item)}
                >
                  <FaHeart className="active" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (!userData) {
    return <Navigate to="/register" />;
  }

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="avatar-container">
            {userData.avatar ? (
              <img src={userData.avatar} alt="Profile" className="avatar" />
            ) : (
              <div className="avatar-placeholder">
                <FaUser />
              </div>
            )}
          </div>
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
        </div>
        <div className="profile-nav">
          <button 
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            <FaShoppingBag /> Мои заказы
          </button>
          <button 
            className={activeTab === 'favorites' ? 'active' : ''}
            onClick={() => setActiveTab('favorites')}
          >
            <FaHeart /> Избранное
          </button>
          <button 
            className={activeTab === 'delivery' ? 'active' : ''}
            onClick={() => setActiveTab('delivery')}
          >
            <FaTruck /> Доставка
          </button>
          <button 
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            <FaCog /> Настройки
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Выйти
          </button>
        </div>
      </div>
      <div className="profile-content">
        {activeTab === 'orders' && renderOrders()}
        {activeTab === 'favorites' && renderFavorites()}
        {activeTab === 'delivery' && (
          <div className="delivery-section">
            <h2>Информация о доставке</h2>
            <form onSubmit={handleDeliverySubmit} className="delivery-form">
              <div className="form-group">
                <label>Способ доставки:</label>
                <select 
                  value={deliveryInfo.deliveryType}
                  onChange={(e) => setDeliveryInfo({
                    ...deliveryInfo,
                    deliveryType: e.target.value
                  })}
                >
                  <option value="courier">Курьером</option>
                  <option value="pickup">Самовывоз</option>
                </select>
              </div>

              <div className="form-group">
                <label>Адрес доставки:</label>
                <input
                  type="text"
                  value={deliveryInfo.address}
                  onChange={(e) => setDeliveryInfo({
                    ...deliveryInfo,
                    address: e.target.value
                  })}
                  placeholder="Введите адрес доставки"
                  required={deliveryInfo.deliveryType === 'courier'}
                />
              </div>

              <div className="form-group">
                <label>Телефон:</label>
                <input
                  type="tel"
                  value={deliveryInfo.phone}
                  onChange={(e) => setDeliveryInfo({
                    ...deliveryInfo,
                    phone: e.target.value
                  })}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              <div className="form-group">
                <label>Комментарий к заказу:</label>
                <textarea
                  value={deliveryInfo.comment}
                  onChange={(e) => setDeliveryInfo({
                    ...deliveryInfo,
                    comment: e.target.value
                  })}
                  placeholder="Дополнительная информация для курьера"
                />
              </div>

              <button type="submit" className="submit-btn">
                Оформить заказ
              </button>
            </form>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="settings-section">
            <h2>Настройки профиля</h2>
            {/* Добавьте настройки профиля здесь */}
          </div>
        )}
      </div>
    </div>
  );
} 