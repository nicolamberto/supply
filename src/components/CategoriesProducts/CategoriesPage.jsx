import CategoriesProducts2 from './CategoriesProducts2'
import OverlappingTitle from '../../resources/overlappingTitle'
export default function CategoriesPage() {
    return (
        <div className='w-full flex flex-col justify-center items-center pt-10'>

            <div className="w-[95%] lg:w-[80%] 2xl:w-[80%]">
                <OverlappingTitle firstTitle={'PLASTICOS'} secondTitle={'INDUSTRIALES'} colorFirstTitle={'text-[#00491f]'} colorSecondTitle={'text-[#adc9b8]'}/>
                <CategoriesProducts2 />
            </div>

        </div>
    )
}
