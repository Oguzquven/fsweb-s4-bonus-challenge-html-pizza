import React from "react";

function PizzaCard({ pizza }) {
  return (
    <div className="product-card">
      <img src={pizza.image} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <div className="card-stats">
        <span className="rating">{pizza.rating}</span>
        <span className="reviews">({pizza.reviews})</span>
        <span className="price">{pizza.price}₺</span>
      </div>
    </div>
  );
}

export default PizzaCard;
