import React, { useState } from "react";
import styles from "./Formulario.module.css";
import emailjs from "@emailjs/browser";

const Formulario = ({ productos, deleteCart }) => {
  const formattedProducts = productos
    .map(
      (producto) =>
        `// ${producto.nombre} - Cantidad:  ${producto.cantidad}  //`
    )
    .join(", ");
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  console.log(formulario);
  console.log(formattedProducts);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e, method) => {
    e.preventDefault();

    // Obtenemos los datos del formulario (puedes ajustar esto a tu estructura)
    const templateParams = {
      nombre: formulario.nombre,
      email: formulario.email,
      telefono: formulario.telefono,
      mensaje: formulario.mensaje,
      products: formattedProducts,
    };

    switch (method) {
      case "email":
        // Lógica para enviar el correo
        emailjs
          .send(
            "service_q2iv4sb", // Reemplaza con tu Service ID
            "template_707yzk7", // Reemplaza con tu Template ID
            templateParams,
            "wuk7TXQLWBRooSaS-" // Reemplaza con tu Public Key
          )
          .then(
            (response) => {
              console.log(
                "Correo enviado con éxito:",
                response.status,
                response.text
              );
              alert("Mensaje enviado correctamente por Email");
            },
            (error) => {
              console.error("Error al enviar el correo:", error);
              alert("Hubo un problema al enviar el mensaje por Email");
            }
          );
        break;

      case "whatsapp":
        let numeroWhatsapp = "2612159554";
        const mensajeWhatsApp = `Hola, soy ${formulario.nombre}. Estoy interesado en los productos: ${formattedProducts}. Puedes contactarme al correo ${formulario.email} o al teléfono ${formulario.telefono}.`;
        const urlWhatsApp = `https://wa.me/+549${numeroWhatsapp}?text=${encodeURIComponent(
          mensajeWhatsApp
        )}`;
        window.open(urlWhatsApp, "_blank");
        break;

      default:
        alert("Método no reconocido");
    }
    deleteCart();
    setFormulario({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <h2>Formulario de Contacto</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={formulario.nombre}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu email"
        value={formulario.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Tu teléfono"
        value={formulario.telefono}
        onChange={handleInputChange}
      />
      <textarea
        name="mensaje"
        placeholder="Escribe tu mensaje"
        value={formulario.mensaje}
        onChange={handleInputChange}
        required
      />
      <button type="submit" onClick={(e) => handleSubmit(e, "email")}>
        Enviar por Email
      </button>
      <button type="submit" onClick={(e) => handleSubmit(e, "whatsapp")}>
        Enviar por WhatsApp
      </button>
    </form>
  );
};

export default Formulario;
