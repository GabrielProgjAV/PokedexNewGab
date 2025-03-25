import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/queries';
import { Link } from "react-router-dom";

const Listado = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [query, setQuery] = useState('');
  const [tipoSeleccionado, setTipoSeleccionado] = useState('');

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

  // Filtrar Pokémon según el nombre
  const pokemonesFiltrados = data.pokemon_v2_pokemon.slice(0, 400).filter((pokemon: any) => 
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  // Filtrar por tipo de Pokémon
  const pokemonesPorTipo = pokemonesFiltrados.filter((pokemon: any) => {
    if (!tipoSeleccionado) return true;
    return pokemon.pokemon_v2_pokemontypes.some((t: any) => t.pokemon_v2_type.name === tipoSeleccionado);
  });

  return (
    <>
      <header className="text-center my-4">
        <h1 className="fw-bold text-danger">Pokédex Proyecto</h1>

        <div className="d-flex flex-column align-items-center">
          <input
            value={query}
            placeholder="¿Qué Pokémon buscas?"
            onChange={(event) => setQuery(event.target.value.trim())}
            type="text"
            className="form-control w-50 text-center mb-2"
          />

          <select
            value={tipoSeleccionado}
            onChange={(e) => setTipoSeleccionado(e.target.value)}
            className="form-select w-50 text-center"
          >
            <option value="">Todos</option>
            <option value="fire">Fuego</option>
            <option value="water">Agua</option>
            <option value="grass">Planta</option>
            <option value="electric">Eléctrico</option>
            <option value="normal">Normal</option>
            <option value="fighting">Lucha</option>
            <option value="flying">Volador</option>
            <option value="poison">Veneno</option>
            <option value="ground">Tierra</option>
            <option value="rock">Roca</option>
            <option value="bug">Bicho</option>
            <option value="ghost">Fantasma</option>
            <option value="steel">Acero</option>
            <option value="ice">Hielo</option>
            <option value="psychic">Psíquico</option>
            <option value="dragon">Dragón</option>
            <option value="dark">Siniestro</option>
            <option value="fairy">Hada</option>
          </select>
        </div>
      </header>

      <div className="text-center mb-3">
        <Link to="/" className="btn btn-warning">Volver a Inicio</Link>
      </div>

      <div className="cards-container p-3">
        <div className="row row-cols-md-3 row-cols-1 g-4">
          {pokemonesPorTipo.map((pokemon: any) => (
            <Card className="mx-auto border-0 shadow-lg p-3 rounded" style={{ width: '18rem', backgroundColor: "#ecf0f1" }} key={pokemon.id}>
              <Card.Header className="fw-bold text-center bg-dark text-white">
                {pokemon.pokemon_v2_pokemontypes.map((t: any) => t.pokemon_v2_type.name).join(", ")}
              </Card.Header>

              <Card.Img
                width="80"
                height="100"
                variant="top"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                className="d-block mx-auto w-75 p-2"
                alt={pokemon.name}
              />

              <Card.Body>
                <Card.Title className="text-center">
                  <Link to={`/pokemon/${pokemon.id}`} className="text-decoration-none">
                    {pokemon.id}-{pokemon.name}
                  </Link>
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><b> HP :</b> {pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "hp")?.base_stat || "N/A"}</ListGroup.Item>
                  <ListGroup.Item><b> Ataque :</b> {pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "attack")?.base_stat || "N/A"}</ListGroup.Item>
                  <ListGroup.Item><b> Defensa:</b> {pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "defense")?.base_stat || "N/A"}</ListGroup.Item>
                  <ListGroup.Item><b> E.Ataque :</b> {pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "special-attack")?.base_stat || "N/A"}</ListGroup.Item>
                  <ListGroup.Item><b> E.Defensa :</b> {pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "special-defense")?.base_stat || "N/A"}</ListGroup.Item>
                  <ListGroup.Item><b> Velocidad :</b> {pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "speed")?.base_stat || "N/A"}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listado;
