import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAILS } from "../graphql/queries";
import "bootstrap/dist/css/bootstrap.min.css";

const DetallePokemon = () => {
  const { id } = useParams(); 
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { id: parseInt(id!) },
  });

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }
  
  if (error) {
    console.error("Error en la API:", error);
    return <p className="text-danger">Ocurrió un error al obtener los datos. Inténtalo de nuevo más tarde.</p>;
  }
  

  const pokemon = data.pokemon_v2_pokemon[0];

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">{pokemon.name.toUpperCase()}</h1>
      <img
        src={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default}
        alt={pokemon.name}
        className="img-fluid"
        width="200"
      />
       <p><b>Estadísticas </b></p>
      <p><b>Tipo:</b> {pokemon.pokemon_v2_pokemontypes.map((t: any) => t.pokemon_v2_type.name).join(", ")}</p>
      <p><b>Peso:</b> {pokemon.weight / 10} kg</p>
      <p><b>Altura:</b> {pokemon.height / 10} m</p>
      <p><b>Habilidades:</b> {pokemon.pokemon_v2_pokemonabilities.map((a: any) => a.pokemon_v2_ability.name).join(", ")}</p>
       
      <a href="/pokemons" className="btn btn-primary mt-3">Volver a la Pokédex</a>
    </div>
  );
};

export default DetallePokemon;
