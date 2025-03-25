import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import { Pokemon } from "../models/pokemon.m";

export async function getPokemons(limit: number = 300): Promise<Pokemon[]> {
  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { limit },
  });

  if (loading) {
    console.log("Cargando datos...");
    return [];
  }

  if (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }

  // Procesamos los datos obtenidos de GraphQL
  const pokemons = data.pokemon_v2_pokemon.map((pokemon: any) => {
    const spriteData = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0]?.sprites || "{}");

    return {
      name: pokemon.name,
      id: pokemon.id,
      imggif: spriteData.versions?.["generation-v"]?.["black-white"]?.animated?.front_default || "",
      imgnormal: spriteData.front_default || "",
      imglarge: spriteData.other?.["official-artwork"]?.front_default || "",
      total: pokemon.pokemon_v2_pokemonstats.reduce(
        (acc: number, stat: any) => acc + stat.base_stat, 0
      ),
      hp: pokemon.pokemon_v2_pokemonstats[0]?.base_stat || 0,
      attack: pokemon.pokemon_v2_pokemonstats[1]?.base_stat || 0,
      defense: pokemon.pokemon_v2_pokemonstats[2]?.base_stat || 0,
      sp_atk: pokemon.pokemon_v2_pokemonstats[3]?.base_stat || 0,
      sp_def: pokemon.pokemon_v2_pokemonstats[4]?.base_stat || 0,
      speed: pokemon.pokemon_v2_pokemonstats[5]?.base_stat || 0,
      type: pokemon.pokemon_v2_pokemontypes[0]?.pokemon_v2_type.name || "unknown",
    };
  });

  return pokemons;
}

/* Mantenemos la función de corrección de nombres */
export function CorregirNombre(name: string): string {
  if (name.includes("arfetch'd")) {
    return name.replace("arfetch'd", "arfetchd");
  } else if (name.includes("mr.-mime")) {
    return name.replace("mr.-mime", "mr-mime");
  } else {
    return name;
  }
}
