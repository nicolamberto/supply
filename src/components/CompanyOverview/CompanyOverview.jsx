import { BiFontSize } from "react-icons/bi";
import style from "./CompanyOverview.module.css";
import CountUp from "react-countup";
function CompanyOverview() {
  return (
    <section className={style.companyOverview_main}>
      <div className={style.container_description}>
        <h2>Compromiso y calidad</h2>
        <p>
          En Supply Argentina, nos dedicamos a la fabricación y comercialización
          de recipientes plásticos industriales, ofreciendo soluciones adaptadas
          a las necesidades de nuestros clientes con un servicio excepcional.
        </p>
      </div>
      <div className={style.container_count}>
        <div className={style.count}>
          <CountUp start={0} end={1500} duration={6} />

          <span>Clientes satisfechos</span>
        </div>
        <div className={style.count}>
          <div>
            <CountUp start={0} end={10} duration={8} />
          </div>

          <span>Años en el mercado</span>
        </div>
      </div>
      <button className={`${style.button_contact} primary_button`}>
        Contacto
      </button>
    </section>
  );
}

export default CompanyOverview;
