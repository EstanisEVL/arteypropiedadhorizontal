import heyWebLogoGris from '../assets/img/HEY-gris.png';

const FooterDeveloper = () => {
  return(
    <div className='footer-developer'>
      <a href='https://github.com/EstanisEVL'>©<img 
        src={ heyWebLogoGris }
        alt='HEY! Desarrollo web'
        className='developer-logo' /> 
        Desarrollo web y diseño.</a>
    </div>
  );
};

export default FooterDeveloper;