import style from "./Contact.module.css";
import imageMap from "../../assets/imageMap/map.jpeg";
function Contact() {
  return (
    <section className={style.contact_main}>
      {/* Formulario */}
      <div className={style.container_form}>
        <div className={style.header}>
          <h3>Contáctenos</h3>
          <p>
            Estamos aquí para ayudarlo en sus necesidades industriales. Complete
            el formulario para ser asesorado por correo electrónico.
          </p>
        </div>
        <form
          className={style.contact_form}
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="message">
            Mensaje/Pedido*:
            <textarea
              id="message"
              name="message"
              placeholder="Escriba su mensaje aquí"
              required
              rows="4"
            ></textarea>
          </label>

          <label htmlFor="name">
            Nombre del contacto:
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingrese su nombre aquí"
            />
          </label>

          <label htmlFor="email">
            Correo electrónico*:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su correo aquí"
              required
            />
          </label>

          <label htmlFor="phone">
            Número de teléfono*:
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ingrese su número aquí"
              required
            />
          </label>

          <button type="submit">Enviar Mensaje/Pedido</button>
        </form>
        {/* <h3>Contáctenos</h3>
        <p>
          Estamos aquí para ayudarlo en sus necesidades industriales. Complete
          el formulario para ser asesorado por correo electrónico.
        </p>
   */}
      </div>

      {/* Mapa */}
      <div className={style.container_info}>
        <div className={style.direcctionSite}>
          <h3>Ubicación</h3>
          <p>
            Visítenos para conocer nuestros productos industriales de plástico.
            Estamos aquí para ayudarle en sus necesidades específicas.
          </p>
          <p>
            <strong>Dirección:</strong> Neuquén 4030, Villa Ballester, Provincia
            de Buenos Aires.
          </p>
          <p>
            <strong>Horario:</strong> Lunes a Viernes de 8:00 a 17:00 hs.
          </p>
        </div>

        <div className={style.map}>
          <img src={imageMap} alt="Mapa de la ubicación" />
        </div>
        {/* <h3>Ubicación</h3>
        <p>
          Visítenos para conocer nuestros productos industriales de plástico.
          Estamos aquí para ayudarle en sus necesidades específicas.
        </p>
        <p>
          <strong>Dirección:</strong> Neuquén 4030, Villa Ballester, Provincia
          de Buenos Aires.
        </p>
        <p>
          <strong>Horario:</strong> Lunes a Viernes de 8:00 a 17:00 hs.
        </p>
        <div className={style.map}>
          <img src={imageMap} alt="Mapa de la ubicación" />
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
