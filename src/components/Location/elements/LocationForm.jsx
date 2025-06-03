import React from 'react'

export default function LocationForm() {
    return (
        <form
            className="mx-auto p-2 sm m-10 rounded-lg flex flex-col gap-5 w-full lg:w-[50%] h-[380px] text-xs"
        >
            <div className="flex flex-col">
                <label htmlFor="nombre" className="font-semibold text-[#00491f] mb-1">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value=''
                    onChange='{handleChange}'
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef]"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold text-[#00491f] mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value=''
                    onChange='{handleChange}'
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef]"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="telefono" className="font-semibold text-[#00491f] mb-1">Teléfono</label>
                <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value=''
                    onChange='{handleChange}'
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef]"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="mensaje" className="font-semibold text-[#00491f] mb-1">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    value=''
                    onChange='{handleChange}'
                    className="border border-[#00491f] rounded-[17px] px-4 py-2 outline-none bg-[#efefef] resize-none"
                ></textarea>
            </div>

            <div
                className=" text-white rounded-full transition cursor-pointer w-full flex justify-end"
            >
                <button className='border-2 bg-[#00491f] py-1 px-7 rounded-full text-[15px] cursor-pointer'>
                    Enviar
                </button>
                
            </div>
        </form>
    )
}
