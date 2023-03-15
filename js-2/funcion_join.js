function join(arr) {
    let resultado = "";
    if (arr.length === 0) {
        return resultado;
    } else {
        for (let i = 0; i < arr.length; i++) {
            resultado = resultado + arr[i] + " ";
        }
    }
    return resultado;

}



console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""