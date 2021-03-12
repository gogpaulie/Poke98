import React from 'react';
import pokeball from '../../assets/pokeball.png';

const Task = ({
  taskName,
  isPokedexMinimized,
  togglePokedexMinimize,
  image,
}) => {
  return (
    <div className='task'>
      <button
        className={`task__btn ${!isPokedexMinimized && 'active'}`}
        onClick={togglePokedexMinimize}
      >
        <div className='task__btn--content'>
          {image && <img src={pokeball} alt='task icon' />}

          <p>{taskName}</p>
        </div>
      </button>
    </div>
  );
};

export default Task;
