import React, { useEffect, useState } from 'react';
import start_logo from '../../assets/start_logo.png';
import sound from '../../assets/audio-okay-16x16.png';
import tasks from '../../assets/task.png';
import Task from './Task';
import StartMenu from './StartMenu';

const Taskbar = ({
  isPokedexOpen,
  isPokedexMinimized,
  togglePokedexMinimize,
  handleMenuClick,
  handleAboutOpen,
  aboutOpen,
}) => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [formatedHours, setFormatedHours] = useState(
    new Date().getHours() % 12
  );
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hourForAmPm, setHourForAmPm] = useState(new Date().getHours());
  const [menuOpen, setMenuOpen] = useState(false);
  let ampm = hourForAmPm >= 12 ? 'PM' : 'AM';

  useEffect(() => {
    setInterval(() => {
      setSeconds(new Date().getSeconds());
      setFormatedHours(new Date().getHours() % 12);
      setMinutes(new Date().getMinutes());
      setHourForAmPm(new Date().getHours());
    }, 1000);
  }, []);

  const toggleStartMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='taskbar'>
      <button className='taskbar__start-btn' onClick={toggleStartMenu}>
        <img src={start_logo} alt='windows logo' />
        <b>Start</b>
      </button>
      <div className='taskbar__divider'></div>
      <div className='taskbar__tasks'>
        {isPokedexOpen && (
          <Task
            image={true}
            taskName='Pokedex.exe'
            isPokedexMinimized={isPokedexMinimized}
            togglePokedexMinimize={togglePokedexMinimize}
          />
        )}
        {aboutOpen && <Task taskName='About' image={false} />}
      </div>
      <div className='taskbar__divider'></div>
      <div className='taskbar__tray'>
        <div className='taskbar__tray--icons'>
          <img src={tasks} alt='task scheduler' />
          <img src={sound} alt='sound adjuster' />
        </div>
        <div className='taskbar__tray--time'>
          <p>{`${formatedHours ? formatedHours : 12}:${
            minutes < 10 ? '0' + minutes : minutes
          }:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`}</p>
        </div>
      </div>
      {menuOpen && (
        <StartMenu
          menuOpen={menuOpen}
          closeMenu={closeMenu}
          setisMenuOpen={setMenuOpen}
          handleMenuClick={handleMenuClick}
          handleAboutOpen={handleAboutOpen}
        />
      )}
    </nav>
  );
};

export default Taskbar;
