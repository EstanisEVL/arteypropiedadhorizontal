import MapaAcordeonBtn from "./MapaAcordeonBtn";
import MapaContent from "./MapaContent";
import NavBarCategoriesDesktop from "./NavBarCategoriesDesktop";

const MapaSectionDesktop = () => {
  return(
    <>
      <NavBarCategoriesDesktop />
      <MapaContent />
      <MapaAcordeonBtn />
    </>
  );
};

export default MapaSectionDesktop;