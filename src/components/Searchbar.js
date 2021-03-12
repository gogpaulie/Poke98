import React from 'react';

const Searchbar = ({ onSearchChange, handlePokedexClose }) => {
  return (
    <div className='searchbar'>
      <div className='pokecard__file-btns searchbar__bottom-divider'>
        <button disabled>File</button>
        <button disabled>Edit</button>
        <button
          className='pokecard__file-btns--exit'
          onClick={handlePokedexClose}
        >
          Exit
        </button>
      </div>
      <div className='searchbar__form-group searchbar__top-divider'>
        <input
          className='searchbar__form-group--control'
          type='search'
          placeholder='Search Pokemon...'
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
