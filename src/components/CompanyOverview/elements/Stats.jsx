import React from 'react'

export default function Stats() {
    return (
        <div className='flex flex-row justify-center items-center text-[#00491f]'>

            <div className="flex flex-col justify-center items-center max-w-[150px] border-r px-7">
                <p className='text-[30px] md:text-[55px] font-bold'>+40</p>
                <p className='text-center text-[16px] text-nowrap'>Anos de trayectoria</p>
            </div>

            <div className="flex flex-col justify-center items-center px-7">
                <p className='text-[30px] md:text-[55px] font-bold'>+2000</p>
                <p className='text-center text-[16px] text-nowrap'>Clientes satisfechos</p>
            </div>

            <div className="hidden sm:flex flex-col justify-center items-center px-7 border-l ">
                <p className='text-[30px] md:text-[55px] font-bold'>+200</p>
                <p className='text-center text-[16px]'>Empleados</p>
            </div>



        </div>
    )
}
