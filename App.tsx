import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/docs/Home"; 
import Listado from "./pages/Listado"; 
import DetallePokemon from "./pages/DetallePokemon";



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Listado />} />
          <Route path="/pokemon/:id" element={<DetallePokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
