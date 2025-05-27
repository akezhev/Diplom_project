<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Item
            onShowItem={this.props.onShowItem}
            key={el.id}
            item={el}
            onAdd={this.props.onAdd}
          />
        ))}
      </main>
    );
  }
}

export default Items;
>>>>>>> 36df7236b02d77c994298f3e3b1d645d2a87d2a3
