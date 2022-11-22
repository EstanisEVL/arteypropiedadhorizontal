import SearchIcon from "./SearchIcon";
import useWindowSize from "../utils/hooks/useWindowSize";
import ContactButtonsTablet from "./ContactButtonsTablet";
import { Link } from "react-router-dom";


const NavBarCategories = () => {
  const size = useWindowSize();

  return(
    <nav className='navbar-categories'>
      <div className='categories-container'>
        <ul>
          <li>
            <Link to={`/articulos`}>Artículos</Link>
          </li>
          <li>
            <Link to={`/noticias`}>Noticias</Link>
          </li>
          <li>
            <Link to={`/murales`}>Murales</Link>
          </li>
          <li>
            <Link to={`/mapa`}>Mapa</Link>
          </li>
          { size.width < 600 && <li><SearchIcon /></li> }
          { (size.width >= 600 && size.width < 900) && <div><ContactButtonsTablet /></div>}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarCategories;