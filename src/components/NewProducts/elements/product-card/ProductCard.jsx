import { motion } from 'framer-motion'
import { FaEye } from "react-icons/fa6";
import ZoomImage from '../ZoomImage'
import capacidad from '../../../../assets/iconos/capacidad.png';
import caracteristicas from '../../../../assets/iconos/caracteristicas.png';
import diametroboca from '../../../../assets/iconos/diametroboca.png';
import entrada from '../../../../assets/iconos/entrada.png';
import material from '../../../../assets/iconos/material.png';
import medidas from '../../../../assets/iconos/medidas.png';
import { parseCaracteristicas } from '../../utils/utils';

export default function ProductCard({ product, openVariantModal, addFunction }) {


    return (
        <motion.div
            initial={{ opacity: 0.6, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            key={product.codigo}
            className="p-4 rounded-[20px] bg-white/95 shadow h-[600px] relative">
            <h3 className="text-[#00491f] font-bold text-[25px] font-MontExtraBoldItalic">{product.nombre}</h3>
            <ZoomImage src={product.image} alt={product.nombre} className={product.name} />
            <div className="pb-10 flex flex-col gap-2 items-start">

                {product.caracteristicas && (
                    <div className="text-[18px] text-gray-600 flex flex-row justify-center items-start leading-5 gap-2">
                        <img className='w-[25px] pt-[3px]' src={caracteristicas} alt='caracteristicas-icono' />
                        <ul>
                            {parseCaracteristicas(product.caracteristicas).map((item, idx) => (
                                <li key={idx}>-{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {product.material && (
                    <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5">
                        <img className='w-[20px]' src={material} alt='material-icono' />
                        <p>{product.material}</p>
                    </div>
                )}
                {product.medidas && (
                    <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5">
                        <img className='w-[20px]' src={medidas} alt='medidas-icono' />
                        <p>{product.medidas}</p>
                    </div>
                )}
                {product.capacidad && (
                    <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5">
                        <img className='w-[20px]' src={capacidad} alt='capacidad-icono' />
                        <p>{product.capacidad}</p>
                    </div>
                )}
                {product.entrada && (
                    <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5">
                        <img className='w-[20px]' src={entrada} alt='entrada-icono' />
                        <p>{product.entrada}</p>
                    </div>
                )}
                {product.diametroboca && (
                    <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5">
                        <img className='w-[20px]' src={diametroboca} alt='diametroboca-icono' />
                        <p>{product.diametroboca}</p>
                    </div>
                )}
            </div>

            <div className="flex gap-2 absolute right-4 bottom-4">
                {product.variant && (
                    <div
                        onClick={() => openVariantModal(product.variant)}
                        className="rounded-full p-3 text-[#00491f] bg-transparent border border-[#00491f] hover:bg-[#00491f] hover:text-white transition font-bold cursor-pointer">
                        <FaEye />
                    </div>
                )}
                <button
                    onClick={() => { addFunction(product) }}
                    className="rounded-full px-4 py-1 text-white bg-[#00491f] hover:text-[#00491f] hover:bg-transparent transition font-bold cursor-pointer">
                    Agregar al pedido
                </button>
            </div>
        </motion.div>)
}
