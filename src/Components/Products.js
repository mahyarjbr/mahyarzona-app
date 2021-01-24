import React from "react";
import Rating from "./Rating";

const Products = ({ product }) => {
  return (
    <div key={product._id} class="card">
      <a href={`/product/${product._id}`}>
        <img class="medium" src={product.image} alt={product.name} />
      </a>
      <div class="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numRevies={product.numRevies} />
        <div class="price">{product.price}T</div>
      </div>
    </div>
  );
};

export default Products;
