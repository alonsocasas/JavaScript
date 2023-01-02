var piedra = "Piedra";
var tijera = "Tijera";
var papel = "Papel";

function juego(oper1, opCPU){
  if(oper1 != opCPU){
    if(oper1 === "Piedra"){
      if(opCPU === "Tijera"){
        console.log("Ganaste!!")  
      }else{
        console.log("Gana la CPU")
      }
    }else if(oper1 == "Papel"){
      if(opCPU === "Piedra"){
        console.log("Ganaste!!")       
      }else{
        console.log("Gana la CPU")
      }
    }else{
      if(opCPU === "Piedra"){
       console.log("Gana la CPU")
      }else{
        console.log("Ganaste!!") 
      }
    }
  }else{
    console.log("Empate, vuelva a jugar") 
  }  
}