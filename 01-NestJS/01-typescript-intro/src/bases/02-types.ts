// Exportación de un arreglo de números
export const pokemonIds = [1, 20, 30, 34, 66];

//Interface
interface Pokemon {
  id: number; //obligatorio
  name: string; //obligatorio
  age?: number; // opcional (por el ?)
}

//Objeto
export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  age: 1,
};

//Objeto
export const charmander: Pokemon = {
  id: 1,
  name: "Charmander",
  age: 2,
};


export const afcc: Pokemon = {
    id: 0,
    name: ""
};

// Arreglo tipado de Pokémon
export const pokemons:Pokemon[] = []; // Arreglo que solo puede contener objetos tipo Pokemon

// Agregando elementos al arreglo
pokemons.push(charmander,bulbasaur,afcc)

console.log(pokemons);
console.log('===============');
console.log(bulbasaur);
