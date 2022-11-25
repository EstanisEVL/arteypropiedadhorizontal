import { useState } from "react";

const AcordeonItem = ({ comuna, barrios, murales }) => {
  const [ isActive, setIsActive ] = useState(false);

  return(
    <div className='comunas-container'>
      <div className='comunas-accordion'>
        <div className='accordion-item'>
          <button onClick={ () => setIsActive(!isActive) } className='comunas-btn'>
            <h2 className='comunas-btn-h2'>{ comuna }</h2>
            <div className='comunas-btn-barrios'>{ barrios }</div>
            <div className='comunas-btn-icon'>{ isActive ? '-' : '+' }</div>
          </button>
          { isActive && <div className='comunas-btn-murales'>{ murales }</div> }
        </div>
      </div>
    </div>
  );
};

export default AcordeonItem;