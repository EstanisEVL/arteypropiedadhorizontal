import useWindowSize from "../utils/hooks/useWindowSize";
import DesktopMainContent from "./DesktopMainContent";
import MobileMainContent from "./MobileMainContent";
import TabletMainContent from "./TabletMainContent";

const HeroSection = () => {
  const size = useWindowSize();

  return(
    <>
      { size.width < 600 && <MobileMainContent />}
      { (size.width >= 600 && size.width < 900) && <TabletMainContent /> }
      { size.width >= 900 && <DesktopMainContent />}
    </>
  );
};

export default HeroSection;