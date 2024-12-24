import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default Product;
