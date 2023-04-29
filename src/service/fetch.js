export const fetchPokemon = async (name) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await data.json();
  return pokemon;
};
