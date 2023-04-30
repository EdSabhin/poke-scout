import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import PokeCard from "@/components/PokeCard";
import { fetchPokemon } from "@/service/fetch";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [pokemonData, setPokemonData] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const inputSearch = useRef(null);

  useEffect(() => {
    clearTimeout(inputSearch.current);
    inputSearch.current = setTimeout(() => {
      pokemonName.length &&
        fetchPokemon(pokemonName.toLowerCase()).then(setPokemonData);
    }, 1100);
  }, [pokemonName]);

  return (
    <main className="w-full flex flex-col justify-center items-center py-8">
      <h1 className="text-4xl text-white pb-8">Poke Dex</h1>
      <SearchBar setPokemonName={setPokemonName} inputSearch={inputSearch} />
      <section className="py-12">
        {pokemonData && <PokeCard pokemonData={pokemonData} />}
      </section>
    </main>
  );
}
