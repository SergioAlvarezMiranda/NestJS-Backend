


// export let numeros: number[] = [1,2,3,4,5];

// for(let i=0; i<numeros.length; i++){
//     console.log('Numero:', numeros[i]);
// }


// export let frutas:string[] = ["Manzana","Banana"];

// frutas.push("Naranja");
// frutas.pop();


// let frutasEnMayus = frutas.map(f => f.toUpperCase());

// console.log(frutasEnMayus);



// type Persona = {
//     nombre:string;
//     edad: number;
// };


// let persona: Persona[] = [
//     {nombre: 'Ana', edad:25},
//     {nombre: 'Luis', edad:30}
// ];

// persona.push({nombre:'Maria', edad:28});

// export let mayores = persona.filter(p => p.edad >26);

// console.log(mayores);


// export const matriz: number[][] = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(matriz[1][2]);



// export let matriz: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     console.log(`Elemento [${i}][${j}] =`, matriz[i][j]);
//   }
// }



// export let matrizA: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// export let matrizB: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

//  console.log("==== Matriz A ====")
// for (let i = 0; i < matrizA.length; i++) {
//   let filaA = "";
//   for (let j = 0; j < matrizA[i].length; j++) {
//     filaA = filaA+`[${matrizA[i][j]}]`;
//   }
//   console.log(filaA);
// }


// console.log("==== Matriz B ====")
// for (let k = 0; k < matrizB.length; k++) {
//     let  filaB= ""
//     for (let l = 0; l < matrizB[k].length; l++) {
//         filaB = filaB + `[${matrizB[k][l]}]`;
//     }
//     console.log(filaB);
// }



// let resultado: number[][]= [];

// for (let n = 0; n < matrizA.length; n++) {
//     resultado[n] = [];   
//     for (let m = 0; m <  matrizB[0].length; m++) {
//         resultado[n][m] = 0; 
//       for (let k = 0; k < matrizB.length; k++) {
//         resultado[n][m] += matrizA[n][k] * matrizB[k][m];
//       }
//     }   
// }


// console.log("==== Resultado A x B ====");
// for (let i = 0; i < resultado.length; i++) {
//     let fila = "";
//     for (let j = 0; j < resultado[i].length; j++) {
//         fila += `[${resultado[i][j]}]`;
//     }
//     console.log(fila);
// }

// export function getRandomInt(min:number, max:number) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }



// for (let i = 0; i < 10; i++) {
//     console.log(getRandomInt(0,100));
// }



//   nota = parseFloat(prompt(`Escribe un número entre ${min} y ${max}:`) || "0");


// Magusculas: toUpperCase(); Minusculas  toLowerCase();

// export let letra = prompt(`Ingrese una palabra`) || '';

// console.log(letra.length);

// export const letra = prompt(`Ingrese una palabra`) || '';


// console.log(letra.toUpperCase());
// console.log(letra.toLowerCase());

// console.log(letra.length);

// for (let i = 0; i < letra.length ; i++) {
//     console.log( letra[i] );
    
// }

