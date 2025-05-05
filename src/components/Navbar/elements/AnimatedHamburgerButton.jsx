import React, { useState } from "react";
import { motion } from "framer-motion";

export const HamburgerButton = ({ menuOpen, setMenuOpen, setIsHover }) => {

    const handleClick = () => {
        setIsHover(false)
        setMenuOpen(!menuOpen)
    }


    return (
        <button onClick={() => { handleClick()} } className="md:hidden absolute right-8 top-1/2 -translate-y-1/2 space-y-1 flex flex-col justify-center items-center h-5 w-5 z-30">
            <motion.span
                animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 6 : 0,
                }}
                className="min-w-3 h-px bg-white block"
            />
            <motion.span
                animate={{
                    opacity: menuOpen ? 0 : 1,
                    x: menuOpen ? 5 : 0,
                }}
                className="min-w-3 h-px bg-white block"
            />
            <motion.span
                animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -4 : 0,
                }}
                className="min-w-3 h-px bg-white block"
            />
        </button>
    );
};

