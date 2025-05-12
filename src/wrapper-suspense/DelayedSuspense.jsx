import React, { Suspense, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DelayedSuspense = ({ children, fallback, delay = 1000 }) => {
  const location = useLocation();
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    setShowFallback(true);
    const timer = setTimeout(() => setShowFallback(false), delay);
    return () => clearTimeout(timer);
  }, [location.pathname, delay]); 

  return (
    <Suspense fallback={fallback}>
      {showFallback ? fallback : children}
    </Suspense>
  );
};
