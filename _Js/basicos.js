// const a = [ ]
// const b = [1, true, "hola",["A", "B", "C"]];
// console.log(a)
// console.log(b)

// console.log(b[2]);

// console.log(b[3][2]);

// const c = Array.of("X", "Y", "Z", "S", "T");
// console.log(c);

// const d = Array(50).fill(false);
// console.log(d);

// const colores = ["Rojo", "Verde", "Azul"];
// console.log (colores);
// colores.push("Rosa");
// console.log(colores)
// colores.pop();
// console.log(colores);

// colores.forEach(function(el, index){
//     console.log(`<li id="${index}"> ${el}</li>`);
// })

// const b = {}

// console.log(b)

// const margarita ={
//     firstName: "Margarita",
//     lastName: "Flores",
//     age: 27,
//     hobbis: ["Draw", "eat", "work-out"],
//     single: true,
//     contact : {
//         email: "mfloreszatarain95@gmail.com",
//         number: "6691234797"
//     },
//     saludar: function(){
//         console.log(`Hola:)`);
//     },
//     decirMiNombre: function(){
//         console.log(`Hola me llamo ${this.firstName} y tengo ${this.age} años `);
//     }
// }

// console.log(margarita.firstName);

// console.log(margarita.hobbis[2]); //solicitar un dato de un array dentro de un objeto
// console.log(margarita.contact.email); //solicitar un dato de un objeto dentro de un objeto, se solicita con . 
// margarita.saludar(); //Solicitar una función dentro de un objeto
// margarita.decirMiNombre();  //Solicitar una función dentro de un objeto

// console.log(Object.keys(margarita)); //Te imprime las propiedades (llaves), del objeto
// console.log(Object.values(margarita)); //Te imprime los valores, del objeto
// console.log(margarita.hasOwnProperty("firstName")); //te busca si tiene una propiedad parecida (evalua el si "firstName", se encuentra en el objeto)


/**OPERADORES*/
/**Aritmeticos */

// let i = 1;

// i++;
// i--;
// ++i;
// --i;
// console.log(i)

/**if-else Te permite tomar una decisión si la condición se cumple o si no cumple */

// let edad = 17

// if( edad >= 18){
//     console.log("Eres mayor de edad")
// } else{
//     console.log("Eres menor de edad")
// }

// let horas = 20;

// if (horas >=0 && horas <=5){
//     console.log("Dejame dormir")
// } else if(horas >=6 && horas<=11){
//     console.log("Buenos días")

// } else if ( horas >=11 && horas<=18){
//     console.log("Buenas tardes")
// } else{
//     console.log("Buenas noches")
// }

// console.log("Operador Ternario")

// let mayor = (edad >= 18 ) ? "Eres mayor de edad" : "Eres menor de edad"

// console.log(mayor);

// let dia = 5;

// switch (dia){

//     case 0: console.log("Domingo");
//     break;
//     case 1: console.log("Lunes");
//     break;
//     case 2: console.log("Martes");
//     break;
//     case 3: console.log("Miercoles");
//     break;
//     case 4: console.log("Jueves");
//     break;
//     case 5: console.log("Viernes");
//     break;
//     case 6: console.log("Sabado");
//     break;
//     default: console.log("El día no es correcto")
//     break;
// }

// let contador = 0;

// // while( contador <= 10 ){
// //     console.log(contador);
// //     contador++;
// // }

// // do {
// //     console.log("Do while " + contador);
// //     contador ++;
// // } while(contador <10)

// for (let contador = 0; contador < 10; contador++) {
//     console.log("for " + contador)
// }

//  let numeros = [10,20,30,40,50,60,70,80,90];

// // for (let i = 0; i < numeros.length; i ++){
// //     console.log(numeros[i])
// // }

// const margarita = {
//     nombre: "Margarita",
//     apellido: "Flores",
//     edad: 27
// }

// for (const propiedad in margarita) {
//   console.log(`key: ${propiedad}, Value:${margarita[propiedad]}`)
// }

// for (const elemento of numeros) {
//     console.log(elemento)
// }

try {
    console.log("En el Try se agrega el código a evaluar" )
    noExist;
    console.log("Segundo mensake en el try ")
} catch (error) {
    console.log("Caputara cualquier error surgido o lanzado en el try")
    console.log(error)
} finally{
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch")
}