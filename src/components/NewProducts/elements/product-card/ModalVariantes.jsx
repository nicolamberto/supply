import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalVariantes({ modalImage, closeModal }) {
    return (
        <AnimatePresence>
            {modalImage && (
                <motion.div
                    key="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center"
                    onClick={closeModal}
                >
                    <motion.div
                        key="modal-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-4 rounded-xl max-w-[90%] max-h-[90%]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={modalImage} alt="Variante del producto" className="max-h-[80vh] object-contain" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
