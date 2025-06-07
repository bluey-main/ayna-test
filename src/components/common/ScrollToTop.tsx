// src/components/common/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current URL path

  useEffect(() => {
    // Scroll to the top of the window whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: effect runs when pathname changes

  return null; // This component does not render anything itself
}

export default ScrollToTop;