import instagramLogo from '../assets/img/Instagram-desktop.png'
import mailLogo from '../assets/img/Mail-desktop.png'

const ContactButtonsFooterDesktop = () => {
  return(
    <div className='contact-btns-container'>
      <a href='https://www.instagram.com/' rel='noreferrer noopener' target='_blank'><img src={ instagramLogo } alt='instagram'/></a>
      <a href='mailto:'><img src={ mailLogo } alt='mail'/></a>
    </div>
  );
};

export default ContactButtonsFooterDesktop;