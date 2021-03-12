import React from 'react';

const About = ({ handleAboutClose }) => {
  return (
    <div className='about'>
      <div className='about__topbar'>
        <p>About</p>
        <button className='about__topbar--close' onClick={handleAboutClose}>
          <i className='fas fa-times'></i>
        </button>
      </div>
      <div className='about__info'>
        <h1>Poke98</h1>
        <p>An open source Windows 98 style Pokedex.</p>
        <p>
          Built with React, Sass, and the{' '}
          <a href='https://pokeapi.co/'>PokeAPI</a>
        </p>
        {/* <p>Startup sound downloaded here.</p> */}
      </div>
    </div>
  );
};

export default About;
