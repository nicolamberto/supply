import React from 'react'
import OverlappingTitle from '../../../resources/overlappingTitle'

export default function TextBlock() {
    return (
        <div className="flex flex-col justify-center items-start w-[60%] gap-14 h-full ">

            <OverlappingTitle firstTitle={'SOBRE'} secondTitle={'NOSOTROS'} colorFirstTitle={'text-[#00491f]'} colorSecondTitle={'text-white'} />
            
            <p className="text-[#123524] text-[17px]">Supply Argentina es una empresa dedicada a la fabricación y comercialización de recipientes plásticos industriales tales como: contenedores de residuos con ruedas, estaciones ambientales, campanas viales, cajones, pallets plásticos y todo tipo de envases aptos para cada necesidad, como el tratamiento de residuos, elaboración, transporte y organización de sus productos y materias primas. En Supply Argentina nos esforzamos por brindar un excelente servicio de preventa, ayudando a nuestros clientes a encontrar los mejores productos en vista de sus necesidades específicas.</p>
            
            <div className="w-full border-2 border-green-500 h-40">
                ESTADISTICAS
            </div>

        </div>
    )
}
