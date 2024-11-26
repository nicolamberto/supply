import React, { useState } from "react";
import styles from "./Formulario.module.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


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

  const [error, setError] = useState(""); // Para mostrar mensajes de error
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e, method) => {
    // e.preventDefault();
    setError(""); // Reinicia el mensaje de error

    // Validaciones
    if (productos.length === 0) {
      setError("No tienes productos en el pedido.");
      return;
    }

    if (!formulario.nombre || !formulario.email || !formulario.mensaje) {
      setError("Completa los campos obligatorios.");
      return;
    }

    const templateParams = {
      nombre: formulario.nombre,
      email: formulario.email,
      telefono: formulario.telefono,
      mensaje: formulario.mensaje,
      products: formattedProducts,
    };

    switch (method) {
      case "email":
        emailjs
          .send(
            "service_q2iv4sb",
            "template_707yzk7",
            templateParams,
            "wuk7TXQLWBRooSaS-"
          )
          .then(
            (response) => {
              console.log(
                "Correo enviado con éxito:",
                response.status,
                response.text
              );
              alert("Mensaje enviado correctamente por Email");
              navigate("/");
            },
            (error) => {
              console.error("Error al enviar el correo:", error);
              alert("Hubo un problema al enviar el mensaje por Email");
            }
          );
        break;

      case "whatsapp":
        let numeroWhatsapp = "1166823300";
        const mensajeWhatsApp = `Hola, soy ${formulario.nombre}. Estoy interesado en los productos: ${formattedProducts}. Puedes contactarme al correo ${formulario.email} o al teléfono ${formulario.telefono}.`;
        const urlWhatsApp = `https://wa.me/+549${numeroWhatsapp}?text=${encodeURIComponent(
          mensajeWhatsApp
        )}`;
        window.open(urlWhatsApp, "_blank");
        break;

      default:
        alert("Método no reconocido");
    }

    // Resetea el formulario y el carrito
    deleteCart();
    setFormulario({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <form className={styles.formulario} onSubmit={(e) => e.preventDefault()}>
      <h2>Formulario de Contacto</h2>
      {error && <p className={styles.error}>{error}</p>} {/* Muestra error */}
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
      <button type="button" onClick={(e) => handleSubmit(e, "email")}>
        Enviar
      </button>
      {/* <button type="button" onClick={(e) => handleSubmit(e, "whatsapp")}>
        Enviar por WhatsApp
      </button> */}
    </form>
  );
};

export default Formulario;
