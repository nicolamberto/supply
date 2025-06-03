import React from 'react';
import TextBlock from './elements/TextBlock';
import Images from './elements/Images';

function CompanyOverview() {

  return (
    <div className=' my-20 w-[100%] py-7 sm:py-20 flex flex-col justify-center items-center bg-[#adc9b8] mx-[200px] rounded-[15px] md:rounded-[100px]'>

      

        {/* bloque completo sobre mi */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 w-[95%] lg:w-[80%] 2xl:w-[70%]">

          {/* bloque de texto (titulo, texto y estadisticas) */}
          <TextBlock />

          {/* imagenes */}
          <Images />

        </div>


    </div>
  );
}

export default CompanyOverview;
