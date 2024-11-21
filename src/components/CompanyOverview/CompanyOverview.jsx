import { BiFontSize } from "react-icons/bi";
import style from "./CompanyOverview.module.css";
import CountUp from "react-countup";
import imageMarca1 from "../../assets/marcas/1.png";
import imageMarca2 from "../../assets/marcas/2.png";
import imageMarca3 from "../../assets/marcas/3.png";
import imageMarca4 from "../../assets/marcas/4.png";
import imageMarca5 from "../../assets/marcas/5.png";
import imageMarca6 from "../../assets/marcas/6.png";
import imageMarca7 from "../../assets/marcas/7.png";
import imageMarca8 from "../../assets/marcas/8.png";
import imageMarca9 from "../../assets/marcas/9.png";
import imageMarca10 from "../../assets/marcas/10.png";
import imageMarca11 from "../../assets/marcas/11.png";

function CompanyOverview() {
  let logosMarcas = [
    imageMarca1,
    imageMarca2,
    imageMarca3,
    imageMarca4,
    imageMarca5,
    imageMarca6,
    imageMarca7,
    imageMarca8,
    imageMarca9,
    imageMarca10,
    imageMarca11,
  ];

  return (
    <section className={style.companyOverview_main}>
      <div className={style.container_up}>
        <div className={style.container_description}>
          <h2 className={style.title}>Compromiso y calidad</h2>
          <p>
            En Supply Argentina, nos dedicamos a la fabricación y
            comercialización de recipientes plásticos industriales, ofreciendo
            soluciones adaptadas a las necesidades de nuestros clientes con un
            servicio excepcional.
          </p>
        </div>
        <div className={style.container_count}>
          <div className={style.count}>
            1500
            <span>Clientes satisfechos</span>
          </div>
          <div className={style.count}>
            10
            <span>Años en el mercado</span>
          </div>
        </div>
      </div>
      <div className={style.container_marcas}>
        <div className={style.marquee}>
          {logosMarcas.map((item, index) => (
            <img key={index} src={item} alt={`Logo ${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
