import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with custom settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true, // Enable smooth touch scrolling for mobile
      touchMultiplier: 1.5,
      infinite: false,
      wrapper: window,
      content: document.documentElement,
    });

    // Make lenis available globally for utility functions
    window.lenis = lenis;

    // Animation frame function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
};

export default useLenis;
