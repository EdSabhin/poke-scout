import React from "react";

const SearchBar = ({ setPokemonName, inputSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Look for a Pokemon"
        className="input input-bordered input-accent w-full max-w-xs"
        onChange={(e) => setPokemonName(e.target.value)}
        ref={inputSearch}
      />
    </div>
  );
};

export default SearchBar;
