import React from 'react';
import TextBlock from './elements/TextBlock';
import Images from './elements/Images';

function CompanyOverview() {

  return (
    <div className=' w-[100%] py-20 flex flex-col justify-center items-center bg-[#adc9b8] mx-[200px] rounded-[100px]'>

      <div className="w-[95%] lg:w-[80%] 2xl:w-[60%]">

        {/* bloque completo sobre mi */}
        <div className="flex flex-row justify-center items-stretch gap-0">

          {/* bloque de texto (titulo, texto y estadisticas) */}
          <TextBlock/>

          {/* imagenes */}
          <Images/>

        </div>

      </div>

    </div>
  );
}

export default CompanyOverview;
