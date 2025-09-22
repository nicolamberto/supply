import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function ZoomImage({ src, fullSrc, alt, className, srcSet, sizes }) {
  const containerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const zoom = useMotionValue(100);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const springZoom = useSpring(zoom, { stiffness: 250, damping: 20 });

  const backgroundPosition = useTransform(
    [springX, springY],
    ([xVal, yVal]) => `${xVal}% ${yVal}%`
  );

  const backgroundSize = useTransform(springZoom, (z) => `${z}%`);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    let percentX = ((e.clientX - left) / width) * 100;
    let percentY = ((e.clientY - top) / height) * 100;

    percentX = clamp(percentX, 35, 65);
    percentY = clamp(percentY, 35, 65);

    x.set(percentX);
    y.set(percentY);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
    zoom.set(150);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    zoom.set(100);
  };

  const displaySrc = isZoomed && fullSrc ? fullSrc : src;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={isZoomed ? handleMouseMove : undefined}
      className={`w-full h-[300px] overflow-hidden cursor-zoom-in ${className}`}
    >
      <motion.div
        style={{
          backgroundImage: displaySrc ? `url(${displaySrc})` : undefined,
          backgroundSize,
          backgroundPosition,
        }}
        className="w-full h-full"
      >
        {displaySrc && (
          <img
            src={displaySrc}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            className="w-full h-full object-cover opacity-0"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        )}
      </motion.div>
    </div>
  );
}

export default ZoomImage;
