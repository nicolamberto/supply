import { HiArrowLongRight } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import { useProductContext } from '../../../context/products'
import { motion } from 'framer-motion'

function getCategoryImage(item) {
  if (!item) return null;
  if (typeof item.img === 'string' && item.img) return item.img;
  if (item.images?.medium) return item.images.medium;
  if (item.images?.small) return item.images.small;
  return item.images?.fallback || null;
}

function buildSrcSet(images) {
  if (!images) return undefined;

  const candidates = [
    images.thumbnail && `${images.thumbnail} 156w`,
    images.small && `${images.small} 500w`,
    images.medium && `${images.medium} 750w`,
    images.large && `${images.large} 1000w`,
    images.original && `${images.original} 1536w`,
  ].filter(Boolean);

  return candidates.length ? candidates.join(', ') : undefined;
}

export default function CategoryCard({ item }) {

  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    setCategory(slug);
    navigate(`/${slug}`);
  };

  const cardVariants = {
    initial: {},
    hover: {},
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const { category, setCategory } = useProductContext()

  const imageSrc = getCategoryImage(item);
  const imageSrcSet = buildSrcSet(item.images);

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="flex flex-col justify-center gap-1 items-start h-full sm:h-[70%] w-full group">
      <Link
        onClick={() => setCategory(item.slug)}
        className='h-[200px] md:h-[420px] w-full overflow-hidden rounded-[20px]'
        to={`/${item.slug}`}      
        >
        <motion.img
          variants={imageVariants}
          src={imageSrc || ''}
          srcSet={imageSrcSet}
          sizes="(min-width: 1536px) 18vw, (min-width: 1280px) 20vw, (min-width: 1024px) 24vw, (min-width: 768px) 30vw, 45vw"
          alt={item.name}
          className="rounded-[20px] h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="relative">
        <motion.p
          className="uppercase text-[#00491f] line-clamp-2 h-[3em] sm:h-[2em] leading-snug font-MontBoldItalic">{item.name}
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
        <Link to={`/${item.slug}`}>
          <div className="border-2 flex justify-center items-center px-5 rounded-full text-green-800 group-hover:bg-[#00491f] group-hover:text-white cursor-pointer transition">
            <HiArrowLongRight />
          </div>
        </Link>
      </motion.button>
    </motion.div>

  )
}
