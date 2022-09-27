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

let i = 1;

i++;
i--;
++i;
--i;
console.log(i)