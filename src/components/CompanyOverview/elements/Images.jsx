import React from 'react'
import about1 from '../../../assets/about/about1.png'
import about2 from '../../../assets/about/about2.png'
import about3 from '../../../assets/about/about3.png'


export default function Images() {
    return (
        <div className="w-[40%] relative">
            <img src={about1} alt="img1" className='absolute top-0 rounded-[20px] w-[320px] left-1/2 transform -translate-x-1/2 z-0' />
            <img src={about2} alt="img1" className='absolute top-36 rounded-[20px] w-[350px] left-1/2 transform -translate-x-10 rotate-15 z-10' />
            <img src={about3} alt="img1" className='absolute bottom-0 rounded-[20px] w-[320px] left-1/2 transform -translate-x-1/2 -rotate-5' />
        </div>
        )
}
