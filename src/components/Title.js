import ContactButtonsMobile from "./ContactButtonsMobile";
import useWindowSize from "../utils/hooks/useWindowSize";
import SearchIcon from "./SearchIcon";

const Title = () => {
  const size = useWindowSize();
  return(
    <div className="title-container">
      { size.width < 600 && <ContactButtonsMobile /> }
      <h1><span>Murales</span> de Buenos Aires</h1>
      { (size.width >= 600 && size.width < 900) && <SearchIcon /> }
    </div>
  );
}

export default Title;