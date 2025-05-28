import React, { useState, useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa';

export default function Item({ item, onShowItem, onAdd }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isAnimating) {
      setIsAnimating(true);
      onAdd(item);
      
      // Увеличиваем время анимации до 800мс для соответствия CSS анимации
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }
  };

  // Предотвращаем повторные клики во время анимации
  useEffect(() => {
    if (isAnimating) {
      const button = document.querySelector('.add-to-cart');
      if (button) {
        button.style.pointerEvents = 'none';
      }
    } else {
      const button = document.querySelector('.add-to-cart');
      if (button) {
        button.style.pointerEvents = 'auto';
      }
    }
  }, [isAnimating]);

  return (
    <div className="item">
      <div className="item-image-container">
        <img
          src={`./img/${item.img}`}
          onClick={() => onShowItem(item)}
          alt={item.title}
        />
      </div>
      <div className="item-info">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <div className="item-footer">
          <b>{Number(item.price).toLocaleString()}₽</b>
          <div
            className={`add-to-cart ${isAnimating ? 'animate' : ''}`}
            onClick={handleAddToCart}
          >
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
