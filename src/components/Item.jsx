import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

export default function Item({ item, onShowItem, onAdd }) {
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Предотвращаем всплытие события
    onAdd(item);
  };

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
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
