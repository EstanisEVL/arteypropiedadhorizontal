import FooterDeveloperTablet from "./FooterDeveloperTablet";
import FooterMecenazgo from "./FooterMecenazgo";

const TabletFooter = () => {
  return(
    <div className='footer-container'>
      <FooterMecenazgo />
      <FooterDeveloperTablet />
    </div>
  );
};

export default TabletFooter;