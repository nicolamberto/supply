import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (containerRef) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (containerRef?.current) {
      containerRef.current.scrollTo(0, 0); // Scroll en contenedor específico
    } else {
      window.scrollTo(0, 0); // Scroll global
    }
  }, [pathname, containerRef]);
};

export default useScrollToTop;
