
import ProductBadge from "../ProductBadge/ProductBadge";
import style from "./Card.module.css";
import iconEcoFriend from "../../assets/isotipos/frend.png";

function Card({ name, image, description, technicalDetails, addToCart, id }) {

  return (
    <div className={style.card_main}>
      <span className={style.name_product}>{name}</span>
      <div className={style.container_image}>
        <img className={style.product_image} src={image} alt="producto" />
      </div>
      <div className={style.container_detail}>
        <div className={style.container_isotipos}>
          {technicalDetails.capacity && (
            <ProductBadge item={technicalDetails.capacity} />
          )}
          {technicalDetails.loadCapacity && (
            <ProductBadge item={technicalDetails.loadCapacity} />
          )}
          {technicalDetails.thermalSpectrum && (
            <ProductBadge item={technicalDetails.thermalSpectrum} />
          )}
          {technicalDetails.ecofriendly ? (
            <div className={style.container_eco}>
              <img src={iconEcoFriend} alt="ecofriendly" />
            </div>
          ) : null}
        </div>
        <div className={style.container_title}>
          <p>{description}</p>
          <button onClick={(e) => addToCart(id)} className={style.button}>
            Agregar al pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
