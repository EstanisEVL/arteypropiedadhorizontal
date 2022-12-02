import MapaAcordeonBtn from "./MapaAcordeonBtn";
import MapaContent from "./MapaContent";
import NavBarCategories from "./NavBarCategories";
import TabletFooter from "./TabletFooter";

const MapaSectionTablet = () => {
  return(
    <main className='tablet-main-content'>
      <section className='tablet-sidemenu'>
        <NavBarCategories />
        <TabletFooter />
      </section>
      <section className='tablet-content'>
        <MapaContent />
        <MapaAcordeonBtn />
      </section>
    </main>
  );
};

export default MapaSectionTablet;