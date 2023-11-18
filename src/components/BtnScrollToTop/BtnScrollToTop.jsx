import React, { useState, useEffect } from 'react';
import { ScrollToTopButton } from './BtnScrollToTop.styled';
import sprite from '../../images/sprite.svg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <svg width="32" height="32">
            <use href={`${sprite}#icon-arrow-top`} />
          </svg>
        </ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTop;
