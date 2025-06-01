import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import headerLogo from "../images/oi_cho.png";
import { FaShoppingCart, FaUser, FaTimes } from "react-icons/fa";
import Order from "./Order";
import ProfileSidebar from "./ProfileSidebar";

export default function Header({ orders, onDelete, onQuantityChange, totalPrice }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const cartRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartOpen && cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartOpen]);

  useEffect(() => {
    const saved = localStorage.getItem('userData');
    if (saved) {
      setUserData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setIsCartAnimating(true);
      setTimeout(() => {
        setIsCartAnimating(false);
      }, 500);
    }
  }, [totalItems]);

  /**
   * Обработчик клика по кнопке оформления заказа
   * Закрывает корзину и перенаправляет на страницу оформления
   */
  const handleCheckout = () => {
    setCartOpen(false);
    navigate('/checkout');
  };

  /**
   * Отображает содержимое корзины
   * @returns {JSX.Element} Компонент с содержимым корзины
   */
  const showOrders = () => {
    return (
      <div className="cart-popup">
        <div className="cart-popup-header">
          <h2>Корзина</h2>
          <button className="close-cart" onClick={() => setCartOpen(false)}>
            <FaTimes />
          </button>
        </div>
        {orders.length > 0 ? (
          <>
            <div className="orders">
              {orders.map(el => (
                <Order 
                  key={el.id} 
                  item={el} 
                  onDelete={onDelete}
                  onQuantityChange={onQuantityChange}
                />
              ))}
            </div>
            <div className="cart-summary">
              <p className="summa">Итого: {totalPrice.toLocaleString()}₽</p>
              <button className="checkout-button" onClick={handleCheckout}>
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <div className="empty">
            <h3>Корзина пуста</h3>
          </div>
        )}
      </div>
    );
  };

  return (
    <header>
      <div className="nav_box">
        <Link to="/">
          <img src={headerLogo} className="logo" alt="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">О нас</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
          <div className="nav-icons">
            {userData ? (
              <button 
                className="profile-button"
                onClick={() => setProfileOpen(true)}
              >
                {userData.avatar ? (
                  <img src={userData.avatar} alt="Profile" className="profile-mini-avatar" />
                ) : (
                  <FaUser />
                )}
              </button>
            ) : (
              <Link to="/register" className="nav-link">Регистрация</Link>
            )}
            <div 
              className={`cart-icon-container ${isCartAnimating ? 'animate' : ''}`} 
              onClick={() => setCartOpen(!cartOpen)}
            >
              <FaShoppingCart className={`shop-cart-button ${cartOpen ? "active" : ""}`} />
              {totalItems > 0 && (
                <span className="cart-counter">{totalItems}</span>
              )}
            </div>
          </div>
        </nav>
      </div>
      {cartOpen && (
        <div className="cart-overlay">
          <div ref={cartRef} className="cart-popup-container">
            {showOrders()}
          </div>
        </div>
      )}
      {location.pathname === '/' && <div className="presentation"></div>}
      <ProfileSidebar isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </header>
  );
}
