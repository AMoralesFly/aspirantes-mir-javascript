function bmi(weight,height) {
 if(weight> 0 && height> 0) {
 const imc = weight/(height**2);
 return imc;
}

console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75))