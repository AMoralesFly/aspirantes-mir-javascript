
function max(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let numMax = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > numMax) {
            numMax = arr[i];
        }
    }
    return numMax;
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined