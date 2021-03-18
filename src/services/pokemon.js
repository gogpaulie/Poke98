import axios from 'axios';

export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export const getSinglePokemon = async (pokemonId) => {
  try {
    const [{ data }, { data: species }] = await Promise.all([
      axios(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`),
      axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`),
    ]);

    const flavorTextEntry = species.flavor_text_entries.findIndex((i) => {
      return i.language.name === 'en' && i.version.name === 'y';
    });
    data.flavor_text = species.flavor_text_entries[flavorTextEntry].flavor_text;

    return data;
  } catch (e) {
    throw e;
  }
};
