import React from 'react';
import useWindowSize from '../utils/hooks/useWindowSize';
import Brand from './Brand';
import NavBarCategories from './NavBarCategories';
import Title from './Title';


const NavBar = () => {
  const size = useWindowSize();

  return(
    <header className='navbar-container'>
      <nav className='navbar'>
        <Brand />
        <Title />
      </nav>
      { size.width < 600 && <NavBarCategories /> }
    </header>
  );
};

export default NavBar;