import List from "../utils/List";
import Carousel from "./Carousel";
import MainText from "./MainText";
import NavBarCategories from "./NavBarCategories";
import TabletFooter from "./TabletFooter";

const TabletMainContent = () => {
  return(
    <main className='tablet-main-content'>
      <section className='tablet-sidemenu'>
        <NavBarCategories />
        <TabletFooter />
      </section>
      <section className='tablet-content'>
        <Carousel images={ List } />
        <MainText />
      </section>
    </main>
  );
}

export default TabletMainContent;