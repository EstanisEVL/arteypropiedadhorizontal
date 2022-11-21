import SearchIcon from "./SearchIcon";
import useWindowSize from "../utils/hooks/useWindowSize";
import ContactButtonsTablet from "./ContactButtonsTablet";


const NavBarCategories = () => {
  const size = useWindowSize();

  return(
    <nav className='navbar-categories'>
      <div className='categories-container'>
        <ul>
          <li>
            <a href='/articulos'>Artículos</a>
          </li>
          <li>
            <a href='/noticias'>Noticias</a>
          </li>
          <li>
            <a href='/murales'>Murales</a>
          </li>
          <li>
            <a href='/mapa'>Mapa</a>
          </li>
          { size.width < 600 && <li><SearchIcon /></li> }
          { (size.width >= 600 && size.width < 900) && <div><ContactButtonsTablet /></div>}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarCategories;