import searchImgDesktop from '../assets/img/Search-desktop.png';

const SearchIconDesktop = () => {
  return(
    <>
      {/* Cambiar por botón? */}
      <a href='/murales' className='search-icon'><img className='search-img' src={ searchImgDesktop } alt='búsqueda' /></a>
    </>
  );
};

export default SearchIconDesktop;