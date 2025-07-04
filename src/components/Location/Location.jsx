import OverlappingTitle from "../../resources/overlappingTitle";
import LocationForm from "./elements/LocationForm";
import { motion } from "framer-motion";

function Location() {
  return (
    <section className='w-full flex justify-center items-center py-20'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='w-[95%] lg:w-[80%] 2xl:w-[70%] flex flex-col justify-center items-start bg-white p-4 sm:p-8 md:p-14 pt-10 rounded-[15px] md:rounded-[40px]'>

        <OverlappingTitle firstTitle={'CONTACTATE'} secondTitle={'CON NOSOTROS'} colorFirstTitle={'text-[#00491f]'} colorSecondTitle={'text-[#adc9b8]'} />

        <div className="flex flex-col-reverse md:flex-row-reverse justify-end items-start sm:gap-5 md:gap-10 lg:gap-12 pt-5 w-full">

          {/* Columna 1: formulario de contacto */}
          <LocationForm />

          {/* Columna 2: Mapa */}
          <div className='w-[100%] lg:w-[50%] h-[250px] md:h-[540px] rounded-[25px] overflow-hidden shadow-xl mt-10'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1120335404737!2d-58.56163018421311!3d-34.51062898047461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb654e2cfa6a9%3A0xe5d8b19cf8bd0b38!2sNeuqu%C3%A9n%204030%2C%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1617812708823!5m2!1ses-419!2sar"
              className='h-full w-full'
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </motion.div>
    </section>
  );
}

export default Location;
