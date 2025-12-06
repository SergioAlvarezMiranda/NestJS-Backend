import { PokeApiAdapter, PokeApiFetchAdapter, type HttpAdapter } from "../api/pokeApi.adapter";
import type { PokeapiResponse } from "../interfaces/pokeapi-response.interface";


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter // se pone como dependencia HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves() {
        // const moves = 10;
        //const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves);
        
        return data.moves;
    }

}
const pokeApiAxio = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon( 4,'Charmander', pokeApiFetch );
export const charmander2 = new Pokemon( 4,'Charmander', pokeApiAxio );

// charmander.id = 10;
// charmander.name = 'Mew';
// console.log(charmander.imageUrl);

// charmander.scream();
// charmander.speak();

// console.log( charmander.getMoves() );
charmander.getMoves();