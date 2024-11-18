import style from "./Header.module.css"
import { VscStarFull } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";

function Header () {


    return (
        <div className={style.header}>
        <h2>
          Comprometidos con el servicio y la excelencia en productos
          industriales.
        </h2>
        <button className="primary_button">Chatea con nosotros</button>
        <span>o llamanos 810-444-0152</span>
        <div>
          <VscStarFull />
          <VscStarFull />
          <VscStarFull />
          <VscStarFull />
          <VscStarFull />
        </div>
        <span>Calidad | Servicio | Innovación | Satisfacción</span>
      </div>
    )
}

export default Header