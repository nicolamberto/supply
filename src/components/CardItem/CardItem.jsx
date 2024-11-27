import React from "react";
import style from "./CardItem.module.css";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

function CardItem({ image, name, handleQuantityChange, id, removeProductById }) {
  return (
    <section className={style.product}>
      <img src={image} alt="" />
      <span>{name}</span>
      <div className={style.container_input}>
        <span>Cantidad</span>
        <QuantitySelector id={id} handleQuantityChange={handleQuantityChange} />
      </div>
      <button onClick={() => removeProductById(id)} className={style.button}>
        X
      </button>
    </section>
  );
}

export default CardItem;
