import React from "react";
import Item from "./Item";

export default function Items({ items, onShowItem, onAdd }) {
  return (
    <main>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onShowItem={onShowItem}
          onAdd={onAdd}
        />
      ))}
    </main>
  );
}
