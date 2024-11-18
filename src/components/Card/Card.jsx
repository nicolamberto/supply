import { SiTinyletter } from "react-icons/si";
import ProductBadge from "../ProductBadge/ProductBadge";
import style from "./Card.module.css";
import iconEcoFriend from "../../assets/isotipos/frend.png";
function Card({ name, image, description, technicalDetails }) {
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
  console.log(technicalDetails.ecofriendly);

  return (
    <div className={style.card_main}>
      <div className={style.container_image}>
        {/* <div className={style.container_isotipos_up}>
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
        </div> */}
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
        <button className={style.button}>Agregar al pedido</button>
      </div>
      {/* <div className={style.container_image}>
        <div className={style.container_isotipos_up}>
          <span>{name}</span>
          {technicalDetails.capacity && (
            <ProductBadge item={technicalDetails.capacity} />
          )}
        </div>
        <img src={image} alt="" />
        <div className={style.container_isotipos_down}>
          {technicalDetails.loadCapacity && (
            <ProductBadge item={technicalDetails.loadCapacity} />
          )}
          {technicalDetails.thermalSpectrum && (
            <ProductBadge item={technicalDetails.thermalSpectrum} />
          )}
        </div>
      </div>
      <div className={style.container_title}>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default Card;
