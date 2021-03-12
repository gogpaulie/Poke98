import React from 'react';
import pokeball from '../../assets/pokeball.png';

const ProgramsMenu = ({ handleMenuClick, closeMenu }) => {
  const handlePokedexOpen = () => {
    handleMenuClick();
    closeMenu();
  };

  return (
    <div className='programsMenu'>
      <button className='programsMenu__btn' onClick={handlePokedexOpen}>
        <img src={pokeball} alt='pokeball logo' />
        <p>Pokedex.exe</p>
      </button>
    </div>
  );
};

export default ProgramsMenu;
