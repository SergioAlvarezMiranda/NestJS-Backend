export const pokemonIds = [1,20,30,34,66]



interface Pokemon {
    id:number;
    name: string;
    age?:number;
}

export const bulbasaur:Pokemon = {
    id:1,
    name: 'Bulbasaur', 
    age: 1
}

export const charmander:Pokemon = {
    id:1,
    name: 'Charmander',
    age: 2
}


console.log(bulbasaur);