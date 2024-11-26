import ProductBadge from "../ProductBadge/ProductBadge";
import style from "./Card.module.css";
import iconEcoFriend from "../../assets/isotipos/frend.png";
import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Carrousel from "../Carrousel/Carrousel";

function Card({ name, image, description, technicalDetails, addToCart, id }) {
  const [added, setAdded] = useState(false);

  const handleClick = (id) => {
    setAdded(true);
    addToCart(id);
  };

  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <span className={style.productName}>{name}</span>
      </div>

      <div className={style.imageContainer}>
        <Carrousel images={image} />
        {technicalDetails.ecofriendly && (
          <div className={style.ecoBadge}>
            <img src={iconEcoFriend} alt="Ecofriendly" />
          </div>
        )}
        {technicalDetails.colors && (
          <div className={style.colors}>
            {technicalDetails.colors.map((color, index) => (
              <div
                key={index}
                className={style.color_circle}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className={style.detailsContainer}>
        <div className={style.badgesContainer}>
          {technicalDetails.capacity && (
            <ProductBadge item={technicalDetails.capacity} />
          )}
          {technicalDetails.loadCapacity && (
            <ProductBadge item={technicalDetails.loadCapacity} />
          )}
          {technicalDetails.thermalSpectrum && (
            <ProductBadge item={technicalDetails.thermalSpectrum} />
          )}
        </div>
        <p className={style.description}>{description}</p>
        <button
          onClick={() => handleClick(id)}
          className={`${style.addButton} ${added ? style.added : ""}`}
        >
          {added ? "¡Agregado!" : "Agregar al pedido"}
        </button>
      </div>
    </div>
  );
}

export default Card;
