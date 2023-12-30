const EleventyFetch = require('@11ty/eleventy-fetch');

async function getPokemons() {
  const limit = 10;
  const page = 0;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page}`;

  const response = await EleventyFetch(url, {
    duration: '1d',
    type: 'json',
  });

  const pokemons = response.results;

  return pokemons;
}

module.exports = getPokemons;
