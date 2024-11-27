import React, { useState } from "react";
import style from "./QuantitySelector.module.css"

const QuantitySelector = ({ id, handleQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 100) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      handleQuantityChange(id, newQuantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleQuantityChange(id, newQuantity);
    }
  };

  return (
    <div className={style.quantity_selector}>
      <button onClick={decreaseQuantity} className={style.quantity_btn}>-</button>
      <span className={style.quantity_display}>{quantity}</span>
      <button onClick={increaseQuantity} className={style.quantity_btn}>+</button>
    </div>
  );
};

export default QuantitySelector;
