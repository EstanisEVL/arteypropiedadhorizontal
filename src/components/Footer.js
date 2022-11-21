import useWindowSize from '../utils/hooks/useWindowSize';
import FooterContact from './FooterContact';
import FooterDeveloper from './FooterDeveloper';
import FooterMecenazgo from './FooterMecenazgo';
import FooterSiteMap from './FooterSiteMap';
import FooterSiteMapDesktop from './FooterSiteMapDesktop';

const Footer = () => {
  const size = useWindowSize();
  return(
    <>
      { size.width < 600 &&
        <div className='footer-container'>
          <FooterSiteMap />
          <FooterContact />
          <FooterMecenazgo />
          <FooterDeveloper />
        </div>
      }
      { size.width >= 900 &&
        <>
          <div className='footer-container'>
            <div className='footer-main-content'>
              <FooterSiteMapDesktop />
              <FooterContact />
              <FooterMecenazgo />
            </div>
          </div>
          <FooterDeveloper />
        </>
      }
    </>
  );
};

export default Footer;