//Creacion objeto//
let persona = {
    nombre: "Pedro perez",
    edad: 36,
    ciudad: "Paris",
    profesion: "Developer",
};
//imprime en consola el objeto
console.log(persona);

//creacion de la funcion que crea el string con los valores //
function presentacion(persona) {
    return `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} y soy de la ciuadad de ${persona.ciudad}.`;
};

// llama la funcion y asigna en una variable y la muestra por consola //
let mensaje = presentacion(persona);
console.log(mensaje);

//agrega propiedad hobbie y la muestra por consola//
persona.hobbies = ["nadar", "corre", "cine", "gimnnasio"];

console.log(persona.hobbies);

//creacion del ciclo for //
for (const valoresHobbie of Object.values(persona.hobbies)) {
    console.log(valoresHobbie)
};


