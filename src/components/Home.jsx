import React from 'react';
import Categories from './Categories';
import Items from './Items';

export default function Home({ items, showFullItem, fullItem, chooseCategory, onShowItem, onAdd }) {
  return (
    <div className="wrapper">
      <Categories chooseCategory={chooseCategory} />
      <Items
        items={items}
        onShowItem={onShowItem}
        onAdd={onAdd}
      />

      {showFullItem && (
        <div className="full-item" onClick={() => onShowItem(fullItem)}>
          <div onClick={e => e.stopPropagation()}>
            <div className="full-item-content">
              <img src={"./img/" + fullItem.img} alt={fullItem.title} />
              <div className="item-info">
                <h2>{fullItem.title}</h2>
                <p>{fullItem.desc}</p>
                <div className="item-footer">
                  <b>{Number(fullItem.price).toLocaleString()}₽</b>
                  <div 
                    className="add-to-cart"
                    onClick={() => {
                      onAdd(fullItem);
                      onShowItem(fullItem);
                    }}
                  >
                    <button>В корзину</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 