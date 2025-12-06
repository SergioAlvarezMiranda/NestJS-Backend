export let name:string = 'Sergio';


export const hora:number = 12;

export const isvalid:boolean = true;

name =  'ser';

export const templateString = `

multilinea

que pude tener
" dobles
' simple
injectar valores ${name}
expresiones ${1+1}
numeros: ${hora}
booleanos: ${isvalid}

`

console.log(templateString);