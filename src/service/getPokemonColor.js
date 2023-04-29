export const getPokemonColor = (type) => {
  if (type === "normal") {
    return "text-zinc-400";
  } else if (type === "fire") {
    return "text-orange-600";
  } else if (type === "fighting") {
    return "text-red-600";
  } else if (type === "water") {
    return "text-blue-400";
  } else if (type === "flying") {
    return "text-violet-400";
  } else if (type === "grass") {
    return "text-green-400";
  } else if (type === "poison") {
    return "text-fuchsia-800";
  } else if (type === "electric") {
    return "text-amber-400";
  } else if (type === "ground") {
    return "text-[#dfc068]";
  } else if (type === "psychic") {
    return "text-[#ff5599]";
  } else if (type === "rock") {
    return "text-[#b8a038]";
  } else if (type === "ice") {
    return "text-cyan-300";
  } else if (type === "bug") {
    return "text-[#a7b821]";
  } else if (type === "dragon") {
    return "text-violet-800";
  } else if (type === "ghost") {
    return "text-indigo-900";
  } else if (type === "dark") {
    return "text-[#775544]";
  } else if (type === "steel") {
    return "text-slate-400";
  } else if (type === "fairy") {
    return "text-rose-300";
  }
};
