import React, { useState } from 'react';
import Taskbar from './components/taskbar/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import Pokedex from './components/Pokedex';
import About from './components/About';
import './App.css';
import pokeball from './assets/pokeball.png';

function App() {
  const [isPokedexOpen, setIsPokedexOpen] = useState(false);
  const [isPokedexMinimized, setIsPokedexMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleDoubleClick = () => {
    setIsPokedexOpen(true);
  };
  const handleMenuClick = () => {
    setIsPokedexOpen(true);
  };
  const handlePokedexClose = () => {
    setIsPokedexOpen(false);
  };

  const togglePokedexMinimize = () => {
    setIsPokedexMinimized(!isPokedexMinimized);
  };
  const togglePokedexMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleAboutOpen = () => {
    setAboutOpen(true);
  };
  const handleAboutClose = () => {
    setAboutOpen(false);
  };
  return (
    <div className='desktop'>
      <div className='desktop__folder-view'>
        <DesktopIcon
          top='0'
          left='0'
          text='Pokedex.exe'
          img={pokeball}
          handleDoubleClick={handleDoubleClick}
        />
        {isPokedexOpen && (
          <Pokedex
            handlePokedexClose={handlePokedexClose}
            isPokedexMinimized={isPokedexMinimized}
            togglePokedexMinimize={togglePokedexMinimize}
            togglePokedexMaximize={togglePokedexMaximize}
            isMaximized={isMaximized}
          />
        )}
        {aboutOpen && <About handleAboutClose={handleAboutClose} />}
      </div>
      <Taskbar
        isPokedexOpen={isPokedexOpen}
        isPokedexMinimized={isPokedexMinimized}
        togglePokedexMinimize={togglePokedexMinimize}
        handleMenuClick={handleMenuClick}
        handleAboutOpen={handleAboutOpen}
        aboutOpen={aboutOpen}
      />
    </div>
  );
}

export default App;
