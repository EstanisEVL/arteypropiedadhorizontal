import MapaAcordeonBtn from "./MapaAcordeonBtn";
import MapaContent from "./MapaContent";
import NavBarCategoriesDesktop from "./NavBarCategoriesDesktop";

const MapaSectionDesktop = () => {
  return(
    <>
      <NavBarCategoriesDesktop />
      <main className='map-section-container'>
        <MapaContent />
        <h2 className='accordion-container-title'>Listado de murales por comuna y barrio</h2>
        <MapaAcordeonBtn />
      </main>
    </>
  );
};

export default MapaSectionDesktop;