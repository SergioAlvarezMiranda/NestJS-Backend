import axios from "axios";// Importa la librería axios, que se usa para hacer peticiones HTTP (GET, POST, etc.) a APIs.
import type {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  // public id: number;
  // public name:string;

  // constructor(id:number,name:string){
  //     this.id = id;
  //     this.name = name;
  //     console.log('constructo llamddo');
  // }

  //Atributos de instancia
  public id: number; //Declara una propiedad pública llamada id de tipo number.
  public name: string; // Declara una propiedad pública llamada name de tipo string.
  // public static hora:string; // Atributo estático

  // Metodo crear un objeto con new
  constructor(id: number, name: string) {
    this.id = id; //propiedad del objeto
    this.name = name; //propiedad del objeto
  }

  scream() { // metodo no indica nada si es publica o privada por defecto es publica
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() { // metodo
    console.log(`${this.name}, ${this.name}`);
  }

  
  //Metodo promesa asincrona
  // async → permite usar await
  // Retorna una Promesa de un arreglo de Move Promise<Move[]>
  async getMoves(): Promise<Move[]> {
    // destructurar la data {}

    // se va a usar desestructuración
    //const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4');

    // destructurar la data {}
    // una petición sin desestructurar.
    //const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');

    // Usando desestructuración.
    //console.log(data.moves);


    // Acceder a los movimientos.
    // Petición
    // awit solo se puede usar si esta dentro de una funcion async
    //axios permite hacer las peticiones 
    // { data } cons esto se desestructuracion la data para tomar la data
    // Documentacion para la desestructuracion
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring 
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4",
    );

    //  await espera la respuesta, ayuda a traer la data
    // <PokeapiResponse> tipa la respuesta
    // Se extrae solo data de la respuesta

    // Fin de la llamada a axios.get.
    console.log(data.moves);

    return data.moves; // Retorna los movimientos → cumple con Promise<Move[]>.
  }
    //Getter
  get imageUrl(): string {
    return `http://pokemon.com/${this.id}.jpg`;
  }
}

// Crear una instacia 
export const charmander = new Pokemon(4, "Charmander");
// Crea un objeto charmander usando la clase Pokemon.

console.log(charmander.imageUrl);
charmander.scream()
charmander.speak()

console.log(charmander.getMoves());


// charmander.getMoves().then(moves => {
//   console.log(moves);
// });



// class → define un modelo
// constructor → inicializa el objeto
// async/await → manejar promesas
// getter → se usa como propiedad
// axios → consumir APIs
// import type → solo tipos, no JS


