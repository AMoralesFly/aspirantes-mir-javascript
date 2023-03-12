function suma(num) {
  if (num <= 0) {
    return 0;
  } else {
    sumatoria = (num * (num + 1) / 2);
    return sumatoria;
  }
}

console.log(suma(4));
console.log(suma(10))
console.log(suma(15))
