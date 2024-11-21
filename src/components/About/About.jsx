import style from "./About.module.css";

function About() {
  return (
    <section className={style.about_main}>
      <div className={style.content}>
        <h2 className={style.title}>Compromiso y Calidad</h2>
        <p className={style.text}>
          Supply Argentina es una empresa dedicada a la fabricación y
          comercialización de recipientes plásticos industriales tales como:
          contenedores de residuos con ruedas, estaciones ambientales, campanas
          viales, cajones, pallets plásticos y todo tipo de envases aptos para
          cada necesidad, como el tratamiento de residuos, elaboración,
          transporte y organización de sus productos y materias primas. En
          Supply Argentina nos esforzamos por brindar un excelente servicio de
          preventa, ayudando a nuestros clientes a encontrar los mejores
          productos en vista de sus necesidades específicas.
        </p>
        <div className={style.container_numbers}></div>
      </div>
    </section>
  );
}

export default About;
