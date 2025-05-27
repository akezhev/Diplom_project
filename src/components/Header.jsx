<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/oi_cho.png";
import { FaShoppingCart, FaUser, FaTimes } from "react-icons/fa";
import Order from "./Order";
import ProfileSidebar from "./ProfileSidebar";

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const cartRef = useRef(null);
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  const totalItems = props.orders.reduce((sum, order) => sum + order.quantity, 0);

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

  const showOrders = () => {
    return (
      <div className="cart-popup">
        <div className="cart-popup-header">
          <h2>Корзина</h2>
          <button className="close-cart" onClick={() => setCartOpen(false)}>
            <FaTimes />
          </button>
        </div>
        {props.orders.length > 0 ? (
          <>
            <div className="orders">
              {props.orders.map(el => (
                <Order 
                  key={el.id} 
                  item={el} 
                  onDelete={props.onDelete}
                  onQuantityChange={props.onQuantityChange}
                />
              ))}
            </div>
            <div className="cart-summary">
              <p className="summa">Итого: {props.totalPrice.toLocaleString()}₽</p>
              <button className="checkout-button">Оформить заказ</button>
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

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
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
            <div className="cart-icon-container" onClick={handleCartClick}>
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
=======
import React, { useState } from "react";
import headerLogo from "../images/oi_cho.png";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h3>Товаров нет</h3>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div className="nav_box">
        <img src={headerLogo} className="logo" alt="logo" />
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
>>>>>>> 36df7236b02d77c994298f3e3b1d645d2a87d2a3
