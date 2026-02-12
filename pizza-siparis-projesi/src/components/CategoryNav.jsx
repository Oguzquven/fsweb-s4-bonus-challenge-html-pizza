import React from "react";

function CategoryNav({ categories }) {
  return (
    <nav className="category-nav">
      {categories.map((cat) => (
        <div key={cat.id} className={`nav-item ${cat.active ? "active" : ""}`}>
          <img src={cat.icon} alt={cat.name} />
          <span>{cat.name}</span>
        </div>
      ))}
    </nav>
  );
}

export default CategoryNav;
