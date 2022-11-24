import { Link } from "react-router-dom";

const MainText = () => {
  return(
    <div className="main-text-container">
      <div className='title-container'>
        <h1>Arte y Propiedad Horizontal</h1>
        <h2>Proyecto recopilatorio de los murales de la Ciudad Autónoma de Buenos Aires.</h2>
      </div>
      <div className='row'>
        <div className='col'>
          <p>En las décadas de 1950, 1960 y 1970 a menudo se incluían en las entradas y  frentes de los edificios de vivienda en propiedad horizontal murales u otras obras artísticas.</p>
          <p>A diferencia de los murales existentes en edificios públicos y galerías comerciales, hay poca información sobre las obras en edificios de vivienda. En contraste con el actual Street art, las obras estaban previstas desde el proyecto y se realizaban con criterios de perdurabilidad.</p>
          <p>Con la ley de propiedad horizontal (1948) los palieres  y halles de ingreso adquieren gran importancia, como argumento de venta. Para los arquitectos identificados con el Movimiento Moderno resultaba  pecaminoso recurrir a las decoraciones aplicadas (Adolf Loos:  Ornamento y delito). En cambio, la inclusión de obras de arte en la arquitectura aparecía en las obras de Le Corbusier y en las teorías de la Bauhaus de integración de la arquitectura con las artes y la artesanía. También estaba el ejemplo del muralismo mexicano y las obras de Niemayer y otros arquitectos brasileños.</p>
        </div>
        <div className='col'>
          <p>En los edificios de esos años aparecen obras de pintores y escultores consagrados como Berni, Castagnino, Pérez Celis, Fioravanti, Polesello y Seoane. También de otros artistas no tan conocidos, pero de valiosa obra, como Capristo, Ballester Peña, Falcini y Nieto. Un caso especial es el de Rodolfo Bardi que entre 1963 y 1983 realizo casi 200 murales en toda la Ciudad.</p>
          <p>Los murales se ubican mayoritariamente en los ingresos a los edificios en semicubiertos y palieres. En unos pocos casos se desarrollan en muros exteriores. Se puede incluir los ejemplos de solados realizados en mosaico granítico in situ que se puede considerar como murales horizontales. En los casos más sencillos el proyectista simplemente dejaba  disponible un paño de muro para que el muralista haga su obra. En otros casos  el mural tiene una integración más compleja con la arquitectura, contribuyendo a articular el espacio.</p>
          {/* CORREGIR RUTA */}
          <Link to='/murales'>Ver murales...</Link>
        </div>
      </div>
    </div>
  );
};

export default MainText;