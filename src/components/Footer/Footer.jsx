import style from "./Footer.module.css";
import { SiFacebook, SiInstagram, SiWhatsapp   } from "react-icons/si";
function Footer() {
  return (
    <footer className={style.footer_main}>
      <section className={style.contact_info}>
        <div className={style.links}>
        <SiFacebook/>
        <SiInstagram/>
        <SiWhatsapp/>
        </div>
        <span>0810-444-0152</span>
        <span>contacto@supplyargentina.com</span>
        <span>© 2024. Supply Argenitina. All rights reserved.</span>
      </section>
      <section className={style.container_form}></section>
    </footer>
  );
}

export default Footer;
