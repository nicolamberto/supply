import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../../../context/products';
import emailjs from "@emailjs/browser";

export default function Form() {

  const { cart, setCart, clearCart } = useProductContext()
  const formattedProducts = cart
    .map(
      (producto) =>
        `//Producto: ${producto.nombre} - Categoría: ${producto.categoria} - Cantidad solicitada: ${producto.quantity}//`
    )
    .join(", ");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    Swal.fire({
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Ir al inicio',
      html: `
        <div class="flex flex-col items-center space-x-4">
          <div>
            <h2 class="text-base font-semibold text-[24px]">Perfecto ${form.nombre}!</h2>
            <p class="text-sm text-gray-500 text-[17px]">Tu consulta ha sido enviada y está siendo procesada por Supply Argentina</p>
          </div>
        </div>
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
      }
    });
    // Podés agregar lógica para enviar el formulario
    //VALIDACIONES
    if (cart.length === 0) {
      setError("No tienes productos en el pedido.");
      return;
    }

    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Completa los campos obligatorios.");
      return;
    }

    const templateParams = {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      mensaje: form.mensaje,
      products: formattedProducts,
    };

    //envio por emailjs
    emailjs
      .send(
        "service_315xqnq",
        "template_xirimln",
        templateParams,
        "HSUz0VK0z6b2QOfSx"
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

    clearCart(); // Limpiar el carrito después de enviar el formulario

    // Fin del envío por emailjs
    //fin de submit

  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto p-2 sm m-10 rounded-lg flex flex-col gap-5 w-full lg:w-[50%]"
    >
      <div className="flex flex-col">
        <label htmlFor="nombre" className="font-semibold text-[#00491f] mb-1">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border rounded-full px-4 py-2 outline-none bg-white"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="font-semibold text-[#00491f] mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-full px-4 py-2 outline-none bg-white"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="telefono" className="font-semibold text-[#00491f] mb-1">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          className="border rounded-full px-4 py-2 outline-none bg-white"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="mensaje" className="font-semibold text-[#00491f] mb-1">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="4"
          value={form.mensaje}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2 outline-none resize-none bg-white"
        ></textarea>
      </div>

      <button
        type="submit"
        onClick={(e) => handleSubmit(e, "email")}
        className="bg-[#00491f] text-white py-2 px-6 rounded-full hover:bg-green-900 transition cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
}
