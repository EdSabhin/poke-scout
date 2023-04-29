import getPokemonColor from "../service/getPokemonColor";
import Image from "next/image";

const PokeCard = ({ pokemonData }) => {
  console.log(pokemonData);
  const pokemonImage =
    pokemonData.sprites.other["official-artwork"].front_default;

  console.log(getPokemonColor(pokemonData.types[0].type.gitname), "COLOR");
  console.log(pokemonData.types, "TYPES");

  return (
    <div className="w-full lg:h-[23rem] flex justify-center items-center card lg:card-side bg-zinc-100">
      <div className="w-[52%] bg-red-500 rounded-l-2xl">
        <Image
          width={250}
          height={250}
          src={pokemonImage}
          alt="Album"
          className="pl-6"
        />
      </div>
      <div
        className={`w-[46%] flex flex-col justify-start card-body 
        `}
      >
        <h2
          className={`flex justify-center card-title capitalize rounded-xl ${getPokemonColor(
            pokemonData.types[0].type.name
          )} `}
        >
          {pokemonData.name}
        </h2>
        <div className="w-full flex gap-1">
          <h4 className="capitalize font-bold pr-1 text-zinc-800">
            {pokemonData.types.length <= 1 ? "Type: " : "Types: "}
          </h4>
          <div className="flex gap-1">
            {pokemonData.types.map((type, index) => {
              const isLastElement = index === pokemonData.types.length - 1;
              return (
                <h4
                  key={index}
                  className={`flex gap-1 capitalize ${getPokemonColor(
                    type.type.name
                  )}`}
                >
                  {type.type.name}
                  {!isLastElement && ","}
                </h4>
              );
            })}
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          <h4 className="capitalize font-bold text-zinc-800">Abilities:</h4>
          <div className="flex gap-1">
            {pokemonData.abilities.map((ability, index) => {
              const isLastElement = index === pokemonData.abilities.length - 1;
              return (
                <h4 key={index} className="capitalize">
                  {ability.ability.name}
                  {!isLastElement && ","}
                </h4>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="capitalize font-bold text-zinc-800">Stats</h4>
            <div className="flex flex-col gap-2">
              {pokemonData.stats.map((stats, index) => {
                return (
                  <h4 key={index} className="capitalize">
                    {stats.stat.name}: {stats.base_stat}
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
