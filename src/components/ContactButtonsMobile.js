import instagramLogo from '../assets/img/Instagram.svg'
import mailLogo from '../assets/img/Mail.svg'

const ContactButtonsMobile = () => {
  return(
    <div className='contact-container'>
      <h3>Contacto</h3>
      <div className='contact-btns-container'>
        <a href='https://www.instagram.com/' rel='noreferrer noopener' target='_blank'><img src={ instagramLogo } alt='instagram'/></a>
        <a href='mailto:'><img src={ mailLogo } alt='mail'/></a>
      </div>
    </div>
  );
};

export default ContactButtonsMobile;