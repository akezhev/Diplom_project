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
