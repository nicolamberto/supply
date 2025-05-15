import React from 'react'
import { useProductContext } from '../../../context/products';
import { FaPlus } from "react-icons/fa6";
import OverlappingTitle from '../../../resources/overlappingTitle';
import Swal from 'sweetalert2'

export default function ProductGrid() {

    const { products, categories, category, addToCart } = useProductContext();

    const categoryTitle = category === ''
        ? 'TODOS LOS PRODUCTOS'
        : categories.find((item) => item.slug === category)?.name || '';

    const titleArray = categoryTitle.split(' ')

    const addFunction = (product) => {
        addToCart(product)
        Swal.fire({
            position: "top-end",
            toast: true,
            icon: "success",
            title: `${product.name} añadido al carrito`,
            showConfirmButton: false,
            timer: 1500,
            backdrop: false,
            width:'fit'
        })
    }

    return (
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative pt-26">
            <div className="absolute col-span-3 w-full">
                <OverlappingTitle firstTitle={titleArray.length == 2 ? titleArray[0] : titleArray.slice(0, 2).join(' ')} secondTitle={titleArray.length == 2 ? titleArray[1] : titleArray.slice(2).join(' ')} colorFirstTitle={'text-[#00491f]'} colorSecondTitle={'text-[#adc9b8]'} />
            </div>

            {products.map(product => (
                <div key={product.slug} className="p-4 rounded-[20px] bg-white/95 shadow h-[400px] relative">
                    <h3 className="text-[#00491f] font-bold text-[20px]">{product.name}</h3>
                    <img src={product.img} alt={product.name} className="w-full h-48 object-cover py-2" />
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <div
                        onClick={() => { addFunction(product) }}
                        className=" rounded-full p-3 text-white bg-[#00491f] absolute right-3 bottom-3 hover:text-[#00491f] hover:bg-transparent transition hover:font-bold cursor-pointer">
                        <FaPlus />
                    </div>
                </div>
            ))}
        </section>
    )
}
