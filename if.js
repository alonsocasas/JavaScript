if(false){
  console.log("if");
}else if(true){
  console.log("else if");
}else{
  console.log("else");
}
/** ** ** ** ** ** ** ** **/
var edad = 18;

if(edad === 18){
  console.log("Puedes votar, será tu 1era votación");
}else if (edad > 18){
  console.log("Puedes votar de nuevo");
}else{
  console.log("Aun no puedes votar");
}

/*Operador ternario*/
condition ? true : false;

//Ejemplo

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No soy un uno";