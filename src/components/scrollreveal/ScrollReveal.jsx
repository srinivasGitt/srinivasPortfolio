import React, { useEffect, useRef, useState } from 'react';


const ScrollReveal = ({ children, threshold = 0.5 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          setIsVisible(top < window.innerHeight * threshold);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [threshold]);
  
    return <div ref={ref} className={isVisible ? 'scroll-reveal visible' : 'scroll-reveal'}>{children}</div>;
  };
  

export default ScrollReveal
