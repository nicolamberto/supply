import style from "./Footer.module.css";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <footer className={style.footer_main}>
      <section className={style.contact_info}>
        <div className={style.links}>
          <SiFacebook />
          <SiInstagram />
          <SiWhatsapp />
        </div>
        <span>0810-444-0152</span>
        <span>ventas@supply.com.ar</span>
        <span>© 2024. Supply Argenitina. All rights reserved.</span>
      </section>
      <section className={style.container_form}>
        <span>
          <strong>Dirección</strong>
        </span>
        <p>Neuquén 4030, Villa Ballester, Provincia de Buenos Aires.</p>
        <span>
          <strong>Horario</strong>
        </span>
        <p>Lunes a Viernes de 8:00 a 17:00 hs</p>
      </section>
    </footer>
  );
}

export default Footer;
