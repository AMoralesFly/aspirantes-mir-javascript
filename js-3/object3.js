let receta = {};
receta.nombre = "sandwich";
receta.ingredientes = [];

receta.ingredientes.push({ nombre: "pan", cantidad: 2 });
receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });

console.log(receta.ingredientes[0].nombre);

let totalcantidad = 0;
receta.ingredientes.forEach(function (ingrediente) {
    totalcantidad += ingrediente.cantidad;
});

console.log(totalcantidad);