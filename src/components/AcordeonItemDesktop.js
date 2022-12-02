import { useState } from 'react';

const AcordeonItemDesktop = ({ id, comuna, barrios, murales }) => {
  const [ isActive, setIsActive ] = useState(false);

  return(
    <div className='accordion-wrapper'>
      <button onClick={ () => setIsActive(!isActive) } className='comunas-btn-collapsible'>
        <div className='comunas-btn-text'>
          <label className='comunas-btn-label'>{ comuna }</label>
          <div className='comunas-btn-barrios'>{ barrios }</div>
        </div>
        <div className='comunas-btn-icon'>{ isActive ? '-' : '+' }</div>
      </button>
      { isActive && 
      <div className='comunas-btn-content'>{ murales }</div>
      }
    </div>
  );
};

export default AcordeonItemDesktop;