console.log('Task 1: ');

let arr = [1, 7, 3, 'ag7sd', -5, NaN, 4, undefined, -12, 77, 'agd'];

// === === === === === max === === === === === method:
// in the case when the array contains elements that are not a number, the method cannot determine max / min.

// let max_meth = Math.max(...arr);
// console.log('max with method: ' + max_meth);

// === === === max cycle:

let max = getMaxOfArray(arr);

function getMaxOfArray(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log('max value: ' + max);


// === === === === === min === === === === === method:

// let min_meth = Math.min(...arr);
// console.log('min with method: ' + min_meth);

// === === === min cycle:

let min = getMinOfArray(arr);

function getMinOfArray(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log('min value: ' + min);


// === === === === === sum === === === === ===


let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        continue
    }
    if (typeof arr[i] == "number") {
        result += arr[i];
    }
}
console.log('sum: ' + result);