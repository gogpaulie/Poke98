import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../services/pokemon';
import WindowBorder from '../layout/WindowBorder';
import PokemonIcon from './PokemonIcon';
import Searchbar from './Searchbar';
import Spinner from './Spinner';

const Pokedex = ({
  handlePokedexClose,
  isPokedexMinimized,
  togglePokedexMinimize,
  togglePokedexMaximize,
  isMaximized,
}) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredPokemon = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchField.toLocaleLowerCase());
  });

  return (
    <WindowBorder
      handlePokedexClose={handlePokedexClose}
      isPokedexMinimized={isPokedexMinimized}
      togglePokedexMinimize={togglePokedexMinimize}
      togglePokedexMaximize={togglePokedexMaximize}
      isMaximized={isMaximized}
    >
      <div
        className={`pokedex ${isPokedexMinimized && 'minimized'} ${
          isMaximized && 'maximized'
        }`}
      >
        <Searchbar
          onSearchChange={onSearchChange}
          handlePokedexClose={handlePokedexClose}
        />
        {loading && <Spinner />}

        {filteredPokemon.map((pokemon, i) => (
          <PokemonIcon key={i} pokemon={pokemon} />
        ))}
      </div>
    </WindowBorder>
  );
};

export default Pokedex;
