<<<<<<< HEAD
import React from "react";

export default function Categories({ chooseCategory }) {
  const categories = [
    {
      key: "all",
      name: "Все"
    },
    {
      key: "white",
      name: "Белые"
    },
    {
      key: "black",
      name: "Черные"
    }
  ];

  return (
    <div className="categories">
      {categories.map(category => (
        <div 
          key={category.key}
          onClick={() => chooseCategory(category.key)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}
=======
import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "white",
          name: "Белые",
        },
        {
          key: "black",
          name: "Черные",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
>>>>>>> 36df7236b02d77c994298f3e3b1d645d2a87d2a3
