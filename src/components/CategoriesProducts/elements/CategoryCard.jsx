import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../../context/products'
import { motion } from 'framer-motion'

export default function CategoryCard({ item }) {

  const cardVariants = {
    initial: {},
    hover: {},
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };



  const { category, setCategory } = useProductContext()

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="flex flex-col justify-center gap-1 items-start h-full sm:h-[70%] w-full group">
      <Link
        onClick={() => setCategory(item.slug)}
        className='h-[200px] md:h-[420px] w-full overflow-hidden rounded-[20px]'
        to={`/productos`}
      >
        <motion.img
          variants={imageVariants}

          src={item.img} alt="imagen" className="rounded-[20px] h-full w-full object-cover" />
      </Link>

      <div className="relative">
        <motion.p
          className="uppercase font-bold text-[#00491f] line-clamp-2 h-[3em] sm:h-[2em] leading-snug">{item.name}
        </motion.p>
        <motion.div
          variants={{
            initial: { width: 0 },
            hover: { width: "100%", transition: { duration: 0.4 } },
          }}
          className="absolute left-0 bottom-2 h-[2px] bg-[#00491f] rounded-full"
          style={{ originX: 0 }}
        />
      </div>


      <motion.button className="w-full flex justify-end text-[30px]">
        <Link to={`/productos`}>
          <div className="border-2 flex justify-center items-center px-5 rounded-full text-green-800 group-hover:bg-green-800 group-hover:text-white cursor-pointer transition">
            <HiArrowLongRight />
          </div>
        </Link>
      </motion.button>
    </motion.div>

  )
}
