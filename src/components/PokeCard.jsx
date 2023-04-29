import { getPokemonColor } from "@/service/getPokemonColor";
import Image from "next/image";

const PokeCard = ({ pokemonData }) => {
  console.log(pokemonData);
  const pokemonImage =
    pokemonData.sprites.other["official-artwork"].front_default;

  console.log(getPokemonColor(pokemonData.types[0].type.name), "COLOR");
  console.log(pokemonData.types, "TYPES");

  return (
    <div className="w-full lg:h-[20rem] flex justify-center items-center card lg:card-side bg-zinc-100">
      <div className="w-[52%] bg-red-500 rounded-l-2xl">
        <Image
          width={250}
          height={250}
          src={pokemonImage}
          alt="Album"
          className="pl-6"
        />
      </div>
      <div className="w-[46%] flex flex-col justify-start card-body ">
        <h2 className={`flex justify-center bg-black card-title capitalize `}>
          {pokemonData.name}
        </h2>
        <div className="w-full flex">
          <h4 className="capitalize pr-1 text-zinc-900">
            {pokemonData.types.length <= 1 ? "Type: " : "Types: "}
          </h4>
          <h4
            className={`capitalize ${getPokemonColor(
              pokemonData.types[0].type.name
            )}`}
          >
            {pokemonData.types[0].type.name}
          </h4>
          {pokemonData?.types[1]?.type?.name !== undefined && (
            <div className="flex gap-1">
              <span>{", "}</span>
              <h4
                className={`capitalize ${getPokemonColor(
                  pokemonData.types[1].type.name
                )} `}
              >
                {pokemonData?.types[1]?.type?.name}
              </h4>
            </div>
          )}
        </div>
        <h4 className="capitalize text-zinc-900">
          Ability: {pokemonData.abilities[0].ability.name}
        </h4>
      </div>
    </div>
  );
};

export default PokeCard;
