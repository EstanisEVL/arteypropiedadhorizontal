import instagramLogo from '../assets/img/Instagram-footer.svg'
import mailLogo from '../assets/img/Mail-footer.svg'

const ContactButtonsFooter = () => {
  return(
    <div className='contact-btns-container'>
      <a href='https://www.instagram.com/' rel='noreferrer noopener' target='_blank'><img src={ instagramLogo } alt='instagram'/></a>
      <a href='mailto:'><img src={ mailLogo } alt='mail'/></a>
    </div>
  );
};

export default ContactButtonsFooter;