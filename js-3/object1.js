
//Creando el objeto//
let pedro = {
    nombre: "pedro perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
};

//Mostrar la edad de la persona //
console.log(pedro.edad);

// se añade la propiedad estatura y el valoor //
pedro.estatura = 1.8;
console.log(pedro);

// se borra la propiedad activo del objeto //
delete pedro.activo;
console.log(pedro);

// se recorre el objeto y sus pares se imprimen en consola //
for (const [keys, values] of Object.entries(pedro)) {
    console.log(`${keys} : ${values}`)
}

// se añade la funcion saluda //

pedro.saluda = function () {
    console.log(`hola, me llamo ${this.nombre}`);
}

console.log(pedro);

//se invoca la funcion saluda//
console.log(pedro.saluda());


