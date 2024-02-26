


let registro = new Array ();

let documento = prompt("Introduzca su numero de documento: ")
registro.push(documento);
let nombre = prompt("Introduzca su Nombre: ")
registro.push(nombre);
let apellido = prompt("Introduzca su Apellido: ")
registro.push(apellido);
let correo = prompt("Introduzca su correo electronico: ")
registro.push(correo);
let salario = prompt("Introduzca su salario: ")
registro.push(salario);
let programa = prompt("Introduzca su programa: ")
registro.push(programa);
let institucion = prompt("Introduzca su institucion educativa: ")
registro.push(institucion);
let estaActivo = prompt("Esta activo?")
registro.push(estaActivo);


for(let i = 0 ; i < registro.length; i++){

        console.write("Valor ", registro[i] + "</br>")
}
