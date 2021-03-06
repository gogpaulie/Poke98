import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import ProgramsMenu from './ProgramsMenu';

const StartMenu = ({ closeMenu, handleMenuClick, handleAboutOpen }) => {
  const [programsOpen, setProgramsOpen] = useState(false);

  const openAboutCloseMenu = () => {
    handleAboutOpen();
    closeMenu();
  };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div className='startmenu'>
        <div className='startmenu__side'>
          <p>Poke98</p>
        </div>
        <button
          className='startmenu__btn'
          onMouseEnter={() => setProgramsOpen(true)}
        >
          <p>Programs</p>
          <i className='fas fa-sort-up'></i>
        </button>
        <button className='startmenu__btn' onClick={openAboutCloseMenu}>
          About
        </button>

        <a
          className='startmenu__btn'
          href='https://github.com/gogpaulie/Poke98'
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit Repo
        </a>

        {programsOpen && (
          <ProgramsMenu
            handleMenuClick={handleMenuClick}
            closeMenu={closeMenu}
          />
        )}
      </div>
    </ClickAwayListener>
  );
};

export default StartMenu;
