import React, { useState, useRef } from 'react';
import { FaUser, FaUpload, FaSignOutAlt, FaShoppingBag, FaTruck, FaCog, FaTimes } from 'react-icons/fa';

export default function ProfileSidebar({ isOpen, onClose }) {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : null;
  });
  const [activeTab, setActiveTab] = useState('profile');
  const [avatar, setAvatar] = useState(userData?.avatar || null);
  const fileInputRef = useRef(null);

  /**
   * Обработчик клика по аватару
   * Открывает диалог выбора файла
   */
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  /**
   * Обработчик изменения файла аватара
   * @param {Event} event - Событие изменения файла
   */
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        // Сохраняем аватар в localStorage
        const updatedUserData = { ...userData, avatar: reader.result };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        setUserData(updatedUserData);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!userData) {
    return null;
  }

  return (
    <div className={`profile-sidebar-overlay ${isOpen ? 'active' : ''}`}>
      <div className="profile-sidebar">
        <button className="close-sidebar" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="profile-header">
          <div className="avatar-container" onClick={handleAvatarClick}>
            {avatar ? (
              <img src={avatar} alt="Profile" className="avatar" />
            ) : (
              <div className="avatar-placeholder">
                <FaUser />
              </div>
            )}
            <div className="avatar-overlay">
              <FaUpload />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
          <div className="user-info">
            <h3>{userData.username}</h3>
            <p>{userData.email}</p>
          </div>
        </div>

        <nav className="profile-nav">
          <button
            className={activeTab === 'profile' ? 'active' : ''}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Профиль
          </button>
          <button
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            <FaShoppingBag /> Мои заказы
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
        </nav>

        <div className="profile-content">
          {activeTab === 'profile' && (
            <div className="profile-info">
              <h4>Личная информация</h4>
              <div className="info-item">
                <label>Телефон:</label>
                <p>{userData.phone || 'Не указан'}</p>
              </div>
              <div className="info-item">
                <label>Адрес доставки:</label>
                <p>{userData.address || 'Не указан'}</p>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="orders-list">
              <h4>История заказов</h4>
              <p>У вас пока нет заказов</p>
            </div>
          )}

          {activeTab === 'delivery' && (
            <div className="delivery-info">
              <h4>Адреса доставки</h4>
              <p>Добавьте адрес доставки</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <h4>Настройки профиля</h4>
              <div className="settings-options">
                <button className="setting-btn">Изменить пароль</button>
                <button className="setting-btn">Уведомления</button>
                <button className="setting-btn">Приватность</button>
              </div>
            </div>
          )}
        </div>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem('userData');
            window.location.reload();
          }}
        >
          <FaSignOutAlt /> Выйти
        </button>
      </div>
    </div>
  );
} 