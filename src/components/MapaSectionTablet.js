import MapaAcordeonBtn from "./MapaAcordeonBtn";
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
        <h1 className='map-section-title'>Mapa de murales de Buenos Aires</h1>
        <div className='map-container'>
          <iframe title='mapa de murales' src="https://www.google.com/maps/d/embed?mid=145EW8-am_mRdY1Da8fYz6ufVejdxkYU&ehbc=2E312F" width="100%" height="480"></iframe>
        </div>
        <MapaAcordeonBtn />
      </section>
    </main>
  );
};

export default MapaSectionTablet;