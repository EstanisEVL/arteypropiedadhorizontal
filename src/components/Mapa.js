import useWindowSize from "../utils/hooks/useWindowSize";
import BackToTopButton from "./BackToTopButton";
import MapaAcordeonBtn from "./MapaAcordeonBtn";
import MapaContent from "./MapaContent";
import MapaSectionDesktop from "./MapaSectionDesktop";
import MapaSectionTablet from "./MapaSectionTablet";

const Mapa = () => {
  const size = useWindowSize();

  return(
    <>
      { size.width < 600 && 
      <main className='map-section-container'>
      <MapaContent />
      <MapaAcordeonBtn />
      <BackToTopButton />
      </main> }
      {
        (size.width >= 600 && size.width < 900) && <MapaSectionTablet />
      }
      { 
      size.width >= 900 && <MapaSectionDesktop />
      }
    </>
    
  );
};

export default Mapa;