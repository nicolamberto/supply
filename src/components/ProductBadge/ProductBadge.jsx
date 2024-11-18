import style from "./ProductBadge.module.css";
import isotipoKg from "../../assets/isotipos/kg.png";
import isotipoL from "../../assets/isotipos/L.png";
import isotipoTem from "../../assets/isotipos/tem.png";
import isotipoFrend from "../../assets/isotipos/frend.png";

function ProductBadge({ item }) {
  let icon = null;

  // Determinar el ícono basado en el valor de `item`
  switch (true) {
    case /kg/i.test(item): // Contiene "kg"
      icon = isotipoKg;
      break;
    case /L/i.test(item): // Contiene "L"
      icon = isotipoL;
      break;
    case /°/i.test(item): // Contiene "°"
      icon = isotipoTem;
      break;
    default:
      icon = null; // Si no coincide con nada
  }

  // Si no hay ícono, no mostramos nada
  if (!icon) return null;

  return (
    <div className={style.main}>
      <img src={icon} alt="isotipo" />
      <span>{item}</span>
    </div>
  );
}

export default ProductBadge;
