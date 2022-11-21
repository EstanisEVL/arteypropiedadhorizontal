import ContactButtonsDesktop from "./ContactButtonsDesktop";
import SearchIconDesktop from "./SearchIconDesktop";


const NavBarCategoriesDesktop = () => {
  return(
    <nav className='navbar-categories'>
      <div className='categories-container'>
        <div><ContactButtonsDesktop /></div>
        <div className="ul-container">
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
          </ul>
        </div>
        <SearchIconDesktop />
      </div>
    </nav>
  );
};

export default NavBarCategoriesDesktop;