// Smooth scroll utilities for Lenis
export const scrollToSection = (selector, offset = 0) => {
  const element = document.querySelector(selector);
  if (element && window.lenis) {
    window.lenis.scrollTo(element, {
      offset: offset,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }
};

export const scrollToTop = () => {
  if (window.lenis) {
    window.lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }
};

export const scrollToBottom = () => {
  if (window.lenis) {
    window.lenis.scrollTo(document.body.scrollHeight, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }
};

// Smooth scroll to element by ID
export const scrollToId = (id, offset = 0) => {
  scrollToSection(`#${id}`, offset);
};

// Parallax effect helper
export const useParallax = (elementRef, speed = 0.5) => {
  if (typeof window !== 'undefined' && window.lenis) {
    window.lenis.on('scroll', ({ scroll }) => {
      if (elementRef.current) {
        const y = scroll * speed;
        elementRef.current.style.transform = `translateY(${y}px)`;
      }
    });
  }
};
