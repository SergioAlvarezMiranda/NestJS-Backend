import axios from "axios";
import type { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    // public id: number;
    // public name:string;

    // constructor(id:number,name:string){
    //     this.id = id;
    //     this.name = name;
    //     console.log('constructo llamddo');
    // }

    public id: number;
    public name:string;

    constructor( id: number, name: string) {
        this.id = id;
        this.name = name;
    } 

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    //promesa asincrona 
    async getMoves(): Promise<Move[]> {
        //destructurar la data {}
       //const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
       //destructurar la data {}
       //const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
       //console.log(data.moves);
       const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

       console.log(data.moves);

       return data.moves;
    }

    get imageUrl():string {
        return `http://pokemon.com/${this.id}.jpg`
    }
}

export const charmander = new Pokemon(4, 'Charmander');

// console.log(charmander.imageUrl);
// charmander.scream()
// charmander.speak()

console.log(charmander.getMoves());