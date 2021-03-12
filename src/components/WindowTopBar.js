import React from 'react';
import pokeball from '../assets/pokeball.png';

const WindowTopBar = ({
  handlePokedexClose,
  isPokedexMinimized,
  togglePokedexMinimize,
  isMaximized,
  togglePokedexMaximize,
}) => {
  return (
    <div
      className={`window-top-bar ${isPokedexMinimized && 'minimized'} ${
        isMaximized && 'maximized'
      }`}
    >
      <div className='window-top-bar__iconName'>
        <img src={pokeball} alt='window icon' />
        <p>Pokedex.exe</p>
      </div>
      <div className='window-top-bar__buttons'>
        <button
          className='window-top-bar__buttons--minimize'
          onClick={togglePokedexMinimize}
        >
          <p>_</p>
        </button>
        <button
          className='window-top-bar__buttons--maximize'
          onClick={togglePokedexMaximize}
        >
          {isMaximized ? (
            <i className='far fa-window-restore'></i>
          ) : (
            <i className='far fa-square'></i>
          )}
        </button>
        <button
          className='window-top-bar__buttons--close'
          onClick={handlePokedexClose}
        >
          <i className='fas fa-times'></i>
        </button>
      </div>
    </div>
  );
};

export default WindowTopBar;
