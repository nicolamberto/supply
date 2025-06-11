import React from 'react'
import {motion} from 'framer-motion';

export default function SkeletonCard() {
  return (
    <div className="relative overflow-hidden p-4 rounded-[20px] bg-white/70 shadow h-fit space-y-4">
            <motion.div
                className="h-[30px] bg-gray-300 rounded w-1/2"
                animate={{ scale: [1, 1.005, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
            />
            <motion.div
                className="w-full h-[300px] bg-gray-300 rounded"
                animate={{ scale: [1, 1.005, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            />
            <div className="space-y-2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className={`h-4 bg-gray-300 rounded ${i === 0 ? "w-3/4" : i === 1 ? "w-2/3" : "w-1/2"}`}
                        animate={{ scale: [1, 1.005, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                    />
                ))}
            </div>
        </div>
  )
}
