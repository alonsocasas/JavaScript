var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas.length);

//Insertamos al último
var masFrutas = frutas.push("Uvas");
//Eliminamos el último
var ultimo = frutas.pop("Uvas");
//Isertamos al inicio
var nuevaLongitud = frutas.unshift("Uvas");
//Eliminamos el primero
var borrarFruta = frutas.shift("Uvas");
//Saber la posición de un elemento
var posicion = frutas.indexOf("Cereza")