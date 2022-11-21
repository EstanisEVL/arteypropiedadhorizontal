import { useEffect, useState } from "react";
import backToTopArrow from '../assets/img/Up-arrow.png';

const BackToTopButton = () => {
  const [ backToTop, setBackToTop ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setBackToTop(true);
      }
      else {
        setBackToTop(false);
      }
      // (window.scrollY > 100) ? setBackToTop(true) : setBackToTop(false);
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return(
    <>
    { backToTop && (
      <button className='back-to-top-btn' onClick={ scrollUp }><img src={ backToTopArrow } alt='Ir para arriba' /></button>
    )}
    </>
  );
};

export default BackToTopButton;