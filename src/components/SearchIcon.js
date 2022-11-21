import searchImg from '../assets/img/Search.svg';
import searchImgBlk from '../assets/img/Search-blk.svg'
import useWindowSize from '../utils/hooks/useWindowSize';

const SearchIcon = () => {
  const size = useWindowSize();

  return(
    <>
      {/* Cambiar por botón? */}
      <a href='/murales' className='search-icon'><img className='search-img' src={ size.width < 600 ? searchImg : searchImgBlk } alt='búsqueda' /></a>
    </>
  );
};

export default SearchIcon;