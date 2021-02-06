// variables para el boton
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
let boton

uno.addEventListener("click", () => {
    boton = 1
    sw(boton);
});
dos.addEventListener("click", () => {
    boton = 2
    sw(boton);
});
tres.addEventListener("click", () => {
    boton = 3
    sw(boton);
});
cuatro.addEventListener("click", () => {
    boton = 4
    sw(boton);
  });
cinco.addEventListener("click", () => {
    boton = 5
    sw(boton);
});



const sw = n => {
    switch (n) {


        
// numero entre el 1 y 100
case 1:

let numero = Number (prompt("Escoge un número entre el 1 y 100"));

if (numero <= 100 ){
   for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}
else if(isNaN(numero)){
    alert("Lo ingresado no es un número")
}  
else{
    alert( numero +  " es mayor a 100")
} 
break;

// caballo blanco de Napoleon

case 2:

    let horse = "";

    if (horse != "blanco") {

      prompt("¿De qué color es el caballo blanco de Napoleón?");
     }
    do {
      horse = prompt("¿De qué color es el caballo blanco de Napoleón?");
      } 

    while (!(horse.trim().toLowerCase() === "blanco"));
     break;

// promedio de notas

case 3:

    let Mate = Number(prompt("¿Cuál fue tu promedio de Matemáticas?")); 
    let Fisica = Number(prompt("¿Cuál fue tu promedio de Física?"));
    let Ciencias = Number(prompt("¿Cuál fue tu promedio de Ciencias?34"));
    
    var p = (parseFloat(Mate)+parseFloat(Fisica)+parseFloat(Ciencias))/3;
    alert("Su promedio es: "+  Math.trunc(p))
  break;



// frutas
case 4:

    let frutaUno = prompt("Ingresa el nombre de tu fruta preferida");
    let frutaDos = prompt("Ingresa el nombre de la fruta preferida de alguien que quieres");
    let frutaTres = prompt("Ingresa el nombre de la fruta que menos te gusta");
    
    let Fruta = [frutaUno, frutaDos, frutaTres]

    Fruta.filter(fruit => fruit != "manzana").forEach( total => console.log(total));

    for ( total of Fruta); 
    break;


// vocales y consonantes
    case 5:
        let name = (prompt("¿quieres saber cuantas vocales y consonantes tiene tu nombre? Ingresalo aqui:"));
        let Vocales = name.match(/[aeiou]/gi).length;
        let Total = name.match(/[a-z]/gi).length;
        let consonantes = Total - Vocales;

            alert("Tu nombre tiene" + " " + Vocales + " " + "vocales" + " " + "y tiene" + " " + consonantes + " " + "consonantes");
        break;

    
    }
}