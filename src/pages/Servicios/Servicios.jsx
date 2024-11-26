import React from "react";
import style from "./Servicios.module.css";
import { openWhatsAppChat } from "../../hooks/openWhatsAppChat";
import Footer from "../../components/Footer/Footer";
function Servicios() {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h2 className={style.title}>Compromiso y Calidad</h2>
        <span className={style.text}>
          Supply Argentina es una empresa dedicada a la fabricación y
          comercialización de recipientes plásticos industriales tales como:
          contenedores de residuos con ruedas, estaciones ambientales, campanas
          viales, cajones, pallets plásticos y todo tipo de envases aptos para
          cada necesidad, como el tratamiento de residuos, elaboración,
          transporte y organización de sus productos y materias primas. En
          Supply Argentina nos esforzamos por brindar un excelente servicio de
          preventa, ayudando a nuestros clientes a encontrar los mejores
          productos en vista de sus necesidades específicas.
        </span>
        <button
          onClick={() =>
            openWhatsAppChat(
              "5491166823300",
              "Hola, estoy interesado en tus productos. ¿Podrías brindarme más información?"
            )
          }
          className={style.button}
        >
          Contactenos
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Servicios;
