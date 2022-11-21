import heyWebLogoBlanco from '../assets/img/HEY-blanco.png';

const FooterDeveloperTablet = () => {
  return(
    <div className='footer-developer'>
      <a href='https://github.com/EstanisEVL'>©<img 
        src={ heyWebLogoBlanco }
        alt='HEY! Desarrollo web'
        className='developer-logo' /> 
        Desarrollo web y diseño.</a>
    </div>
  );
};

export default FooterDeveloperTablet;