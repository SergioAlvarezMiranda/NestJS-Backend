import { PokeApiAdapter, PokeApiFetchAdapter, type HttpAdapter } from "../api/pokeApi.adapter";
import type { PokeapiResponse } from "../interfaces/pokeapi-response.interface";


export class Pokemon {

    //Getter imageUrl (independiente de async)
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
    /*
        La inyeccion de dependencias es una clase 
        añadirle una dependencia, esa dependencia tendra un tipos 
        de dato, pude ser una clase abstracta, interface, etc..
    */
    //Constructor (inyección) -> crea el objeto
    constructor(
        public readonly id: number,  // aqui se esta inyectado el id
        public name: string, // se esta inyecta el name
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter // se pone como dependencia HttpAdapter
    ) {}

    //Metodo
    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }
    //Metodo
    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }
    //Metodo asincrono
    async getMoves() { // Esto es equivalente a getMoves(): Promise<Move[]>
        // const moves = 10; // una dependencia oculta de axios
        //const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');

        //Petición HTTP con la dependencia
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        //get -> método definido en HttpAdapter
        /*
            this.http No SABE si es fetch o axios
                typeScript solo verifica 
                    Si es que tiene metodo get que devuelve Promise<T>
        */
        console.log( data.moves);
        
        return data.moves;
    }

    /*
        getMoves()
            ↓
        llama http.get()
            ↓
        espera respuesta (await)
            ↓
        continúa
    */

}

//Creación de instancias (Inyección REAL)
const pokeApiFetch = new PokeApiFetchAdapter();
const pokeApiAxio = new PokeApiAdapter();

// Crear una instacia del objeto
// Se crean las dependencias concretas
export const charmander = new Pokemon( 4,'Charmander', pokeApiFetch );
// Crear una instacia 
// Se crean las dependencias concretas.
export const charmander2 = new Pokemon( 4,'Charmander', pokeApiAxio );

// charmander.id = 10;
// charmander.name = 'Mew';
// console.log(charmander.imageUrl);

// charmander.scream();
// charmander.speak();

// console.log( charmander.getMoves() );
//Uso del objeto
charmander.getMoves();
charmander2.getMoves();