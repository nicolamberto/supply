import React, { useEffect, useState } from 'react';
import { useProductContext } from '../../../context/products';
import { FaPlus } from "react-icons/fa6";
import OverlappingTitle from '../../../resources/overlappingTitle';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import SkeletonCard from './skeleton/SkeletonCard';
import capacidad from '../../../assets/iconos/capacidad.png'
import caracteristicas from '../../../assets/iconos/caracteristicas.png'
import diametroboca from '../../../assets/iconos/diametroboca.png'
import entrada from '../../../assets/iconos/entrada.png'
import material from '../../../assets/iconos/material.png'
import medidas from '../../../assets/iconos/medidas.png'


export default function ProductGrid() {
    const { products, categories, category, addToCart } = useProductContext();
    const [loading, setLoading] = useState(true);

    // Detectar cambio de categoría y forzar shimmer por 1 segundo
    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, [category]);

    function parseCaracteristicas(textoPlano) {
        return textoPlano
            .split("-")                     // divide por guiones
            .map(str => str.trim())        // saca espacios al inicio y fin
            .filter(str => str.length > 0) // evita ítems vacíos
    }

    const categoryTitle = category === ''
        ? 'TODOS LOS PRODUCTOS'
        : categories.find((item) => item.slug === category)?.name || '';

    const titleArray = categoryTitle.split(' ');

    let firstTitle = '';
    let secondTitle = '';

    if (titleArray.length === 3) {
        const [first, second, third] = titleArray;
        if (first.length > 11 || second.length > 3) {
            firstTitle = first;
            secondTitle = `${second} ${third}`;
        } else {
            firstTitle = `${first} ${second}`;
            secondTitle = third;
        }
    } else if (titleArray.length === 2) {
        [firstTitle, secondTitle] = titleArray;
    } else {
        firstTitle = titleArray.slice(0, 2).join(' ');
        secondTitle = titleArray.slice(2).join(' ');
    }

    const addFunction = (product) => {
        addToCart(product);
        Swal.fire({
            position: "top-end",
            toast: true,
            icon: "success",
            title: `${product.nombre} añadido al carrito`,
            showConfirmButton: false,
            timer: 1500,
            backdrop: false,
            width: 'fit'
        });
    };

    return (
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative pt-26">
            <div className="absolute col-span-3 w-full">
                <OverlappingTitle
                    firstTitle={firstTitle}
                    secondTitle={secondTitle}
                    colorFirstTitle="text-[#00491f]"
                    colorSecondTitle="text-[#adc9b8]"
                />
            </div>

            {loading
                ? Array.from({ length: products.length || 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))
                : products.map(product => (
                    <motion.div
                        initial={{ opacity: 0.6, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={product.codigo}
                        className="p-4 rounded-[20px] bg-white/95 shadow h-[600px] relative">
                        <h3 className="text-[#00491f] font-bold text-[25px]">{product.nombre}</h3>
                        <img src={product.image} alt={product.nombre} className="w-full h-[300px] object-cover py-2" />
                        <div className="pb-10 flex flex-col gap-2 items-start">

                            {product.caracteristicas && (
                                <div className="text-[18px] text-gray-600 flex flex-row justify-center items-start leading-5 gap-2">
                                    <img className='w-[25px] pt-[3px]' src={caracteristicas} alt='caracteristicas-icono'/>
                                    <ul>
                                        {parseCaracteristicas(product.caracteristicas).map((item, idx) => (
                                            <li key={idx}>-{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {product.material && (
                                <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5"> <img className='w-[20px]' src={material} alt='material-icono' /> <p>{product.material}</p> </div>
                            )}
                            {product.medidas && (
                                <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5"> <img className='w-[20px]' src={medidas} alt='medidas-icono' /> <p>{product.medidas}</p> </div>
                            )}
                            {product.capacidad && (
                                <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5"> <img className='w-[20px]' src={capacidad} alt='capacidad-icono' /> <p>{product.capacidad}</p> </div>
                            )}
                            {product.entrada && (
                                <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5"> <img className='w-[20px]' src={entrada} alt='entrada-icono' /> <p>{product.entrada}</p> </div>
                            )}
                            {product.diametroboca && (
                                <div className="text-[18px] text-gray-600 flex flex-row justify-center items-center leading-5 gap-5"> <img className='w-[20px]' src={diametroboca} alt='diametroboca-icono' /> <p>{product.diametroboca}</p> </div>
                            )}
                        </div>
                        <div
                            onClick={() => { addFunction(product) }}
                            className="rounded-full p-3 text-white bg-[#00491f] absolute right-3 bottom-3 hover:text-[#00491f] hover:bg-transparent transition hover:font-bold cursor-pointer">
                            <FaPlus />
                        </div>
                    </motion.div>
                ))}
        </section>
    );
}
