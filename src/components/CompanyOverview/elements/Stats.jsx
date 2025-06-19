import React from 'react'


function Divider() {
    return (
        <div className="bg-[#00491f] w-22 h-[2px] sm:w-[3px] sm:h-12 2xl:h-[70px] mx-2 sm:mx-6 opacity-60"></div>
    )
}

export default function Stats() {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center text-[#00491f] w-full'>

            <div className="flex flex-col justify-center items-center max-w-[150px] pb-4 sm:pb-0">
                <p className='text-[70px] md:text-[55px] 2xl:text-[80px] font-extrabold pr-3'>+15</p>
                <p className='text-center text-[20px] sm:text-[16px] lg:text-[22px] xl:text-[25px] text-nowrap'>Años de trayectoria</p>
            </div>
            <Divider />
            <div className="flex flex-col justify-center items-center pb-4 sm:pb-0">
                <p className='text-[70px] md:text-[55px] 2xl:text-[80px] font-extrabold pr-3'>+5000</p>
                <p className='text-center text-[20px] sm:text-[16px] lg:text-[22px] xl:text-[25px] text-nowrap'>Clientes satisfechos</p>
            </div>
            <Divider />
            <div className="flex flex-col justify-center items-center">
                <p className='text-[70px] md:text-[55px] 2xl:text-[80px] font-extrabold pr-3'>+200</p>
                <p className='text-center text-[20px] sm:text-[16px] lg:text-[22px] xl:text-[25px] text-nowrap'>Empleados</p>
            </div>



        </div>
    )
}
