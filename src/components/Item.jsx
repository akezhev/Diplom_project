<<<<<<< HEAD
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
=======
import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"./img/" + this.props.item.img}
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default Item;
>>>>>>> 36df7236b02d77c994298f3e3b1d645d2a87d2a3
