import React from 'react';

const CardTopBar = ({ pokemon, handleCardClose }) => {
  return (
    <div>
      <div className='card-top-bar'>
        <div className='card-top-bar__iconName'>
          <img src={pokemon.sprites.front_default} alt='card icon' />
          <p>{pokemon.name}</p>
        </div>
        <div className='card-top-bar__buttons'>
          <button
            className='card-top-bar__buttons--close'
            onClick={handleCardClose}
          >
            <i className='fas fa-times'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTopBar;
