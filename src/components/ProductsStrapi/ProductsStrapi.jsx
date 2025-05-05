import React, { useEffect, useState } from 'react'
import { getProducts } from '../../utils/get-products';
import { useProductContext } from '../../context/products';

export default function ProductsStrapi() {

    const { products, setCategory, cart, addToCart, removeFromCart } = useProductContext();

    console.log(products);
    
    console.log(cart);

    return (
        <div className='h-[100vh] gap-10 flex flex-row justify-center items-center border-2 border-black w-full'>

            <div className="flex flex-col justify-center items-center gap-10">
                <button
                    onClick={() => { setCategory('') }}
                    className='border border-blue-400 p-3 rounded-full'>TODOS LOS PRODUCTOS</button>
                <button
                    onClick={() => { setCategory('pallets-plasticos') }}
                    className='border border-blue-400 p-3 rounded-full'>PALLETS PLASTICOS</button>
            </div>

            <div className="flex flex-col gap-5 border-2 p-10">
                {
                    products.map((item) => (
                        <div key={item.name} className=" flex flex-row justify-center items-center gap-5">
                            <button onClick={() => addToCart(item)} className='border cursor-pointer rounded-md p-1 bg-blue-300' key={item.name}>{item.name}</button>
                            <button onClick={() => removeFromCart(item)} className='border cursor-pointer border-black rounded-md bg-red-500 text-white p-1'>delete</button>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
