var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log("Hola " + estudiante);  
}

//Primera opción
for(var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i]);
}

//Segunda opción
for(var estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}

//While
while(estudiantes.length > 0){
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}