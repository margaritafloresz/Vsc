// 1. Solicitar 3 numeros (entre el 1 y 100), definir cuál es el mayor//
// 2. Solicitar 3 numeros (entre el 1 y 100), definir cuál es el menor//
let numeroA = 67;
let numeroB = 89;
let numeroC = 25;


if ((numeroB > numeroA) && (numeroB > numeroC)){
    console.log ("Numero B es el mayor ");
    if ((numeroA < numeroC )){
        console.log ( "Numero A es el menor "); 
    }
    else {
    console.log ( "Numero C es el menor ");
}

} 

else if( (numeroA > numeroB) && (numeroA > numeroC)){
    console.log( "Numero A es el mayor  ");
    if ((numeroB < numeroC)){
        console.log ("Numero B es el menor");
    }
    else {
        console.log ("Numero C es el menor");
    }
}
    
else {
    console.log ("Numero C es mayor "); 
    if ((numeroB < numeroA )){
        console.log ("Numero B es menor");
    }
    else{ 
        console.log( "Numero A es menor");
    }
}

