import List from '../utils/List';
import Carousel from './Carousel';
import MainText from './MainText';
import NavBarCategoriesDesktop from './NavBarCategoriesDesktop';

const DesktopMainContent = () => {
  return(
    <>
      <NavBarCategoriesDesktop />
      <Carousel images={ List } />
      <MainText />
    </>
  );
};

export default DesktopMainContent;