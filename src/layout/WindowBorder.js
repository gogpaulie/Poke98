import React from 'react';
import WindowTopBar from '../components/WindowTopBar';

const WindowBorder = ({
  handlePokedexClose,
  isPokedexMinimized,
  togglePokedexMinimize,
  togglePokedexMaximize,
  isMaximized,
  children,
}) => {
  return (
    <div className='window_border'>
      <WindowTopBar
        handlePokedexClose={handlePokedexClose}
        isPokedexMinimized={isPokedexMinimized}
        togglePokedexMinimize={togglePokedexMinimize}
        togglePokedexMaximize={togglePokedexMaximize}
        isMaximized={isMaximized}
      />
      {children}
    </div>
  );
};

export default WindowBorder;
