const CarouselSlide = ({ item }) => {
  return(
    <img className='carousel-img' src={ item } alt='imagen de carrusel' />
  );
};

export default CarouselSlide;