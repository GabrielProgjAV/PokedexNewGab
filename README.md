# 📌 Pokédex Proyecto

Este es un proyecto de **Pokédex** desarrollado con **React, TypeScript y GraphQL**, utilizando la **PokéAPI** para obtener información sobre los Pokémon.

## Tecnologías Utilizadas
- **React** (Vite)
- **TypeScript**
- **GraphQL** (Apollo Client)
- **Bootstrap** (para estilos)
- **React Router** (para navegación)

---

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1️⃣ **Clonar el repositorio**
```sh
git clone https://github.com/tu-usuario/pokedex-proyecto.git
cd pokedex-proyecto
 Instalar dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:

sh
Copy
Edit
3️⃣ Ejecutar el servidor de desarrollo
Inicia la aplicación en modo desarrollo con:

npm run dev

Luego, abre el navegador y accede a:

http://localhost:5173

 Uso de la Aplicación
Página Principal

Muestra una bienvenida con un botón para explorar la Pokédex.

Listado de Pokémon

Permite buscar Pokémon por nombre.

Filtrar por tipo de Pokémon.

Ver estadísticas como HP, Ataque, Defensa, Velocidad.

Detalles de Pokémon

Al hacer clic en un Pokémon, se muestra su información completa.

 Justificación del uso de any en TypeScript
En algunos casos, se ha utilizado any debido a:

Estructura de datos compleja de la API de GraphQL, donde los tipos pueden variar y no siempre están bien definidos en la documentación.

Compatibilidad con la PokéAPI, ya que algunas respuestas no tienen un tipo fijo.

Manejo de datos dinámicos, especialmente al mapear información como estadísticas y tipos.

 Ejemplo donde any fue necesario:

pokemon.pokemon_v2_pokemonstats.find((s: any) => s.pokemon_v2_stat.name === "hp")?.base_stat || "N/A"
En este caso, any se usa temporalmente porque la API devuelve una estructura anidada que puede cambiar.

 Solución futura:

Se recomienda definir interfaces TypeScript específicas para los datos de la PokéAPI y eliminar any progresivamente.



---

###  **¿Qué incluye este `README.md`?**
 **Instrucciones de instalación y ejecución**  
 **Explicación de funcionalidades**  
 *Justificación del uso de `any` en TypeScript**  
**Cómo desplegar en producción**  
 **Información del autor**  

