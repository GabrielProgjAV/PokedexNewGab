# 📌 Pokédex Project

This is a **Pokédex** project built with **React, TypeScript and GraphQL**, using the **PokéAPI** to fetch information about Pokémon.

## Technologies Used
- **React** (Vite)
- **TypeScript**
- **GraphQL** (Apollo Client)
- **Bootstrap** (for styling)
- **React Router** (for navigation)

---

## Installation and Setup

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the repository
```sh
git clone https://github.com/tu-usuario/pokedex-proyecto.git
cd pokedex-proyecto
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the development server
```sh
npm run dev
```

Then open your browser and go to:

http://localhost:5173

## Using the Application

**Home page**

Shows a welcome screen with a button to explore the Pokédex.

**Pokémon list**

- Search Pokémon by name.
- Filter by Pokémon type.
- View stats such as HP, Attack, Defense, Speed.

**Pokémon details**

Clicking on a Pokémon shows its full information.

## Justification for using `any` in TypeScript

In some cases, `any` was used because of:

- The complex data structure returned by the GraphQL API, where types can vary and aren't always well defined in the documentation.
- Compatibility with the PokéAPI, since some responses don't have a fixed type.
- Handling of dynamic data, especially when mapping information such as stats and types.

Example where `any` was necessary:

```ts
pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "hp")?.base_stat || "N/A"
```

In this case, `any` is used temporarily because the API returns a nested structure that can change.

**Future improvement:**

It's recommended to define specific TypeScript interfaces for the PokéAPI data and progressively remove `any`.

---

### What does this `README.md` include?
- ✅ Installation and setup instructions
- ✅ Explanation of features
- ✅ Justification for the use of `any` in TypeScript
- ✅ Author information
