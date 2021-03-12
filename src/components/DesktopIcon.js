import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const DesktopIcon = ({ top, left, text, img, handleDoubleClick }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const handleSingleClick = () => {
    setIsHighlighted(true);
  };
  const handleClickAway = () => {
    setIsHighlighted(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        draggable='true'
        className={`icon ${isHighlighted && 'highlighted'}`}
        style={{ top: top, left: left }}
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
      >
        <img className='icon__image' src={img} alt='icon' />
        <p className='icon__text'>{text}</p>
      </div>
    </ClickAwayListener>
  );
};

export default DesktopIcon;
