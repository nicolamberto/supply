import style from "./Footer.module.css";
import { SiGooglemaps } from "react-icons/si";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";

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
        <span>ventas@supplyargentina.com.ar</span>
        <span>© 2024. Supply Argentina. All rights reserved.</span>
      </section>
      <section className={style.container_form}>
        <span>
          <strong>Dirección</strong>
        </span>

        <p>
          {" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={
              "https://www.google.com/maps/place/Neuqu%C3%A9n+4030,+B1653+Villa+Ballester,+Provincia+de+Buenos+Aires,+Argentina/@-34.558382,-58.566868,13z/data=!4m6!3m5!1s0x95bcb9f0621e479d:0xaf9571b43b080a7a!8m2!3d-34.5583817!4d-58.5668682!16s%2Fg%2F11h8ch4czt?hl=es-ES&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
            }
            style={{ color: "white", textDecoration: "none" }}
          >
            <SiGooglemaps style={{ fontSize: "1.2rem" }} />
          </Link>{" "}
          Neuquén 4030, Villa Ballester, Provincia de Buenos Aires.
        </p>
        <span>
          <strong>Horario</strong>
        </span>
        <p>Lunes a Viernes de 8:00 a 17:00 hs</p>
      </section>
    </footer>
  );
}

export default Footer;
