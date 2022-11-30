const MapaContent = () => {
  return(
    <>
      <h1 className='map-section-title'>Mapa de murales de Buenos Aires</h1>
      <div className='map-container'>
        <iframe title='mapa de murales' src="https://www.google.com/maps/d/embed?mid=145EW8-am_mRdY1Da8fYz6ufVejdxkYU&ehbc=2E312F" width="100%" height="480"></iframe>
      </div>
    </>
  );
};

export default MapaContent;