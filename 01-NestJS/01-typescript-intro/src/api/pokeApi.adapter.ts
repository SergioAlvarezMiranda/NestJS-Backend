import axios from "axios";


/*
    Este HttpAdapter
    hace que cualquier clase que lo implemente 
    Debe contener una metodo get
    Debe devolver un promise<T>
*/
export interface HttpAdapter { 
    get<T>(url:string): Promise<T>;
}

// la clase se debe de implementar a la interface HttpAdapter
//Esto se desarrollo con fetch
export class PokeApiFetchAdapter implements HttpAdapter {
    // la implementacion obliga a a el get debe contener ese metodo
    async get<T>(url:string): Promise<T>{
        const resp = await fetch(url);
        const data:T = await resp.json();
        return data; // El retorno es con un json
    }
}

// la clase se debe de implementar a la interface HttpAdapter
//Esto se desarrollo con axios
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>(url: string): Promise<T>{
        const { data } = await this.axios.get<T>(url);
        return data; // el retorno es por get axios
    }

    // insertar
    async post(url:string, data: any){

    }

    // 
    async patch(url:string, data:any){

    }

    //eliminar
    async delete(url:string){

    }
}