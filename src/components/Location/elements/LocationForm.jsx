import  { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";

export default function LocationForm() {

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
            confirmButtonText: 'Salir',
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

        if (!form.nombre || !form.email || !form.mensaje) {
            setError("Completa los campos obligatorios.");
            return;
        }

        const templateParams = {
            nombre: form.nombre,
            email: form.email,
            telefono: form.telefono,
            mensaje: form.mensaje,
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
                    console.log("Mensaje enviado correctamente por Email");

                    navigate("/");
                },
                (error) => {
                    console.error("Error al enviar el correo:", error);
                    console.log("Hubo un problema al enviar el mensaje por Email");
                }
            );

        setForm({
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        });
        // Fin del envío por emailjs
        //fin de submit

    };

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto p-2 sm m-10 rounded-lg flex flex-col gap-5 w-full lg:w-[50%] h-[380px] text-[12px] xl:text-[21px]"
        >
            <div className="flex flex-col">
                <label htmlFor="nombre" className="font-semibold text-[#00491f] mb-1">Nombre</label>
                <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef]"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold text-[#00491f] mb-1">Email</label>
                <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef]"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="telefono" className="font-semibold text-[#00491f] mb-1">Teléfono</label>
                <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef]"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="mensaje" className="font-semibold text-[#00491f] mb-1">Mensaje</label>
                <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    value={form.mensaje}
                    onChange={handleChange}
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef] resize-none"
                ></motion.textarea>
            </div>

            <div
                className=" text-white rounded-full transition cursor-pointer w-full flex justify-end"
            >
                <button
                    type='submit'
                    onClick={(e) => handleSubmit(e, "email")}
                    className='border-2 bg-[#00491f] py-1 px-7 rounded-full text-[15px] cursor-pointer font-MontBold'>
                    Enviar
                </button>

            </div>
        </form>
    )
}
