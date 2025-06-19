import React from 'react'
import OverlappingTitle from '../../../resources/overlappingTitle'
import Stats from './Stats'

export default function TextBlock() {
    return (
        <div className="flex flex-col justify-center sm:gap-14 items-start h-full md:w-[70%] lg:w-[60%] px-4 sm:px-3 md:px-0">

            <OverlappingTitle firstTitle={'SOBRE'} secondTitle={'NOSOTROS'} colorFirstTitle={'text-[#00491f]'} colorSecondTitle={'text-[#adc9b8]'} />
            
            <p className="text-[#123524] text-[18px] xl:text-[22px] md:text-justify py-10 sm:py-0">Supply Argentina es una empresa dedicada a la fabricación y comercialización de recipientes plásticos industriales tales como: contenedores de residuos con ruedas, estaciones ambientales, campanas viales, cajones, pallets plásticos y todo tipo de envases aptos para cada necesidad, como el tratamiento de residuos, elaboración, transporte y organización de sus productos y materias primas. En Supply Argentina nos esforzamos por brindar un excelente servicio de preventa, ayudando a nuestros clientes a encontrar los mejores productos en vista de sus necesidades específicas.</p>
            
            <div className="w-full">
                <Stats/>
            </div>

        </div>
    )
}
