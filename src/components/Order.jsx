import React from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

export default function Order({ item, onDelete, onQuantityChange }) {
  return (
    <div className="order-item">
      <div className="order-image">
        <img src={"./img/" + item.img} alt={item.title} />
      </div>
      <div className="order-info">
        <h3>{item.title}</h3>
        <div className="order-controls">
          <div className="quantity-controls">
            <button 
              onClick={() => onQuantityChange(item.id, -1)}
              disabled={item.quantity <= 1}
            >
              <FaMinus />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => onQuantityChange(item.id, 1)}>
              <FaPlus />
            </button>
          </div>
          <p className="price">{(item.price * item.quantity).toLocaleString()}₽</p>
        </div>
      </div>
      <button 
        className="delete-button"
        onClick={() => onDelete(item.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}
