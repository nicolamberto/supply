import React, { useEffect, useState } from 'react';
import { useProductContext } from '../../../context/products';
import { FaPlus } from "react-icons/fa6";
import OverlappingTitle from '../../../resources/overlappingTitle';
import Swal from 'sweetalert2';
import {motion} from 'framer-motion';
import SkeletonCard from './skeleton/SkeletonCard';

export default function ProductGrid() {
    const { products, categories, category, addToCart } = useProductContext();
    const [loading, setLoading] = useState(true);

    // Detectar cambio de categoría y forzar shimmer por 1 segundo
    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, [category]);

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
                    className="p-4 rounded-[20px] bg-white/95 shadow h-fit relative">
                        <h3 className="text-[#00491f] font-bold text-[25px]">{product.nombre}</h3>
                        <img src={product.image} alt={product.nombre} className="w-full h-[300px] object-cover py-2" />
                        <div className="pb-10 flex flex-col gap-2 items-start">
                            <p className="text-[18px] text-gray-600"><span className='text-[#00491f] font-bold'>Caracteristicas:</span> {product.caracteristicas}</p>
                            {product.material && (
                                <p className="text-[18px] text-gray-600"><span className='text-[#00491f] font-bold'>Material:</span> {product.material}</p>
                            )}
                            {product.medidas && (
                                <p className="text-[18px] text-gray-600"><span className='text-[#00491f] font-bold'>Medidas:</span> {product.medidas}</p>
                            )}
                            {product.capacidad && (
                                <p className="text-[18px] text-gray-600"><span className='text-[#00491f] font-bold'>Capacidad:</span> {product.capacidad}</p>
                            )}
                            {product.entrada && (
                                <p className="text-[18px] text-gray-600"><span className='text-[#00491f] font-bold'>Entrada:</span> {product.entrada}</p>
                            )}
                            {product.diametroboca && (
                                <p className="text-[18px] text-gray-600"><span className='text-[#00491f] font-bold'>Diametro de boca:</span> {product.diametroboca}</p>
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
