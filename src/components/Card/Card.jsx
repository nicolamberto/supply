import { SiTinyletter } from "react-icons/si";
import ProductBadge from "../ProductBadge/ProductBadge";
import style from "./Card.module.css";
import iconEcoFriend from "../../assets/isotipos/frend.png";
function Card({ name, image, description, technicalDetails, addToCart, id }) {
  //   {

  //     id: 1,
  //     category: "bateas-pallets-antiderrame",
  //     name: "B43 | 67X67X15CM",
  //     image: [imageProductBateaPallets1, imageProductBateaPallets2],
  //     description: "Batea de Contención para 1 Tambor, Alta Resistencia Térmica, Uso opcional con Hidrocarburos, Fácil Limpieza AntiAdherente a la Suciedad",
  //     technicalDetails: {
  //         thermalSpectrum: "-20° / +80°",
  //         loadCapacity: "250kg",
  //         capacity: "50L",
  //         material: null,
  //         colors: null,
  //         variants: null,
  //         ecofriendly: null

  //     }

  // }

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
      {/* <div className={style.container_image}>
        <div className={style.container_isotipos_up}>
          <span>{name}</span>
          {technicalDetails.capacity && (
            <ProductBadge item={technicalDetails.capacity} />
          )}
        </div>
        <img className={style.product_image} src={image} alt="producto" />
        <div className={style.container_isotipos_down}>
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
      </div>
      <div className={style.container_title}>
        <p>{description}</p>
        <button onClick={ (e)=> addToCart(id)} className={style.button}>Agregar al pedido</button>
      </div> */}
    </div>
  );
}

export default Card;
