import AcordeonItem from './AcordeonItem';
import { accordionData } from './AcordeonData';
import useWindowSize from '../utils/hooks/useWindowSize';
import AcordeonItemDesktop from './AcordeonItemDesktop';

const MapaAcordeonBtn = () => {
  const size = useWindowSize();

  return (
    <div>
      { 
        size.width < 900 &&
        <div className='accordion-container'>
          { accordionData.map(({ id, comuna, barrios, murales }) =>
            (<AcordeonItem key={ id } comuna={ comuna } barrios={ barrios } murales={ murales } />)
          )}
        </div>
      }
      {
        size.width >= 900 && 
        <div className='accordion-container'>
          { accordionData.map(({ id, comuna, barrios, murales }) =>
            (<AcordeonItemDesktop key={ id } comuna={ comuna } barrios={ barrios } murales={ murales } />)
          )}
        </div>
      }
    </div>
  );
};

export default MapaAcordeonBtn;