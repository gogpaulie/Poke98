import React from 'react';
import loadingGif from '../assets/loading.gif';

const Spinner = () => {
  return (
    <div className='pokedex__loading'>
      <img src={loadingGif} alt='loading' />
    </div>
  );
};

export default Spinner;
