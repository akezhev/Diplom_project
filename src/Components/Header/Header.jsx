import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <h3 className="span loader">
          <span>О</span>
          <span>й</span>
          <span>-</span>
          <span>Ч</span>
          <span>о</span>
          <span>&nbsp;</span>
          <span>з</span>
          <span>а</span>
          <span>&nbsp;</span>
          <span>б</span>
          <span>р</span>
          <span>е</span>
          <span>н</span>
          <span>д</span>
          <span>!</span>
          <span>!</span>
          <span>!</span>
        </h3>

        <ul className="item">
          <li>Каталог</li>
          <li>Акции</li>
          <li>О нас</li>
          <li>Корзина</li>
          <img
            className="icon_cart"
            src="public/images/icon_cart.png"
            alt="icon"
          />
        </ul>
      </nav>
    </header>
  );
}
