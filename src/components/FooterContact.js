import useWindowSize from "../utils/hooks/useWindowSize";
import ContactButtonsFooter from "./ContactButtonsFooter"
import ContactButtonsFooterDesktop from "./ContactButtonsFooterDesktop";

const FooterContact = () => {
  const size = useWindowSize();
  return(
    <div className='footer-contact-buttons'>
      <h3>Contacto</h3>
      { size.width >= 900 ? <ContactButtonsFooterDesktop /> : <ContactButtonsFooter /> }
    </div>
  );
};

export default FooterContact;