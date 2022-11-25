import AcordeonItem from './AcordeonItem';
import { accordionData } from './AcordeonData';

const MapaAcordeonBtn = () => {
  return (
    <div>
      <div className='accordion-container'>
        { accordionData.map(({ id, comuna, barrios, murales }) =>
          (<AcordeonItem key={ id } comuna={ comuna } barrios={ barrios } murales={ murales } />)
        )}
      </div>
    </div>
  );
};

export default MapaAcordeonBtn;