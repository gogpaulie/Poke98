import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import SinglePokemonCard from './SinglePokemonCard';

const PokemonIcon = ({ pokemon }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const handleSingleClick = () => {
    setIsHighlighted(true);
  };
  const handleClickAway = () => {
    setIsHighlighted(false);
  };

  const handleCardClose = () => {
    setIsCardOpen(false);
  };

  const handleDoubleClick = () => {
    setIsCardOpen(true);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div
          draggable='true'
          className={`icon ${isHighlighted && 'highlighted'}`}
          onClick={handleSingleClick}
          onDoubleClick={handleDoubleClick}
        >
          <img
            className='icon__image--pokemon'
            src={pokemon.sprites.front_default}
            alt='icon'
          />
          <p className='icon__text'>{pokemon.name}</p>
        </div>
      </ClickAwayListener>
      {isCardOpen && (
        <SinglePokemonCard
          pokemon={pokemon}
          handleCardClose={handleCardClose}
        />
      )}
    </div>
  );
};

export default PokemonIcon;
