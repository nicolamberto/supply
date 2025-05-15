import React from "react";
import style from "./Location.module.css";

function Location() {
  return (
    <section className='w-full flex justify-center items-center border-2 py-20'>
      <div className='w-[95%] lg:w-[80%] 2xl:w-[60%] flex flex-row-reverse justify-center items-center'>
        {/* Columna 1: Información */}
        <div className="border-2">
          DIV INFO
        </div>

        {/* Columna 2: Mapa */}
        <div className=''>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1120335404737!2d-58.56163018421311!3d-34.51062898047461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb654e2cfa6a9%3A0xe5d8b19cf8bd0b38!2sNeuqu%C3%A9n%204030%2C%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1617812708823!5m2!1ses-419!2sar"
            className={style.mapIframe}
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
