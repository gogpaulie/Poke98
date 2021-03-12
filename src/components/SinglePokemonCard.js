import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardTopBar from './CardTopBar';
import pokemonTypes from '../helpers/pokemonTypes';
import { getSinglePokemon } from '../services/pokemon';
import loadingGif from '../assets/loading.gif';

const SinglePokemonCard = ({ pokemon, handleCardClose }) => {
  const { id } = pokemon;
  const [singlePokemon, setSinglePokemon] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setloading(true);
      const data = await getSinglePokemon(id);
      setSinglePokemon(data);
      setloading(false);
    }
    fetchData();
  }, []);

  return (
    <div className='pokecard'>
      <CardTopBar pokemon={pokemon} handleCardClose={handleCardClose} />
      {loading ? (
        <img src={loadingGif} alt='loading' className='pokecard__loading' />
      ) : (
        <div>
          <div className='pokecard__file-btns'>
            <button disabled>File</button>
            <button disabled>Edit</button>
            <button
              className='pokecard__file-btns--exit'
              onClick={handleCardClose}
            >
              Exit
            </button>
          </div>

          <Tabs className='pokecard__tabs'>
            <TabList>
              <Tab>Basic Info</Tab>
              <Tab>Stats</Tab>
              <Tab>Abilities</Tab>
            </TabList>

            <TabPanel className='pokecard__basic-info'>
              <div className='pokecard__basic-info--image'>
                <img
                  src={pokemon.sprites.front_default}
                  alt={`${pokemon.name}`}
                />
              </div>
              <div className='pokecard__basic-info--info'>
                {console.log(singlePokemon)}
                <h2 className='pokecard__basic-info--info--title'>{`${pokemon.name} #${pokemon.id}`}</h2>
                <div className='pokecard__basic-info--info--types'>
                  {pokemon.types.map((type, i) => (
                    <p
                      key={i}
                      style={{ backgroundColor: pokemonTypes[type.type.name] }}
                    >
                      {type.type.name}
                    </p>
                  ))}
                </div>
                <div className='pokecard__basic-info--info--size'>
                  <p>
                    <strong>Height:</strong>
                    {` ${pokemon.height / 10}m`}
                  </p>
                  <p>
                    <strong>Weight:</strong>
                    {` ${pokemon.weight / 10}kg`}
                  </p>
                </div>
                <div className='pokecard__basic-info--info--flavor'>
                  <p>{singlePokemon.flavor_text}</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel className='pokecard__stats'>
              <div className='pokecard__stats--container'>
                <table className='pokecard__stats--table'>
                  <thead className='pokecard__stats--table__head'>
                    <tr className='pokecard__stats--table__head--row'>
                      <th className='pokecard__stats--table__header'>Name</th>
                      <th className='pokecard__stats--table__header'>Base</th>
                    </tr>
                  </thead>
                  <tbody className='pokecard__stats--table__body'>
                    {pokemon.stats.map((stat) => (
                      <tr className='pokecard__stats--table__body--row'>
                        <td className='pokecard__stats--table__body--cell'>
                          {stat.stat.name}
                        </td>
                        <td className='pokecard__stats--table__body--cell'>
                          {stat.base_stat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel className='pokecard__stats'>
              <div className='pokecard__stats--container'>
                <table className='pokecard__stats--table'>
                  <thead className='pokecard__stats--table__head'>
                    <tr className='pokecard__stats--table__head--row'>
                      <th className='pokecard__stats--table__header'>Name</th>
                      <th className='pokecard__stats--table__header'>Slot</th>
                      <th className='pokecard__stats--table__header'>Hidden</th>
                    </tr>
                  </thead>
                  <tbody className='pokecard__stats--table__body'>
                    {pokemon.abilities.map((a) => (
                      <tr className='pokecard__stats--table__body--row'>
                        <td className='pokecard__stats--table__body--cell'>
                          {a.ability.name}
                        </td>
                        <td className='pokecard__stats--table__body--cell'>
                          {a.slot}
                        </td>
                        <td className='pokecard__stats--table__body--cell'>
                          {a.is_hidden ? 'Yes' : 'No'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default SinglePokemonCard;
