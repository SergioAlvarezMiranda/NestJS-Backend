
// var mensaje:string = "Hola mundo";
// console.log(mensaje);


// var a: number = 10;

// function printNumber(num:number){
//     console.log(num);
// }

// printNumber(a);

//Interface

// interface IPerson {
//     firstName:string;
//     lastName:string;
//     getFullName(): string;
// }

// let obj: IPerson = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     getFullName():string {
//         return this.firstName+ " " + this.lastName;
//     }
// };

// console.log(obj.getFullName());

// class Greeter {
//     nombre: string;
//     segunNombre: string;

//     constructor(nombre: string, segunNombre: string){
//         this.nombre = nombre;
//         this.segunNombre = segunNombre;
//     }

//     greet(){
//         return "Hello, " + this.nombre +" "+ this.segunNombre;
//     }
// }

// let greeter = new Greeter("sergio", "luis");
// console.log(greeter.greet());


// class Persona {
//     name: string;
//     sueldo: number;
//     constructor(name: string, sueldo: number) {
//         this.name = name;
//         this.sueldo = sueldo;
//     }
//     display() {
//         console.log("Nombre " + this.name);
//         console.log("Sueldo " + this.sueldo);
//     }
// }

// let per = new Persona("sergio", 1237);
// console.log(per.display());





// function operacion(op:string, a:number, b:number) {
//     if(op ==='+'){
//         return a+b;
//     }else if(op === '-'){
//         return a-b;
//     }else if(op === '*'){
//         return a*b;
//     }else if(op === '/'){
//         return a/b;
//     }else {
//         return 'Operador no valido';
//     }
// }

// function operacion(op:string, a:number, b:number) {
//     switch(op){
//         case '+':
//             return a+b;
//         case '-':
//             return a+b;
//         case '*':
//             return a*b;
//         case '/':
//             return a/b;
//         default:
//             return  'Operador no valido';
//     }
// }

// console.log('operadores ');
// console.log(operacion('+',3,4));
// console.log(operacion('-',3,4));
// console.log(operacion('*',3,4));
// console.log(operacion('/',3,4));


// export let num: number;

// do {
//   num = parseFloat(prompt("Escribe un número positivo:") || "0");

//   if (num <= 0) {
//     console.log("Debes introducir un número positivo");
//   }

// } while (num <= 0);

// console.log("Número válido: " + num);

export let nota:number;
let min:number  = 0;
let max:number = 10;



do{

  nota = parseFloat(prompt("Escribe un numero entre "+ min+ " y "+  max)||"0");

  if(!(nota >= min && nota <= max) ){
    console.log("Error, el numero debe estar entre ",min, " y ", max);
  }


}while(nota>=min && nota<=max);



if(nota>=0 && nota<= 4){
  console.log("suficiente");
}else{
  if( nota =5){
    console.log("sufiente");
  }else{
    if( nota >=6 && nota <=7){
      console.log("bien");
    }else{
      if(nota = 8){
        console.log('notable');
      }else{
        console.log("sobresaliente");
      }
    }
  }
}