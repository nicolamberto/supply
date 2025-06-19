import { motion } from "framer-motion";
import { useProductContext } from "../../context/products";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

export default function Pagination() {
    const { pagination, currentPage, setCurrentPage } = useProductContext();

    if (!pagination) return null;

    const { page, pageCount } = pagination;

    return (
        <motion.div
            className="flex items-start justify-start gap-4 my-8 col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <motion.button
                whileHover={{scale:1.04}}
                whileTap={{scale:0.94}}
                transition={{duration:0.2, delay:0}}
                onClick={() => {
                    setCurrentPage(page - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={page <= 1}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer
                    ${
                        page <= 1
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
            >
                <IoIosArrowBack/>
            </motion.button>

            <motion.span
                className="text-sm md:text-base text-gray-700 font-bold"
                key={page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                Página {page} de {pageCount}
            </motion.span>

            <motion.button
                whileHover={{scale:1.04}}
                whileTap={{scale:0.94}}
                transition={{duration:0.2, delay:0}}
                onClick={() => {
                    setCurrentPage(page + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={page >= pageCount}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer
                    ${
                        page >= pageCount
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
            >
                <IoIosArrowForward/>
            </motion.button>
        </motion.div>
    );
}
