import React from 'react'

export default function OverlappingTitle({firstTitle, secondTitle, colorFirstTitle, colorSecondTitle}) {
    return (
        <div className="w-[100%] text-center sm:text-start font-miFuente">
            <div className={`text-[35px] relative ${colorFirstTitle}`}>
                <p>{firstTitle}</p>
                <p className={`text-[40px] sm:text-[45px] absolute top-5 left-1/2 transform -translate-x-1/2 sm:left-0 sm:translate-x-0 text-nowrap ${colorSecondTitle}`}>{secondTitle}</p>
            </div>
        </div>
    )
}
