import React, { useState } from "react";

function Item({ name, category }) {
  //  use of useState
  const [inCart, setInCart] = useState(false);
  
  //set className and button text based on inCart state
  const cartClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!inCart)}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
